import React from 'react'


const About = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="my-5">About Us</h1>
            <p className=" mx-5" style={{
                padding: "0 250px"
            }}>

Weather app is a team of IT experts and data scientists that has been practising deep weather data science since 2014. For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs. Headquarters in London, UK.
            
Our highly efficient technological platform is based on ML, neural networks, and data science technologies.
The proprietary convolutional neural network collects and processes wide range of data sources to cover any location and consider the local nuances of climate.

We collect and process weather data from different sources such as global and local weather models, satellites, radars and vast network of weather stations.</p>
        </div>
    )
}


export default About;