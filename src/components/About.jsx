
import { useState } from "react";
import "./About.css";
import baseurl from "../Api";

const About = () => {
    const [file, setFile] = useState(null);
    var[selectedimage,setSelectedimage] = useState();
    const [inputs,setInputs] = useState({"title":'',"desc":''});

    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
      }

    const handleimage =(event)=>{
        const file = event.target.files[0];
        setSelectedimage(file)
        setFile(file)
        inputs.image=file;
    }


    const savedata =(event)=>{
        event.preventDefault();
      console.log("dgjks")
    
      const formdata = new FormData();
      formdata.append('title',inputs.title);
      formdata.append('desc',inputs.desc);
      formdata.append('image',selectedimage)
    
      
      fetch(baseurl+'/write/writesnew',
      {method:'post',body:formdata,})
      .then((response)=>response.json())
      .then((data)=>{
          alert("record saved")
      })
      .catch((err)=>{
         console.log("error")
      })
    //   navigate('/certificateview')
      }
return (
    <div className="write">
    {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
       
      <form className="writeForm" >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            // onChange={(e) => setFile(e.target.files[0])}
            onChange={handleimage}
          />
          
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write something..."
            type="text"
            className="writeInput writeText"
           name="desc"
           onChange={inputhandler}
          ></textarea>
        </div>
        <button className="writeSubmit"  onClick={savedata}>
          Publish
        </button>
      </form>
    </div>
  );
}

export default About
