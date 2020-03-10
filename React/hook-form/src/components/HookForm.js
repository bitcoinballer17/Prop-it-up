import React from 'react';

    const HookForm = ({onChangeHandler, onSubmitHandler, HookForm}) => {
        return(
            <div>
                <form onSubmit={onSubmitHandler}>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Email</label>
                    <input type="email" name="email" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Password</label>
                    <input type="password" name="password" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                    <br/>   
                    <input type="submit" />     
                </form>
            </div>
        );
    }
    
    export default HookForm;