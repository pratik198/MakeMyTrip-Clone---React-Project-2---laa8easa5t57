import React, { useEffect } from 'react'
import './SignUp.scss'

import { projectid } from '../Common/Constants';
function SignUp() {
    const url = "https://academics.newtonschool.co/api/v1/bookingportals/signup";

    async function signup() {
        console.log("inside signup");
        try {
            const response = await fetch(url,
                {
                    method: "POST",
                    headers: {

                        projectID: projectid,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: 'pratik1234589',
                        email: 'pratik1234589@gmail.com',
                        password: '12345',
                        appType: 'bookingportals'
                    })
                }

            );

            console.log(response);
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                // const token = data.token;
                // localStorage.setItem('token', token);
                console.log("sign up successful")
            }
        } catch (error) {
            console.error("Error during sign-up:", error);

        }
    }


    useEffect(() => {
        signup();
    }, []);

    return (
        <div>SignUp</div>
    )
}

export default SignUp