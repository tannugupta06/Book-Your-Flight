import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FlightContext } from "../Context/FlightContext";


function Login() {

    const [pass, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setpasswordError] = useState("")


    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path)
    }
    const { setUser, user, current_user, set_current_user, user_email, set_user_email } = useContext(FlightContext)

    const findUserByEmail = (email) => {
        let foundUser = null;
        foundUser = user.find(u => u.email == email)
        // console.log(current_user)
        return foundUser
    }

    const loginHndler = () => {
        let any_user = findUserByEmail(email)
        console.log(any_user)

        if (any_user) {
            let password = any_user.password;
            if (password == pass) {
                set_current_user((currentValue) => {
                    currentValue.push(any_user)
                    return [...currentValue]
                });
                goTo("/profile")
            }
            else {
                setpasswordError("Password Does Not Match")

            }
        }
        else {
            setEmailError("Entered Email Does not Exist")
            console.log(any_user)
        }
        return false
    }


    return (
        <>
            <center>
                <div className="main">
                    <h1>Welcom To Our Website</h1>
                    <h3>Enter your login credentials</h3>
                    <form action="">
                        <label for="first">
                            Email:
                        </label>
                        <input type="text"
                            id="first"
                            name="first"
                            placeholder="Enter your User's Email"
                            onChange={(event) => { setemail(event.target.value); setEmailError("") }} required />
                        <span>{emailError}</span><br /> <br />

                        <label for="password">
                            Password:
                        </label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            onChange={(event) => { setpassword(event.target.value); setpasswordError("") }} required />
                        <span>{passwordError}</span><br /><br />


                    </form>
                    <div >
                        <button onClick={() => { loginHndler(email); set_user_email(email) }} className="button">Login</button>
                    </div>
                    <p>Not registered?
                        <button onClick={() => { goTo("/SingUp") }} className="button">Register</button>
                    </p>
                </div>


            </center>

        </>

    )
}

export default Login