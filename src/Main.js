import React from 'react';
import './Main.css';
import Cookies from 'js-cookie';

function Main() {
    const isLoggedIn = !!Cookies.get('token');
    if (!isLoggedIn)
        window.location.href = '/';

    const logout = () => {
        Cookies.remove('token');
        window.location.href = '/';
        }
  
    return (
        <div>
            <div style={{ textAlign: 'right', marginBottom: '20px', position: 'top' }}>
                <a style={{ fontSize: '20px' }} href={"javascript:void(0);"} onClick={logout} >logout</a>
            </div>
            <div className="app">
                <div className="Main">
                    <a style={{ fontSize: '20px'}} href={process.env.REACT_APP_OEA_BACKEND_HOST+"/vote"} target="_blank" >Export Votes</a><br/><br/>
                    <a style={{ fontSize: '20px'}} href={process.env.REACT_APP_OEA_BACKEND_HOST+"/register"} target="_blank" >Export Registered Engineers</a><br/><br/>
                    <a style={{ fontSize: '20px'}} href={process.env.REACT_APP_OEA_BACKEND_HOST+"/mobile"} target="_blank" >Export Updated Mobiles</a><br/><br/>
                </div>
            </div>
        </div>
    );
}

export default Main;
