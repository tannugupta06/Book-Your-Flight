import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FlightContext } from "../Context/FlightContext";

function SingUp() {

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path)
    }



    const { setUser, user } = useContext(FlightContext)

    const [username, setusername] = useState("");
    const [usernameError, setusernameError] = useState("");

    const [email, setemail] = useState("")
    const [emailError, setemailError] = useState("")

    const [phone, setphone] = useState("")
    const [phoneError, setphoneError] = useState("")

    const [password, setpassword] = useState("")
    const [passwordError, setpasswordError] = useState("")

    const findUserByEmail = (email) => {
        let foundUser = null;
        foundUser = user.find(u => u.email == email)
        return foundUser
    }

    const Adduser = () => {
        let userExist = findUserByEmail(email)

        let isValid = true;
        if (!userExist) {


            if (!username) {
                isValid = false
                setusernameError("Enter Your Name")
            }
            if (email == "") {
                isValid = false
                setemailError("Enter Your Email")

            }
           
            if (phone == "") {
                isValid = false
                setphoneError("Enter Your Phone Number")
            }
            if (password == "") {
                isValid = false
                setpasswordError("Set a Password For security Purpose")
            }
            if (isValid) {
                const NewUser = {}
                NewUser.name = username
                NewUser.email = email
                NewUser.phone = phone
                NewUser.password = password
                setUser((currentValue) => {
                    currentValue.push(NewUser)
                    return [...currentValue]
                });
                console.log(user)
                goTo("/login");
            }
        }
        else{
            setemailError("User Alredy Exist")
        }
        return false
    }

    return (
        <>
            <center>
                <div className="container">
                    <form>

                        <h1>Register Yourself</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <label><b>UserNmae</b></label><br />
                        <input type="text" placeholder="Enter Your Name" name="name" id="name"
                            onChange={(event) => { setusername(event.target.value); setusernameError("") }} value={username} required /><br />
                        <span>{usernameError}</span><br />



                        <label><b>Email</b></label><br />
                        <input type="text" placeholder="Enter Email" name="email" id="email"
                            onChange={(event) => { setemail(event.target.value); setemailError("") }} value={email} required /><br />
                        <span>{emailError}</span><br />

                        <lable><b>Phone</b></lable><br />
                        <input type="text" placeholder="Enter your Phone Number" name="phone" id="phone"
                            onChange={(event) => { setphone(event.target.value); setphoneError("") }} value={phone} required /><br />
                        <span>{phoneError}</span><br />

                        <label><b>Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="psw" id="psw"
                            onChange={(event) => { setpassword(event.target.value); setpasswordError("") }} value={password} required /><br />
                        <span>{passwordError}</span><br />
                        <hr />


                    </form>
                    <button onClick={Adduser} className="button">Register</button>
                </div>

            </center >
        </>
    )
}

export default SingUp