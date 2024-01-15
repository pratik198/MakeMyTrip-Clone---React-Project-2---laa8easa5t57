import React, { useEffect } from 'react'
import '../Traincard/Traincard.scss';
// import axios from 'axios';
function Traincard() {
    const getData = async () => {
        const source = "Mumbai"; 
        const destination = "Amritsar"; 
        const day = "Fri"; 
    
        const ApisURL = `https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${source}","destination":"${destination}"}&day=${day}`;
    console.log("Train card is clicked")
        try {
            const response = await fetch(ApisURL, {
                method: "GET",
                headers: {
                    projectID: "f104bi07c490", 
                    'Content-Type': 'application/json',
                },
            });
    
            console.log(response);
    
            if (response.ok) {
                console.log("train data");
                const data = await response.json();
                console.log(data);
            } else {
                console.error("error while train data fetching");
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <h1>Traincard</h1>
        </div>
  )
}

export default Traincard