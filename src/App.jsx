import { RouterProvider } from "react-router-dom"
import router from "./Route"
import { FlightContext } from "./Context/FlightContext"
import { useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState([])
  const [current_user, set_current_user] = useState([])
  const [user_email, set_user_email] = useState()
  const [flight_id, set_flight_id] = useState()
  const [bookingData, SetBookingData] = useState([])
  const [searchedFlightData, setSearchedFlightData] = useState([])

  return (
    <>
      <FlightContext.Provider value={{
        user, setUser, current_user, set_current_user,
        flight_id, set_flight_id, user_email, set_user_email, bookingData, SetBookingData, searchedFlightData, setSearchedFlightData
      }}>
        <RouterProvider router={router} />
      </FlightContext.Provider>
    </>
  )
}

export default App
