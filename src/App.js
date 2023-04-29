import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'axios'
import axios from "axios";

function App() {
  const [select, setSelect] = useState(false);
  // console.log(multiple);
  const [data, setData] = useState({
    image: "",
    multiple:""
  });
  console.log(data)
  const updateValue=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const [res,setRes]=useState([])
  const fileChange=(e)=>{
    setData({
      ...data,
      image:e.target.files[0]
    })
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    try {
      axios.post('',data).then((res)=>setRes(res.data)).catch((err)=>console.log(err));
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
   
      
        <div style={{width:"100vw",height:"100vh",position:"absolute",top:"30%"}}>
          <div style={{margin:"auto",width:"50%",textAlign:"center",display:"flex",flexDirection:"column"}}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Select Single or Multiple</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Single"
                  name="multiple"
                  type="radio"
                  id="single"
                  value="no"
                  onClick={updateValue}
                />
                <Form.Check
                  inline
                  label="Multiple"
                  name="multiple"
                  type="radio"
                  id="multiple"
                  value="yes"
                  onClick={updateValue}
                />
              </div>
            </Form.Group>
          </Form>
          <div className="mb-3">
            <input type="file" onChange={fileChange}/>
          </div>
        <div>
          <Button variant="outline-primary" onClick={submitHandler}>Upload!</Button>
        </div>
      </div>
        </div>
    
  );
}

export default App;
