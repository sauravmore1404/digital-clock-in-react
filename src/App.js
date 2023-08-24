import React,{useState} from "react";
import "./style.css";

 function App() {
   let time=new Date().toLocaleTimeString();
   const [Ctime,newTime]=useState(time)
   const UpdatedTime=()=>{
    time=new Date().toLocaleTimeString()
     newTime(time)
   }
   setInterval(UpdatedTime,1000)

  return (
    <div className="rapper">
      <h1>{Ctime}</h1>
      <p>DIGITAL CLOCK</p>
    </div>
  );
}
export default App;