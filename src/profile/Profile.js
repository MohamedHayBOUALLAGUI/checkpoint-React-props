import React from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-bootstrap';


const Profile = (props)=> {
    return (

        <div className='description' >
        <div  style={{textAlign:'center',marginTop:'4%'}}>
        <Button variant="primary"  onClick={()=>props.handleName(props.fullName)}>Mein Konto</Button>
        </div>
        <div style={{margin:'3% 10% 4% 10%',lineHeight:'1.5',padding:'2%',background:'#282c34',boxShadow: '3px 3px 5px #00000063',borderRadius:'20px'}}>
        <p style={{color:'yellow',fontSize:'larger'}}> <span style={{  color:'red',fontWeight: 'bold',fontSize:'larger'}}>Full name:</span>  {props.fullName}</p>
        <p style={{color:'yellow',fontSize:'larger'}}><span style={{  color:'red',fontWeight: 'bold',fontSize:'larger'}}>Profession:</span> {props.profession}</p>
        <p style={{color:'yellow',fontSize:'larger'}}><span style={{  color:'red',fontWeight: 'bold',fontSize:'larger'}}>Bio:</span> {props.bio}</p>
        </div>
        
        {props.children}
       
        </div>
    )
}

Profile.defaultProps = {
    fullName: 'UserName',
    bio:"User description",
    profession:'User Profession'
    }

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}

export default Profile
