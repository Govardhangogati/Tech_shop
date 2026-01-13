import { useState } from "react";

const AuthModal = ({ type, close }) => {
  const [formType, setFormType] = useState(type);

  return (
    <div className="modal-overlay">
      <div className="modal-box ">
        <span className="close-btn" onClick={close}>×</span>

        {formType === "login" ? (
          <>
            <h3>Login</h3>
            <div className="d-flex">
                <p style={{color:'lightgray'}}>New to Tech-Shop?</p>
                <p style={{cursor:"pointer"}} onClick={() => setFormType("signup")}>Create an account</p>
            </div>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
            <button>Login</button>
            <div className="d-flex align-items-center mt-4 mb-2" style={{gap:"20px"}}>
                <hr style={{flex:1}}/>
                <span style={{color:'gray',fontSize:'14px'}}>or login with</span>
                <hr style={{flex:1}}/>
            </div>
            <div className="d-flex" style={{gap:"10px"}}>
                <button style={{backgroundColor:"blue",color:'white'}}>Facebook</button>
                <button style={{backgroundColor:"red",color:'white'}}>Google</button>
                <button style={{backgroundColor:"skyblue",color:'white'}}>Twitter</button>
            </div>
            
          </>
        ) : (
          <>
            <h3><b>Signup</b></h3>
            <div className="d-flex">
                <p style={{color:"lightgray"}}>Already have account? </p>
                <p style={{cursor:'pointer'}} onClick={()=>setFormType('login')}>Login </p>
            </div>
            <input placeholder="Username" />
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
            <input placeholder="Confirmpassword" type="password" />
            <button>Signup</button>
            <div className="d-flex align-items-center mt-4 mb-2" style={{gap:"20px"}}>
                <hr style={{flex:1}}/>
                <span style={{color:'gray',fontSize:'14px'}}>or login with</span>
                <hr style={{flex:1}}/>
            </div>
            <div className="d-flex" style={{gap:"10px"}}>
                <button style={{backgroundColor:"blue",color:'white'}}>Facebook</button>
                <button style={{backgroundColor:"red",color:'white'}}>Google</button>
                <button style={{backgroundColor:"skyblue",color:'white'}}>Twitter</button>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
