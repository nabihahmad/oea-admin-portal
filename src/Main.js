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
                <button className="button" onClick={logout}>logout</button>
            </div>
            <div className="app">
                <div className="Main">
                    <a style={{ fontSize: '20px'}} href={process.env.REACT_APP_OEA_BACKEND_HOST+"/vote"} >Export Votes</a><br/><br/>
                    <a style={{ fontSize: '20px'}} href={process.env.REACT_APP_OEA_BACKEND_HOST+"/register"} >Export Registered Engineers</a><br/><br/>
                    <a style={{ fontSize: '20px'}} href={process.env.REACT_APP_OEA_BACKEND_HOST+"/mobile"} >Export Updated Mobiles</a><br/><br/>
                </div>
            </div>
        </div>
    );
}

export default Main;
