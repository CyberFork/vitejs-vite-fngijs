import "./App.css";
import QueryApp from "./querytest";
import CustomCarousel from "./components/CustomTop";
import CustomSlide from "./components/CustomSlide";
import { Radio } from "antd";
import { useState } from "react";
import Dps from "./pages/DefaultPage";
function App() {
  const [pageName, setPage] = useState('info');
  function switchPage(e) {
    const v = e.target.value
    setPage(v)
    console.log(v)
  }
  return (
    <>
      
      {pageName === "info" && (
        <>
          <CustomCarousel />
          <CustomSlide />
        </>
      )}

      <Radio.Group
        // value={size}
        // onChange={onChange}
        style={{ marginBottom: 16, width: "100%", flex: 1 }}
      >
        <Radio.Button value="info" style={{ flex: 1 }} onClick={switchPage}>
          报名
        </Radio.Button>
        <Radio.Button value="my" style={{ flex: 1 }} onClick={switchPage}>
          我的
        </Radio.Button>
        {/* <Radio.Button value="large" style={{ flex: 1 }}>
          Large
        </Radio.Button> */}
      </Radio.Group>

      {/* <QueryApp /> */}
    </>
  );
}

export default App;
