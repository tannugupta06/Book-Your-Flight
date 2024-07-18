import { useNavigate } from "react-router-dom"
import flight_details from "../../Flight_Details";
import { FlightContext } from "../Context/FlightContext";
import { useContext, useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import uuid from "react-uuid";
import { Modal, Button } from "react-bootstrap";



function BookingPage(params) {
    const navigate = useNavigate();

    const { flight_id, set_flight_id, user_email, set_user_email, user, bookingData, SetBookingData } = useContext(FlightContext)

    const goTo = (path) => {
        navigate(path)
    }

    const [user_name, set_user_name] = useState("")
    const [users_email, set_users_email] = useState("")
    const [user_phone, set_user_phone] = useState("")
    const [passenger_count, set_passenger_count] = useState("")
    const [passengerError, setPassengerError] = useState("")

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


    const [show, setShow] = useState(false);


    useEffect(() => {
        flightDetailsHandler(flight_id);
    }, [flight_id])

    useEffect(() => {
        userDetailHnadler(user_email);
    }, [user_email])

    const findproduct = (id) => {
        let foundflight = null;
        foundflight = flight_details.find(f => f.id == id)
        return foundflight
    }

    const finduser = (email) => {
        let founduser = null;
        founduser = user.find(u => u.email == email)
        return founduser
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

    const userDetailHnadler = (email) => {
        let userdetails = finduser(email)
        console.log(userdetails)
        if (userdetails) {
            set_user_name(userdetails.name)
            set_users_email(userdetails.email)
            set_user_phone(userdetails.phone)
        }
    }

    const bookinghandler = () => {
        addingBookingDetails()
        console.log(bookingData);
       
        // setShow(false)

    }

    const addingBookingDetails = () => {
        if (passenger_count == "") {

            setPassengerError("Please fill The Number Of Seats You Want to Book")
        }
        else {
            const newBooking = {}
            newBooking.id = uuid()
            newBooking.userName = user_name;
            newBooking.userEmail = users_email;
            newBooking.userPhone = user_phone;
            newBooking.passengetCount = passenger_count;
            newBooking.flightId = flightS_id;
            newBooking.flightName = flight_name;
            newBooking.flightSource = flight_from;
            newBooking.flightDestination = flight_to;
            newBooking.flightDepDate = flight_boarding_date;
            newBooking.flightArvDate = flight_reaching_date;
            newBooking.flightDepTime = flight_boarding_time;
            newBooking.flightArvTime = flight_reaching_time;
            newBooking.flightCost = cost;
            SetBookingData((currentValue) => {
                currentValue.push(newBooking)
                return [...currentValue]
            });
            goTo("/payment-page")
        }
    }

    return (
        <>

            <div>
                <NavBar></NavBar>
            </div><br />
            <center>
                <div className="booking-container">
                    <h1>Booking Details</h1>
                    <h2>Check The Details Carefully Before Booking</h2>
                    <form>
                        <center>
                            <lable><b>Name Of The Passenger</b></lable>{"   "}
                            <input type="text" id="name" name="name" value={user_name} required /><br />
                            <lable><b>Email of the Passenger</b></lable>{" "}
                            <input type="email" id="email" name="email" value={users_email} readOnly /><br />
                            <lable><b>Phone number</b></lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="tel" id="phone" name="phone" value={user_phone} readOnly /><br />
                            <lable><b>Number Of Seats To Be Book</b></lable>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="number" id="number" name="number" onChange={(event) => { set_passenger_count(event.target.value) }} /><br />
                            <span>{passengerError}</span>
                        </center>
                        <div>
                            {/* <img src="" height="100%" width="100%" /> */}
                            <h4><b>FLIGHT ID: {flightS_id}  <br /><br />
                                FLIGHT NAME: {flight_name} <br /><br />
                                FLIGHT SOURCE: {flight_from}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLIGHT DESTINATION: {flight_to}<br /><br />
                                FLIGHT BOARDING DATE: {flight_boarding_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLIGHT REACHING DATE: {flight_reaching_date}<br /><br />
                                FLIGHT BOARDING TIME: {flight_boarding_time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLIGHT REACHING TIME: {flight_reaching_time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLIGHT TOTAL TIME: {total_time}<br /><br />
                                SEATS AVAIBLITY: {seat_available}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LUGGAGE ALLOWED: {luggage_capacity}<br /><br />
                                <h3>FLIGHT COST: {cost}</h3><br />
                            </b></h4>

                        </div>


                    </form>
                    <button onClick={bookinghandler}>BOOK NOW</button>
                </div>



            </center >
        </>
    )

}

export default BookingPage