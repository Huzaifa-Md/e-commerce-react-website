import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Auth(){
    const [mode, setMode] = useState("signup")
    const {register,
            handleSubmit,
            formState:{errors},}= useForm();
    function onSubmit(){
        alert:("signed up");
    }
    return(
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">
                        {mode==="signup"? "Sign Up": "Login"}
                    </h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-input" type="email" id="email" {...register("email",{required:"Email is required"})}/>
                            {errors.email &&(
                                <span className="form-error">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input className="form-input" type="password" id="password" {...register("password",{required:"Password is reuired",
                                minLength: {
                                    value:6,
                                    message: "password must be atleast 6 characters",
                                },
                                maxLength:{
                                    value:12,
                                    message:"password must be atmost 12 characters",
                                }
                            })} />
                            {errors.password&&(
                                <span className="form-error">{errors.password.message}</span>
                            )}
                        </div>
                        <button className="btn btn-primary btn-large" type="submit"> 
                            {mode==="signup"?"Sign Up": "Login"}</button>
                    </form>
                    <div className="auth-switch">
                        {mode==="signup"?(
                            <p>Already Have an Account?{""}
                            <span className="auth-link" onClick={()=> setMode("Login")}>Login</span></p>
                        ):(
                            <p>Dont have an account?{""}
                            <span className="auth-link" onClick={()=> setMode("signup")}>Sign Up</span></p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}