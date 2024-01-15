import React, { useEffect } from 'react';
import { projectid } from '../Common/Constants';

function Login() {
    const url = "https://academics.newtonschool.co/api/v1/bookingportals/login";
    async function login() {
        console.log("inside login");
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    projectID: projectid,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'pratik1234589@gmail.com',
                    password: '12345',
                    appType: 'bookingportals',
                }),
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                const token = data.token;
                localStorage.setItem('token', token);
                console.log("login successful");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
    useEffect(() => {
        login();
    }, []); 
    return <div>Login</div>;
}

export default Login;
