import React, { useState, useEffect } from 'react';

function Example() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // 在这里执行你想要的副作用操作
    // 例如，显示或隐藏组件
    if (showComponent) {
      // 显示组件
    } else {
      // 隐藏组件
    }
  }, [showComponent]);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        切换组件显示
      </button>
      {showComponent && <Component />}
    </div>
  );
}

function Component() {
  return <div>这是一个组件</div>;
}
