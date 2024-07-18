import { useNavigate } from "react-router-dom"
import { FlightContext } from "../Context/FlightContext";
import { useContext } from "react";


function NavBar() {
    const navigate = useNavigate();

    const { current_user, set_flight_id } = useContext(FlightContext)

    const goTo = (path) => {
        navigate(path)
    }

    return (
        <nav>
        <div className="logo">
            <img src="public/logo.webp" height="100%" width="100%" />

        </div>
        <div className="box2"> <h2>{
            Object.keys(current_user).map((item, i) => (
                <li key={i}>
                    <span>{current_user[item].name}</span>
                </li>

            ))
        } </h2></div>
        <div className="nav_box">
            <ul>
                <li><a onClick={() => { goTo("/profile") }}>Home</a></li>
                <li><a onClick={() => { goTo("/search-flight") }}>Search Flight</a></li>
                <li><a onClick={() => { goTo("/booking-history") }}>Booking History</a></li>
                <li><a onClick={() => { goTo("/all-flight-list") }}>Available Flight</a></li>
                <li><a onClick={() => { goTo("/") }}>LogOut</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar