import NavBar from "../Components/NavBar";
import { useContext } from "react";
import { FlightContext } from "../Context/FlightContext";
import { useNavigate } from "react-router-dom"



function SearchedFlightPage(params) {

    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path)
    }



    const { searchedFlightData, set_flight_id } = useContext(FlightContext)

    return (
        <>
            <div><NavBar></NavBar></div><br />
            <div>
                <center><table border={2}>
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
                            searchedFlightData?.map((f, index) => {
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

export default SearchedFlightPage;