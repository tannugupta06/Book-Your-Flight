import NavBar from "../Components/NavBar"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


function PaymentPage(params) {

    const [downloadTicket, setdOwnloadTicket] = useState()

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate(path)
    }


    return(
        <>
        <center>
            <NavBar></NavBar>
            <h1>Thank You For Choosing Us</h1>
            <button onClick={()=>{ setdOwnloadTicket(<button onClick={()=>{goTo("/booking-history")}}>Download Ticket</button>);}}>Click To Pay</button><br></br><br></br>
            <span>{downloadTicket}</span>
        </center>
        </>
    )

}

export default PaymentPage