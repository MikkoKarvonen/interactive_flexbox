import React from 'react';
import './App.css';

function App() {
  const Box = (props) => {
    return <div className={`box ${props.class}`}>{props.face}</div>
  }

  return (
    <div className="App">
      <div className="boxContainer">
        <Box class="box1" face="｡◕‿‿◕｡"/>
        <Box class="box2" face="ಥ﹏ಥ"/>
        <Box class="box3" face="ᵔᴥᵔ"/>
        <Box class="box4" face="ಠ╭╮ಠ"/>
        <Box class="box5" face="˘▾˘"/>
      </div>
    </div>
  );
}

export default App
