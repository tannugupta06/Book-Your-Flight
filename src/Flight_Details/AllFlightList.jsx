import flight_details from "../../Flight_Details";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom"
import { FlightContext } from "../Context/FlightContext";
import { useContext } from "react";


function AllFlightList() {
    const navigate = useNavigate();

    const { current_user, set_flight_id } = useContext(FlightContext)

    const goTo = (path) => {
        navigate(path)
    }

    return (
        <>
            <div><NavBar></NavBar></div>
            <div className="Table">
                <center>
                    <h1>All Flight Details</h1>
                    <h3>Book Your Destination</h3>
                    <table border={2}>
                        <thead>
                            <tr>
                                <th>Flight Id</th>
                                <th>Flight Name</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Boarding Date</th>
                                <th>Reaching Date</th>
                                <th>Boarding Time</th>
                                <th>Reaching Time</th>
                                <th>Total Time</th>
                                <th>Avaiblity</th>
                                <th>luggage Allowed</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                flight_details?.map((f, index) => {
                                    return (<tr key={index}>
                                        <td>{f.id}</td>
                                        <td>{f.name}</td>
                                        <td>{f.from}</td>
                                        <td>{f.to}</td>
                                        <td>{f.boarding_date}</td>
                                        <td>{f.reaching_date}</td>
                                        <td>{f.boarding_time}</td>
                                        <td>{f.reaching_time}</td>
                                        <td>{f.journey_time}</td>
                                        <td>{f.seat_available}</td>
                                        <td>{f.luggage}</td>
                                        <td><button onClick={() => { set_flight_id(f.id); goTo("/flight-details"); }}>Flight Details</button></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </div>
        </>
    )

}

export default AllFlightList;