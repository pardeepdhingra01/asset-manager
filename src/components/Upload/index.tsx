import React, { useState } from 'react';
import { InboxOutlined, SelectOutlined } from '@ant-design/icons';
import { Col, message, Modal, Row, Upload } from 'antd';
import type { RcFile } from 'antd/es/upload';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';
import { defaultImages } from './constants';
import Dragger from 'antd/es/upload/Dragger';

import './upload.css';
import { UploadContainerProps } from './types';
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const props: UploadProps = {
  name: 'file',
  multiple: true,
  listType: "picture",
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

  const UploadButton = ({ crop }: { crop: boolean}) => (
    <ImgCrop rotate zoom beforeCrop={() => crop}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
    </ImgCrop>
  )

const UploadContainer = ({ showCrop, showPreview, enableDelete }: UploadContainerProps) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>(defaultImages);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <>
      <Row>
        <Col xs={24} lg={12}>
          <UploadButton crop={showCrop} />
        </Col>
        <Col xs={24} lg={12} style={{paddingLeft: 10}}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            showUploadList={{
              showDownloadIcon: true,
              downloadIcon: <SelectOutlined style={{color: "#FFF"}}  />,
              showRemoveIcon: enableDelete,
              showPreviewIcon: showPreview
            }}
            onPreview={handlePreview}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt={previewTitle} style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadContainer;