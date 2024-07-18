import { Navigate, useNavigate } from "react-router-dom"
import flight_details from "../../Flight_Details";



function Home(params) {
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path)
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <img src="public\logo.webp" height="100%" width="100%" />
                </div>
                <div className="nav_box_home">
                    <ul>
                        <li><a> <button onClick={() => { goTo('\login') }}>Login</button></a></li>
                        <li><a><button onClick={() => { goTo('\SingUp') }}>Register</button></a></li>
                    </ul>
                </div>
            </nav>
            <div className="header"><img src="public\header.jpg" height="350px" width="1368px" />
                <div class="imageText">
                    <h1>Book your Flight</h1>
                    <h2> Your dream Destinations are waiting for you...</h2>


                </div></div>
            <div className="Table">
                <center>
                    <h1>All Flight Details</h1>
                    <h3>Book Your Destination</h3>
                    <button onClick={() => { goTo('\login') }}>Login for booking</button><br /><br />
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

                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </div>
            <div>
                <center>
                    <h1>Contact Us</h1>
                    <div className="container">
                        <form >

                            <label for="fname">Full Name</label><br />
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." /><br />

                            <label for="lname">Email</label><br />
                            <input type="email" id="email" name="email" placeholder="Your Email id.." /><br />

                            <label for="country">Country</label><br />
                            <input type="text" id="country" name="country" placeholder="Your country name.." /><br />

                            <label for="subject">Subject</label><br />
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea><br />

                        </form>
                        <button onClick={() => { alert("Query Submitted Successfully") }}>Submit</button>
                    </div>
                </center>
            </div>
            <div className="aboutus">
                <div className="box"> <center>
                    <h1>About Us</h1>
                    <p>Welcome to our Flight Booking Website!<br />
                        We are dedicated to making your travel experience as seamless and enjoyable as possible.<br />
                        With our user-friendly interface, you can easily search for flights, compare prices,
                        and book your tickets in just a few clicks.</p>
                    <p>Our mission is to provide a reliable and efficient platform for travelers to find the best flight deals.<br />
                        Whether you're planning a business trip or a vacation,<br />
                        we've got you covered with a wide range of options from various airlines......</p>
                    <h2>Thank You For Visiting...</h2>
                </center>
                </div>
            </div>

        </>
    )
}

export default Home