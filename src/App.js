import React from 'react';
import './App.css';
import Navbar from './profile/Navbar';
import myPhoto from './profile/myPhoto.jpg'
import Profile from './profile/Profile'
import Adress from './profile/Adress';


function App() {
  const handleName=name=>alert(`This user is ${name}`);
  return (
    <div>
       
   <Navbar />
   
   <Profile 
  fullName="Mohamed Haythem BOUALLAGUI" 
  bio="A mechanical engineer graduated from The Higher National Engineering School of Tunis in 2015. Recently, I made a decision to jumpstart my professional career into web development. So, since 31 August 2020, I have started a training in the desired field within Go My Code.
  My goal is to acquire new skills in order to give a new direction to my professional career by entering to the world of computer science as a fullstack web developer. Learn and invest my knowledge in a company to contribute to its evolution by sharing my skills and know-how." 
  profession="Mechanical engineer" 
   handleName={handleName}
   >
     <div style={{display:'flex'}}>
     
  
  <img src={myPhoto} alt="myImage" style={{border: '2px solid rgb(158, 145, 194)',
    borderRadius: '50%',
    boxShadow: '-3px 3px 5px rgb(120, 98, 150), -7px 7px 5px rgb(223, 207, 243)',
    marginLeft:'10%', marginBottom:'3%', width:'25%',height:'40%'}} />
    <Adress />
    </div>

  </Profile>
      
    </div>
  );
}

export default App;
