import { Modal, Tabs } from 'antd';
import { AssetManagerProps } from './types';
import { generateTabs } from './helpers';
import {
  defaultActiveTab,
  defaultConfirmLoading,
  defaultIsGiphy,
  defaultIsPixabay,
  defaultIsUpload,
  defaultWidth,
} from './defaults';

export const AssetManager = ({
  title,
  width = defaultWidth,
  open,
  tabs,
  confirmLoading = defaultConfirmLoading,
  defaultTab = defaultActiveTab,
  isUpload = defaultIsUpload,
  isPixabay = defaultIsPixabay,
  isGiphy = defaultIsGiphy,
  onOk,
  onCancel,
}: AssetManagerProps) => {
  const items = tabs ?? generateTabs({ isUpload, isGiphy, isPixabay });
  return (
    <Modal
      title={title}
      width={width}
      open={open}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      cancelText="Close"
      okText="Upload"
    >
      <Tabs defaultActiveKey={defaultTab} items={items} />
    </Modal>
  );
};
