import React, { useState } from "react";

import styles from "./Form.module.css";
const Form = () => {
  const [formData, setFormData] = useState({
    showPassword:false,
  });

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  const handelChange = (e) => {
    const inputName = e.target.name;
    // CheckBox
    if(e.target.type==="checkbox"){
      // console.log(e.target.checked);
      setFormData({
        ...formData,
        [inputName]:e.target.checked,
      })
    }

    // File
    else if(e.target.type==="file"){
      // console.log(e.target.files)
      setFormData({
        ...formData,
        [inputName]: e.target.files,
      });
    }

    else{
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    };
    }
    

  return (
    <div className={styles.form}>
      Form
      <form onSubmit={handelSubmit}>
        <div className={styles.form}>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            placeholder="name"
            onChange={handelChange}
          />
        </div>

        <div className={styles.form}>
          <label>Password</label>
          <input type={(formData.showPassword)?"text":"password"} name="password" onChange={handelChange} />
        </div>

        <div className={styles.form}>
          <label>Show Password</label>
          <input type="checkbox" name="showPassword" onChange={handelChange} />
        </div>

        <div className={styles.form}>
          <label>Age</label>
          <input type="number" name="age" onChange={handelChange} />
        </div>

        <div className={styles.form}>
          <label>DOB</label>
          <input type="date" name="dob" onChange={handelChange} />
        </div>

        <div className={styles.form}>
          <label>Resume</label>
          <input type="file" name="resume" onChange={handelChange} />
        </div>

        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};

export default Form;
