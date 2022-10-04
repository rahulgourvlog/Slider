import logo from './logo.svg';
import './App.css';
import Sliderdragdrop from './components/Slider';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import sliderdata from "./components/db.json";
function App() {
  const [data,Setdata]=useState(sliderdata.data);


const reorder=(list,startindex,endIndex)=>{
  const result=Array.from(list);

  const [remove]=result.splice(startindex,1);
  result.splice(endIndex,0,remove);
  return result

}

// const getliststyle=(isDraggingOver)=>({
//   background:isDraggingOver ? "lightblue":'lightgray'
// })



  const onDragEnd=(result)=>{
    if(!result.destination){
      return 
    }
    const reorderedItems= reorder(data,result.source.index,result.destination.index)
    Setdata(reorderedItems)
  }
  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
<Droppable droppableId='droppable'>
{(provided,snapshot)=>(
  <div {...provided.droppableProps} ref={provided.innerRef} >
    < Sliderdragdrop data={data}/>
  </div>
)}
 
</Droppable>
      </DragDropContext>
    
    </div>
  );
}

export default App;
