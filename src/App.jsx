import React from 'react';
import Split from "react-split";
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

const App = () => {

  return (
    <>
      <Split 
        className="flex w-full p-4"
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="left"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
    >
        <ComponentA />
        <ComponentB />
      </Split>
    </>
  )
}

export default App;