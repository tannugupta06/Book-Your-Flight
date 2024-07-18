import { createBrowserRouter } from "react-router-dom";
// import FilteredFlights from "./Flight_Details/FilteredFlights";
import SearchFlightPage from "./Flight_Details/SearchFlightPage";
import Home from "./Home/Home";
import Login from "./User/Login";
import SingUp from "./User/SingUp";
import UserProfilePage from "./User/UserProfilePage";
import BookingHistoryPage from "./User_Booking_Details/BookingHistoryPage";
import BookingPage from "./User_Booking_Details/BookingPage";
import AllFlightList from "./Flight_Details/AllFlightList";
import FlightDetails from "./Flight_Details/FlightDetails";
import PaymentPage from "./User_Booking_Details/paymentPage";
import SearchedFlightPage from "./Flight_Details/SearchedFlightPage"


const routes = [
    {
        path: "/",
        element: <Home />
    },
    // {
    //     path: "/available-flight",
    //     element: <FilteredFlights />
    // },
    {
        path: "/search-flight",
        element: <SearchFlightPage />
    },
    {
        path: "/matched-flight",
        element: <SearchedFlightPage />
    },
    {
        path: "/flight-details",
        element: <FlightDetails />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/SingUp",
        element: <SingUp />
    },
    {
        path: "/profile",
        element: <UserProfilePage />
    },
    {
        path: "/booking-history",
        element: <BookingHistoryPage />
    },
    {
        path: "/booking-page",
        element: <BookingPage />
    },
    {
        path: "/all-flight-list",
        element: <AllFlightList />
    },
    {
        path: "/payment-page",
        element: <PaymentPage />
    }

]


const router = createBrowserRouter(routes);

export default router