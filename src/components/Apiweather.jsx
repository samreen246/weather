import React, { useState } from "react";
import '../css/apiweather.css';

function Apiweather(){

    const[cityname,setCityname]=useState("")
    const[temperature,setTemperature]=useState("")
    const[humidity,setHumidity]=useState("")
    const[feelslike,setFeelslike]=useState("")
    const[windspeed,setwindspeed]=useState("")
    const[load,setLoad]=useState(false)

   
    function Update(){
        fetch(`http://api.weatherapi.com/v1/current.json?key=45ad3f23c2ca426794d42943232207&q=${cityname}&aqi=no`)
        .then(res=>res.json())
        .then(data=>{
            setTemperature(data.current.temp_c)
            setHumidity(data.current.humidity)
            setFeelslike(data.current.feelslike_c)
            setwindspeed(data.current.wind_kph)
            setLoad(true)
            setCityname("")
        })
    }

    return(
        <>
        {
          load?
          <div className="container-fluid">
          <div className="row row1">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 main2">
                <h2 className="mt-4"><span>Weather Update</span></h2>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <h5 className="m-3">Temperature : {temperature}</h5>
                        <h5 className="m-3">Humidity : {humidity}</h5>
                        <h5 className="m-3 ">Feels Like : {feelslike}</h5>
                        <h5 className="m-3">Wind Speed : {windspeed}</h5>
                        <button className="mt-3 py-2 px-3 rounded border-0 fw-5" onClick={()=>setLoad(false)}>Back</button>
                    </div>
                    <div className="col-lg-2"></div>
                </div>  
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>

        :

          <div className="container-fluid">
            <div className="row row1">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 main">
                    <h2 className="mt-4"><span>Enter your city name</span></h2>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <input type="text" className="mt-3 form-control " placeholder="City name" value={cityname} onChange={a=>setCityname(a.target.value)} />
                            <button className="mt-3 py-2 px-3 rounded border-0 fw-5" onClick={()=>Update()}>Update</button>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>  
                </div>
                <div className="col-lg-4"></div>
            </div>
          </div>
        }
        </>    
    );
}

export default Apiweather;