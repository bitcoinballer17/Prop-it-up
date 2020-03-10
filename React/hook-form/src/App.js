import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HookForm from './components/HookForm';


  const App = () => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
      event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
      }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }

    return (
      <div className='App'>
        <HookForm
          onChangeHandler = {onChangeHandler}
          onSubmitHandler = {onSubmitHandler}></HookForm><br/>

          <p>Your Form Data</p>
          <p>First Name: {formState.firstName}</p>
          <p>Last Name: {formState.lastName}</p>
          <p>Email: {formState.email}</p>
          <p>Password: {formState.password}</p>
          <p>Confirm Password: {formState.confirmPassword}</p>
      </div>
    );
    }
  
    export default App;
