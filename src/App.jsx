import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
const [openmodal, setOpenmodal]=useState(false)

  return (
    <div>
      <button onClick={()=>{setOpenmodal(true)}}>Mi modal</button>

      <Modal openmodal={openmodal} onClose={()=>setOpenmodal(false)}/>
    </div>
  );
}

export default App;
