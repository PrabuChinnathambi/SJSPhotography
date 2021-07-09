import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import { TextField, Button } from '@material-ui/core';
import Axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

    const notify = () => toast("Success!!!");

    const [state, setState] = React.useState({
        name: "",
        email: "",
        mobile: "",
        message: "",

    })

    const handleChange = (e) => {
        const val = e.target.value;
        setState({
            ...state,
            [e.target.name]: val
        })
    }
    const handleSubmit = () => {

        if (state.name === "" & state.mobile === "" & state.message === "" & state.email === "") {
            toast.warn('All Feilds Required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else {

            const payload = {
                name: state.name,
                email: state.email,
                mobile: state.mobile,
                message: state.message
            }


            Axios.post('https://sjsphotography.herokuapp.com/postUser', payload)
                .then((res) => {
                    console.log(res.data);
                })

            setState({
                name: "",
                email: "",
                mobile: "",
                message: "",
            })

            notify();
        }
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="contact_page">
                <div className="contact_left">
                    <div className="contact_container">
                        <div className="contact_heading">
                            <img src="https://img.icons8.com/ios/2x/place-marker.png" alt="pin" /> <h3>Address</h3>
                        </div>
                        <div className="contact_address">
                            <p>SJS Photography</p>
                            <p>Bhavanisagar Road</p>
                            <p>Punjai Puliampatti</p>
                            <p>Sathyamangalam</p>
                            <p>Erode - 638459</p>
                        </div>
                        <div className="contact_heading">
                            <img src="https://img.icons8.com/ios/2x/apple-phone.png" alt="pin" /> <h3>Call us</h3>
                        </div>
                        <div className="contact_address">
                            <p>+91 6379296188</p>
                            <p>+91 9384293159</p>
                        </div>
                        <div className="contact_heading">
                            <img src="https://img.icons8.com/ios/2x/mail-configuration.png" alt="pin" /> <h3>Email</h3>
                        </div>
                        <div className="contact_address">
                            <p>sjsphotos2019@gmail.com</p>
                            
                        </div>
                    </div>

                </div>
                <div className="contact_right">
                    <div className="contact_right_container">
                        <div className="contact_right_heading">
                            <h4>Tell us about you ! We will get back to you shortly !</h4>
                        </div>
                        <div className="contact_form">
                            <form>
                                <TextField className="input" id="filled-basic" name="name" value={state.name} onChange={handleChange} InputLabelProps={{ className: "textfield__label" }} label="Your Name(*)" variant="filled" />
                                <TextField className="input" id="filled-basic" name="email" value={state.email} onChange={handleChange} InputLabelProps={{ className: "textfield__label" }} label="Your Email(*)" variant="filled" />
                                <TextField className="input" id="filled-basic" name="mobile" value={state.mobile} onChange={handleChange} InputLabelProps={{ className: "textfield__label" }} label="Mobile No(*)" variant="filled" />
                                <TextField className="input" id="filled-basic" name="message" value={state.message} onChange={handleChange} InputLabelProps={{ className: "textfield__label" }} label="Message(*)" variant="filled" /><br></br>
                                <Button onClick={handleSubmit} variant="contained" color="primary">
                                    Send
                                </Button>
                                <ToastContainer />

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
