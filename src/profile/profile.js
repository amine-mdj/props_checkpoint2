import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './profile.css';
 
const Profile=({fullName, bio, profession, children, handleName})=>
{
  return (<div className='my_bucket'>
    <button onClick={()=> handleName(fullName)} >click here</button>
    <h1>full name : {fullName}</h1>
    <p>bio : {bio}</p>
    <p>profession : {profession}</p>
     {children}
  </div>);
}

Profile.defaultProps = {
    fullName: "john doe",
    bio : "this is a default biography",
    profession : "this is a default profession"

   };

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
  };
 
export default Profile;