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

  const flexDirections = [
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]

  const flexWraps = [
    'nowrap',
    'wrap',
    'wrap-reverse'
  ]

  let [toShow, setToShow] = useState(3)

  let initialStyle = {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  }

  let [style, setStyle] = useState(initialStyle)

  const editBoxes = (a) => {
    setToShow(toShow+a)
  }

  const editStyle = (property, value) => {
    let editedStyle = Object.assign({} ,style)
    editedStyle[property] = value
    setStyle(editedStyle)
  }

  const Box = (props) => {
    return <div className={`box ${props.class}`}>{props.face}</div>
  }

  const Button = (props) => {
    return <button onClick={() => editStyle(props.property, props.style)}>{props.style}</button>
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
          {flexDirections.map((item, i)=>{
            return <Button key={i} property={'flexDirection'} style={item}/>
          })}
        </div>
        <div className="btn-group">
          {flexWraps.map((item, i)=>{
            return <Button key={i} property={'flexWrap'} style={item}/>
          })}
        </div>
        <button onClick={toShow < boxes.length ?()=> editBoxes(1) : null}>+</button>
        <button onClick={toShow > 1 ?()=> editBoxes(-1) : null}>-</button>
      </div>
    </div>
  );
}

export default App
