import React, { useEffect } from 'react';
import '../Traincard/Traincard.scss';

function Traincard() {
    const getData = async () => {
        const source = "Mumbai";
        const destination = "Amritsar";
        const day = "Fri";

        const ApisURL = `https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${source}","destination":"${destination}"}&day=${day}`;

        try {
            const response = await fetch(ApisURL, {
                method: "GET",
                headers: {
                    'projectID': 'laa8easa5t57', 
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log("Train data:");
                const data = await response.json();
                console.log(data);
            } else {
                console.error(`Error while fetching train data: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error during API call:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Traincard</h1>
        </div>
    );
}

export default Traincard;
