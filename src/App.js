import React , { useState } from 'react';
import './App.css';

function App() {
  const boxes = [{
    class: "box1",
    face: "｡◕‿‿◕｡"
  },{
    class: "box2",
    face: "ಥ﹏ಥ"
  },{
    class: "box3",
    face: "ᵔᴥᵔ"
  },{
    class: "box4",
    face: "ಠ╭╮ಠ"
  },{
    class: "box5",
    face: "˘▾˘"
  }]

  let [toShow, setToShow] = useState(3)

  let initialStyle = {
    flexDirection: 'row',
  }

  let [style, setStyle] = useState(initialStyle)

  const editBoxes = (a) => {
    setToShow(toShow+a)
  }

  const editStyle = (dir) => {
    let editedStyle = Object.assign({} ,style)
    editedStyle.flexDirection = dir
    setStyle(editedStyle)
  }

  const Box = (props) => {
    return <div className={`box ${props.class}`}>{props.face}</div>
  }

  return (
    <div className="App">
      <div className="boxContainer" style={style}>
        {boxes.map((item,i) => {
          if (i < toShow){
            return <Box key={i} class={item.class} face={item.face}/>
          }
          return null
        })}
      </div>
      <div className="controls">
        <div className="btn-group">
          <button onClick={() => editStyle('row')}>row</button>
          <button onClick={() => editStyle('row-reverse')}>row-reverse</button>
          <button onClick={() => editStyle('column')}>column</button>
          <button onClick={() => editStyle('column-reverse')}>column-reverse</button>
        </div>
        <button onClick={toShow < boxes.length ?()=> editBoxes(1) : null}>+</button>
        <button onClick={toShow > 1 ?()=> editBoxes(-1) : null}>-</button>
      </div>
    </div>
  );
}

export default App
