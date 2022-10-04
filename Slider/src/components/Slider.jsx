import React, { useState } from 'react'
//import sliderdata from "./db.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styled from "styled-components";
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"
const SliderComp=Styled.div`
width:80%;
margin:auto;

margin-top:30px;

.slick-prev:before,
.slick-next:before {
  color:red;
font-size:25px;

}

.img{
    width:100%;
    height:400px;
    border-radius:15px;
    
  
}
.imgdiv{
    width:320px;
    height: 400px;
       border-radius:15px;
    box-shadow:0.5px 0.5px 0.2px  black; 
}
.main{
    width:280px;
    height: 400px;
  
 
  

}


`

const Sliderdragdrop = (props) => {
const {data}=props

    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        indicators:true,
        slidesToScroll: 1,
        arrows:true
    }
  return (
   <>
   <SliderComp>
   <Slider  {...settings}>
{
data.map((el,index)=>{

    return(
        <Draggable key={el.id} draggableId={el.id} index={index}>
            {(provided,snapshot)=>(
                <div  className="main" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
<div  className='imgdiv'> 
    <img src={el.url} className="img" alt="not shown " />
</div> 


</div>

            )}
        </Draggable>


    )
})


}


   </Slider>
   
   </SliderComp> 
   </>
  )
}

export default Sliderdragdrop