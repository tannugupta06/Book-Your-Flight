import NavBar from "../Components/NavBar"
import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FlightContext } from "../Context/FlightContext"



function BookingHistoryPage(params) {

    const { bookingData, SetBookingData } = useContext(FlightContext)

    // const [user_name, set_user_name] = useState("")
    // const [users_email, set_users_email] = useState("")
    // const [user_phone, set_user_phone] = useState("")
    // const [passenger_count, set_passenger_count] = useState()

    // const [flightS_id, set_flightS_id] = useState()
    // const [flight_name, set_flight_name] = useState()
    // const [flight_from, setflight_from] = useState()
    // const [flight_to, set_flight_to] = useState()
    // const [flight_boarding_date, set_flight_boarding_date] = useState()
    // const [flight_reaching_date, set_flight_reaching_date] = useState()
    // const [flight_boarding_time, set_boarding_time] = useState()
    // const [flight_reaching_time, set_reaching_time] = useState()
    // const [cost, set_flight_cost] = useState()



    return (
        <>
            <NavBar></NavBar><br />

            <div >
                {
                    bookingData?.map((b, index) => {
                        return (
                            <><br />
                                <div className="container-history">
                                    BookingId: <span>{b.id}</span><br />
                                    Name: <span>{b.userName}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Email: <span>{b.userEmail}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Phone Number: <span>{b.userPhone}</span><br />
                                    No.Of Passengers <span>{b.passengetCount}</span><br />
                                    FlightId: <span>{b.flightId}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Flight Name: <span>{b.flightName}</span><br />
                                    Flight Source: <span>{b.flightSource}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Flight Destination: <span>{b.flightDestination}</span><br />
                                    Departure Date: <span>{b.flightDepDate}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Arriving Date: <span>{b.flightArvDate}</span><br />
                                    Departure Time: <span>{b.flightDepTime}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Arriving Time: <span>{b.flightArvTime}</span><br />
                                    Flight Cost: <span>{b.flightCost}</span><br />
                                </div>
                            </>
                        )
                    })

                }



                {/* //     products?.map((p, index) => {
                    //         return (<tr key={index}>
                    //             <td>{p.id}</td>
                    //             <td>{p.name}</td>
                    //             <td>{p.price}</td>
                    //             <td>{p.quantity}</td>
                    //             <td><button onClick={() => { goTo("/product-details/id"); setpro_id(p.id) }}>Product Details</button></td>
                    //         </tr>)
                    //     })
                    // } */}

            </div >



        </>
    )

}

export default BookingHistoryPage

{/* 
BookingId: <span></span>, <br />
                Name: <span></span> Email: <span></span> No.Of Passengers: <span></span><br />
                FlightId: <span></span> & nbsp;& nbsp;& nbsp;& nbsp;& nbsp;& nbsp;Flight Name: <span></span><br />
                Flight Source: <span></span> & nbsp;& nbsp;& nbsp;& nbsp;& nbsp;& nbsp; Flight Destination: <span></span><br />
                Departure Date: <span></span> & nbsp;& nbsp;& nbsp;& nbsp;& nbsp;& nbsp;Arriving Date: <span></span><br />
                Departure Time: <span></span> & nbsp;& nbsp;& nbsp;& nbsp;& nbsp;& nbsp; Arriving Time: <span></span><br />
                Flight Cost: <span></span><br /> */}