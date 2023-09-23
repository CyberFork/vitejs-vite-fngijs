import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import { Radio, Tabs } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

const CustomSlide: React.FC = () => {
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <div>
      {/* <Tabs
        defaultActiveKey="1"
        size={size}
        style={{ marginBottom: 32 }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of tab ${id}`,
          };
        })}
      /> */}
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(10).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Card Tabs ${id}`,
            key: id,
            children: `Content of card tab ${id}`,
          };
        })}
      />
      {/* <Radio.Group
        value={size}
        onChange={onChange}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group> */}
    </div>
  );
};

export default CustomSlide;
