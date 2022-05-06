/* eslint-disable no-undef */
import React, { useState } from 'react'
import styles from'./Form.module.css';

// username,password,checkbox,age,date,resumefilefor resume.


const Form = () => {

    const sendData = async() => {
        try{
          let res= await fetch(`http://localhost:3000/Products`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({...formData}),
        }); 
        let data = await res.json();
        // console.log(data); 
        }catch(err){
          console.log(err)
        }
        
    }
    const [formData,setFormData] =useState({
        username:"",
        age:"",
        address:"",
        department:"",
        salary:"",

        maritalstate:false,

        
    });
    const handleChange = (e) =>{
        const inputName = e.target.name;
        // checkbox
        if(e.target.type ==='checkbox'){
          console.log(e.target.value,e.target.checked)
            setFormData({
                ...formData,
                [inputName]:e.target.checked,
            });
        }
        //file
        else if(e.target.type==='file'){
            console.log(e.target.value,e.target.files)

            setFormData({
                ...formData,
                [inputName]:e.target.files,
            });
        }
        else{
        setFormData({
            ...formData,
            [inputName]:e.target.value,
        });
        }
    
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        sendData();
        // fetch api with url ,{method:post,body:JSON.stringify(formData)}
}
  return (
      <div className={styles.form}>
          Form
    <form onSubmit={handleSubmit}>
        <div className={styles.grid}>
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange}/>
        </div>
        {/* <div className={styles.grid}>
            <label>Age</label>
            <input type={formData.showpassword?"text" :"password"}
            name="password" 
             
            // value={formData.password}

            // no need to mention value for user defined 

            onChange={handleChange}/>
        </div> */}
     
        {/* <div>
            <input type="checkbox" name="showpassword" onChange={handleChange}/>
            <label>Show password</label>
            </div> */}
            <div/>
        <div className={styles.grid}>
           
        </div>

        <div className={styles.grid}>
            <label>Age</label>
            <input type="number" name="age" onChange={handleChange}/>
        </div>
        <div className={styles.grid}>
            <label>Address</label>
            <input type="text" name="address" onChange={handleChange}/>
        </div>
        <div className={styles.grid}>
            <label>department</label>
            {/* <input type="file" name="resume" onChange={handleChange}/> */}
            <select onChange={handleChange} name="department">
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="c">d</option>
            </select>
        </div>
        <div className={styles.grid}>
            <label>salary</label>
            <input type="text" name="salary" onChange={handleChange}/>
        </div>
          
        <div>
            <input type="checkbox" name="maritalstate" onChange={handleChange}/>

            <label>married</label>
            </div>

        <div/>
        <input type="submit" name="submit" />

    </form>
    </div>
  )
}

export default Form