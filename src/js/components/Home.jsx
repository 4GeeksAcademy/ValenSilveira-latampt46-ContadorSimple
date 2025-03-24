import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component



const Home = () => {
    let count = 0;

    setInterval(() => {
        const counterElement = document.getElementById("counter");
        if (counterElement) {
            counterElement.textContent = count.toString().padStart(6, "0");
        }
        count++;
    }, 1000);

    return (
        <div className="container">
            <div className="counter-box">
                <div className="icon">⏳</div>
                <div id="counter" className="counter">000000</div>
            </div>
        </div>
    );
};


export default Home;