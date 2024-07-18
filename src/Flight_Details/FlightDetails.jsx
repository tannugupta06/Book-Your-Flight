import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { FlightContext } from "../Context/FlightContext";
import flight_details from "../../Flight_Details";



function FlightDetails(params) {
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path)
    }

    const [flightS_id, set_flightS_id] = useState()
    const [flight_name, set_flight_name] = useState()
    const [flight_from, setflight_from] = useState()
    const [flight_to, set_flight_to] = useState()
    const [flight_boarding_date, set_flight_boarding_date] = useState()
    const [flight_reaching_date, set_flight_reaching_date] = useState()
    const [flight_boarding_time, set_boarding_time] = useState()
    const [flight_reaching_time, set_reaching_time] = useState()
    const [total_time, set_total_time] = useState()
    const [seat_available, set_seat_available] = useState()
    const [luggage_capacity, set_luggage_capacity] = useState()
    const [cost, set_flight_cost] = useState()

    const { flight_id, set_flight_id } = useContext(FlightContext)

    useEffect(() => {
        flightDetailsHandler(flight_id);
    }, [flight_id])

    const findproduct = (id) => {
        let foundflight = null;
        foundflight = flight_details.find(f => f.id == id)
        return foundflight
    }

    const flightDetailsHandler = (id) => {
        let flightdetails = findproduct(id)
        console.log(flightdetails)
        if (flightdetails) {
            set_flightS_id(flightdetails.id)
            set_flight_name(flightdetails.name)
            setflight_from(flightdetails.from)
            set_flight_to(flightdetails.to)
            set_flight_boarding_date(flightdetails.boarding_date)
            set_flight_reaching_date(flightdetails.reaching_date)
            set_boarding_time(flightdetails.boarding_time)
            set_reaching_time(flightdetails.reaching_time)
            set_total_time(flightdetails.journey_time)
            set_seat_available(flightdetails.seat_available)
            set_luggage_capacity(flightdetails.luggage)
            set_flight_cost(flightdetails.cost)
        }
        else {
            alert("No Flight Found")
        }
    }



    return (
        <>
            <center>
                <div className="container">
                        <h1>Flght Details</h1><hr />
                       
                        <div>
                            {/* <img src="" height="100%" width="100%" /> */}
                            <h3>FLIGHT ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flightS_id}</h3>
                            <h3>FLIGHT NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flight_name}</h3>
                            <h3>FLIGHT SOURCE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flight_from}</h3>
                            <h3>FLIGHT DESTINATION:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flight_to}</h3>
                            <h3>FLIGHT BOARDING DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flight_boarding_date}</h3>
                            <h3>FLIGHT REACHING DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flight_reaching_date}</h3>
                            <h3>FLIGHT BOARDING TIME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flight_boarding_time}</h3>
                            <h3>FLIGHT REACHING TIME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{flight_reaching_time}</h3>
                            <h3>FLIGHT TOTAL TIME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total_time}</h3>
                            <h3>SEATS AVAIBLITY:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{seat_available}</h3>
                            <h3>LUGGAGE ALLOWED:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{luggage_capacity}</h3>
                            <h3>FLIGHT COST:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cost}</h3>
1
                        </div>
                        <button onClick={() => {  set_flight_id(flightS_id);goTo("/booking-page"); }}>BOOK FLIGHT</button><br />
                        <button onClick={() => goTo("/all-flight-list")}>FLIGHT LIST</button>
                </div>
            </center>
            {/* <button onClick={() => { goTo('/') }} /> Home */}
        </>

    )
}


export default FlightDetails;