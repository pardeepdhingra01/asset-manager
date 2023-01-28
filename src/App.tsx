import { useState } from 'react';
import AssetManager from './components/AssetManager';
import { Button } from 'antd';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <AssetManager open={open} onCancel={() => setOpen(false)}/>
    </>
  );
};

export default App;
