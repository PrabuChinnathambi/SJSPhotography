import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './UserDetails.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function UserDetails() {

    const[users, setUsers] = useState([]);

    useEffect(() => {
       Axios.get('https://sjsphotography.herokuapp.com/getUsers')
       .then((res) => {
           setUsers(res.data);
           console.log(res.data);
       })
       
    }, [])

    const getDate = (val) => {
        var date = new Date(val).toLocaleString();
        return(
            <>
                <p>{date}</p>
            </>
        )
    } 

    
    return (
        <div className="userDetails_page">
            <div>
                <Navbar/>
            </div>
            <div className="user_container">
                {
                    users.slice().reverse().map((item) => {
                        return(
                            <div className="user_card">
                                <h2>Name : {item.name}</h2><span className="time"><p>{getDate(item.time)}</p></span>
                                <h5>Mobile : {item.mobile}</h5>     <h5>Email : {item.email}</h5>
                                <h6>Message : {item.message}</h6>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default UserDetails
