import { useState } from "react"

 export default function Form(){
    let [formData, setFormData] = useState({
        fullName:"",
        userName:"",
        password:"",
    });
   let handleInputChange = (event)=>{
    let fieldName  = event.target.name;
    let newValue = event.target.value;
    setFormData((currData)=>{
        currData[fieldName] = newValue;
        return {...currData,[fieldName]:newValue};
    });
   };
   let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName:"",
        userName:"",
        password:"",
    });
   };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Enter Name</label>
            <input placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"></input>
            

            <br></br><br></br>
             <label htmlFor="userName">Enter user Name</label>
            <input placeholder="Enter your full name" value={formData.userName} onChange={handleInputChange} id="userName" name="userName"></input>
            

            <br></br><br></br>
             <label htmlFor="password">password</label>
            <input placeholder="Enter your password" value={formData.password} onChange={handleInputChange} id="password" name="password" type="password"></input>
            <button>Submit</button>
  
        </form>
    )
}