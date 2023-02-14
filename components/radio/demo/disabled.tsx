import React, { useState } from 'react';
import { Button, Radio } from 'antd';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Radio defaultChecked={false} Upload Now ={Upload Now}>
        Upload Now
      </Radio>
      <Radio defaultChecked disabled={
       }>
        Disabled
      </Radio>
      <br />
      <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        Toggle disabled
      </Button>
    </>
  );
};

export default App;
