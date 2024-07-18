import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import flight_details from "../../Flight_Details";
import { FlightContext } from "../Context/FlightContext";


function SearchFlightPage(params) {

    const navigate = useNavigate();

    const { searchedFlightData, setSearchedFlightData } = useContext(FlightContext)

    const [source, setsource] = useState()
    const [sourceError, setsourceError] = useState("")

    const [destination, setDestination] = useState()
    const [destinationError, setdestinationError] = useState("")

    const [boardingDate, setboardingDate] = useState()
    const [BdateError, setBdateError] = useState("")

    const [reachingDtae, setreachingDtae] = useState()
    const [RdateError, setRdateError] = useState("")

    const [SearchData, setsearchData] = useState([])

    const goTo = (path) => {
        navigate(path)
    }

    const searchingHandler = () => {
        savingSearchData();
        searchingFlight();
        console.log(searchedFlightData);
        goTo("/matched-flight")
    }

    const savingSearchData = () => {
        let isValid = true;

        if (source == "") {
            isValid = false
            setsourceError("Enter The Source")
        }
        if (destination == "") {
            isValid = false
            setdestinationError("Enter the Destination")

        }

        if (boardingDate == "") {
            isValid = false
            setBdateError("Enter Boarding Date")
        }
        if (reachingDtae == "") {
            isValid = false
            setRdateError("enter Boarding Date")
        }
        if (isValid) {
            const searchData = {}
            searchData.source = source
            searchData.destination = destination
            searchData.boardingDate = boardingDate
            searchData.reachingDtae = reachingDtae
            setsearchData((currentValue) => {
                // currentValue.splice(0)
                currentValue.push(searchData)
                return [...currentValue]
            });

        }
        console.log(SearchData);
    }

    const searchingFlight = () => {
        const matchedFlights = flight_details.filter((element) => {
            const sourceAirport = element.from;
            const departureAirort = element.to;
            const boarding_date = element.boarding_date;
            const reaching_date = element.reaching_date;


            if (
                (sourceAirport.toUpperCase() == source.toUpperCase() &&
                    departureAirort.toUpperCase() == destination.toUpperCase()) ||
                (boarding_date.toUpperCase() == boardingDate.toUpperCase() &&
                    reaching_date.toUpperCase() == reachingDtae.toUpperCase())

            ) {
                return element;
            }
        });

        if (matchedFlights.length > 0) {
            setSearchedFlightData((currentValue) => {
                // currentValue.splice(0);
                currentValue.push(...matchedFlights);
                return currentValue;
            });
        } else {
            alert("No Flight Found")
            setSearchedFlightData([]);
        }

    }
    return (
        <>
            <div><NavBar /></div><br /><br />
            <div>
                <center>
                    <form className="container">
                        <h1>Search Your Journey</h1>
                        {/* (input the details)<br /> */}
                        <lable><b>SOURCE</b></lable><br />
                        <input type="text" id="source" name="source"
                            onChange={(event) => { setsource(event.target.value); setsourceError("") }} placeholder="Boarding the flight from..." /><br />
                        <span>{sourceError}</span><br />
                        <lable><b>DESTINATION </b></lable><br />
                        <input type="text" id="desti" name="desti"
                            onChange={(event) => { setDestination(event.target.value); setdestinationError("") }} placeholder="Destination of the flight..." /><br />
                        <span>{destinationError}</span><br />
                        <lable><b>DATE OF BOARDING</b></lable><br />
                        <input type="date" id="boarding_date" name="boarding_date"
                            onChange={(event) => { setboardingDate(event.target.value); setBdateError("") }} /><br />
                        <span>{BdateError}</span><br />
                        <lable><b>DATE OF REACHING</b></lable><br />
                        <input type="date" id="reaching_date" name="reaching_date"
                            onChange={(event) => { setreachingDtae(event.target.value); setRdateError("") }} /><br />
                        <span>{RdateError}</span><br />
                    </form>
                    <button onClick={searchingHandler}>SEARCH</button>
                </center>
            </div>
        </>

    )

}

export default SearchFlightPage;