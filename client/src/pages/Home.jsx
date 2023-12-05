// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import React from 'react';
// import Footer from '../components/Footer.jsx';
// import SignUp from './SignUp.jsx';
// import Header from '../components/Header.jsx';
// import '../app.css';

const Home = () => {
  return (
    <div className=" flex flex-col justify-items-center text-center h-screen w-screen  text-blue-100 bg-gray-800">
      <h1>hello world</h1>
      <div className=" flex flex-row justify-content-center">
      <img src="/gif/monsters/ghost.gif" alt="ghost" />
      <img src="/gif/monsters/skel.gif" alt="skel" />
      <img src="/gif/monsters/frog.gif" alt="frog" />
      <img src="/gif/monsters/bat.gif" alt="bat" />

      <img src="/gif/flames.gif" alt="flames" style={{width: '50px'}} />

      <img src="/gif/townsFolk/man.gif" alt="woman-blue" style={{width: '50px'}} />
      <img src="/gif/townsFolk/woman-blue.gif" alt="woman-blue" style={{width: '50px'}} />
      <img src="/gif/townsFolk/woman-nun.gif" alt="woman-nun" style={{width: '50px'}} />
      <img src="/gif/townsFolk/mayor.gif" alt="mayor" style={{width: '50px'}} />
      </div>
      

      <div className=" flex justify-content-center"><img src="/jankConceptArt.png" alt="concept art" /></div>
      
    </div>
  );
};

export default Home;
