import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import user_icon from '../AssetFolder/user.png';
import email_icon from '../AssetFolder/email.png';
import password_icon from '../AssetFolder/password.png';
import yourImage from '../AssetFolder/image.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        let endpoint = action === "Login" ? '/login' : '/signup';

        fetch(`http://127.0.0.1:5000${endpoint}`, {
            method: 'POST',
            body: form
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.suc) {
                navigate('/home');
            } else if (response.err) {
                setError(true);
            }
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center h-screen"
             style={{ backgroundImage: `url(${yourImage})` }}>
            <div className=" bg-black bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Login or Signup</h2>
                <form onSubmit={submitForm} className="flex flex-col space-y-4">
                    {action !== "Login" && (
                        <div className="flex items-center">
                            <img src={user_icon} alt="User Icon" className="h-5 w-5 mr-2" />
                            <input type="text" name="name" placeholder="Name" className="input flex-grow p-2 border border-gray-300 rounded" />
                        </div>
                    )}
                    <div className="flex items-center">
                        <img src={email_icon} alt="Email Icon" className="h-5 w-5 mr-2" />
                        <input type="email" name="email" placeholder="Email ID" className="input flex-grow p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex items-center">
                        <img src={password_icon} alt="Password Icon" className="h-5 w-5 mr-2" />
                        <input type="password" name="password" placeholder="Password" className="input flex-grow p-2 border border-gray-300 rounded" />
                    </div>
                    {error && <p className="text-red-500 text-center">The email already exists</p>}
                    {action !== "Sign Up" && (
                        <div className="text-center text-gray-600">
                            Password missed? <span className="text-blue-500 cursor-pointer">Click here</span>
                        </div>
                    )}
                    <div className="flex justify-between">
                        <button type="button" onClick={() => setAction("Sign Up")} className={`btn ${action === "Login" ? "btn-gray" : "bg-black text-white py-2 px-4 rounded"}`}>Sign up</button>
                        <button type="button" onClick={() => setAction("Login")} className={`btn ${action === "Sign Up" ? "btn-gray" : "bg-black text-white py-2 px-4 rounded"}`}>Login</button>
                    </div>
                    <button type="submit" className="proceed-btn bg-black text-white py-2 px-4 rounded w-full">Proceed</button>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;
