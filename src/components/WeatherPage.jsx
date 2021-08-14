import React, {useEffect, useState} from 'react';
import Axios from "axios";

const WeatherPage = () => {
    const [city,setCity] = useState("");
    const [zip,setZip] = useState("");
    const [weatherReport,setWeatherReport] = useState({
        city: "",
        minTemp: "",
        maxTemp: "",
        currTemp: ""
    });
    useEffect(()=>{

    },[weatherReport,zip,city]);

    const getData = (e) => {
        e.preventDefault();
        if(city){
            Axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a348fd06207bc3926c97032f1c0b940d`).then((res)=>{
            console.log(res);
            console.log(res.data.main);
            setWeatherReport({
                city: res.data.name,
                minTemp: res.data.main.temp_min,
                maxTemp: res.data.main.temp_max,
                currTemp: res.data.main.temp
            });
            setCity("");
            setZip("");
        }).catch((err)=>{
            console.log(err);
        })
        }else if(zip){
            Axios(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},IN&units=metric&appid=a348fd06207bc3926c97032f1c0b940d`).then((res)=>{
            console.log(res);
            console.log(res.data.main);
            setWeatherReport({
                city: res.data.name,
                minTemp: res.data.main.temp_min,
                maxTemp: res.data.main.temp_max,
                currTemp: res.data.main.temp
            });
            setCity("");
            setZip("");
        }).catch((err)=>{
            console.log(err);
        })
        }else{
            setCity("");
            setZip("");
        }
        document.getElementById("city").value = "";
        document.getElementById("zip").value = "";
    }
    const handleChangeCity = (e) =>setCity(e.target.value);
    const handleChangeZip = (e) => setZip(e.target.value);

    return(
        <>
            <div >
                <h1 className="text-center mt-5">Get Weather Updates</h1>
                <form onSubmit={getData} className="d-flex flex-column align-items-center " style={{

                }}>
                    <input type="text" name="city" id="city" placeholder="Enter city name here..." onChange={(e)=>handleChangeCity(e)} className="inp my-3" />
                    <p className=" my-0" style={{
                        fontSize: "20px",

                    }}>OR</p>
                    <input type="number" name="zip code" id="zip" placeholder="Enter zipcode here..." onChange={(e)=>handleChangeZip(e)} className="inp my-3" />
                    <input type="submit" value="FIND" className="button mt-5 " />
                </form>
               {
                   weatherReport.city ? 
                   (
                    <table className=" w-100 mt-3">
                    <tr className="  d-flex justify-content-around  mx-auto w-75 mt-5">
                        <th className="setW ">City</th>
                        <th className="setW ">Min Temperature</th>
                        <th className="setW ">Max Temperature</th>
                        <th className="setW ">Current Temperature</th>
                    </tr>
                    <tr className=" d-flex justify-content-around mx-auto w-75 mt-3">
                        <td className="setWD">{weatherReport.city ? weatherReport.city : ""} </td>
                        <td className="setWD">{weatherReport.minTemp ? weatherReport.minTemp : ""} &#176;C</td>
                        <td className="setWD">{weatherReport.maxTemp ? weatherReport.maxTemp : ""} &#176;C</td>
                        <td className="setWD">{weatherReport.currTemp ? weatherReport.currTemp : ""} &#176;C</td>
                    </tr>
                </table>
                   ): ""
               }
            </div>
            
        </>
    )
};

export default WeatherPage;
