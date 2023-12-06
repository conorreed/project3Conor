import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import React from 'react';
// import Footer from '../components/Footer.jsx';
// import SignUp from './SignUp.jsx';
// import Header from '../components/Header.jsx';
// import '../app.css';

const Home = () => {
  return (
    <div className=" flex flex-col justify-items-center text-center h-screen w-screen  text-blue-100 bg-gray-800">
      <h1 className=" text-fuchsia-500">THAT TIME I GOT <span className=" text-white">REINCARNATED</span> AS A WAY TOO LONG <span className=" text-white">TITLE</span> FOR A SILLY GAME</h1>
      <h1>...or monster attck</h1>
      <h1 className='pb-5'>...whatever floats your boat</h1>
      <div className=" flex flex-row justify-content-center ">
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
      

      <div className=" flex justify-content-center ">
        <div className='flex flex-col items-center'>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px'}} />
      <Link to="/login">
      <div className="relative inline-flex group m-5 h-[15rem]">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer hover:scale-125 ease-in-out ">
            LOGIN
          </button>
        </div>
            </Link>
            </div>

        <img src="/castleinthedark.gif" alt="spoookey art" style={{width: '500px'}} />
        <div className='flex flex-col items-center'>
        <img src="/gif/flames.gif" alt="flames" style={{width: '50px'}} />
        <Link to="/signup">

        <div className="relative inline-flex group m-5 h-[15rem] ">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer hover:scale-125 ease-in-out ">
            SIGN UP
          </button>
        </div>
            </Link>
            </div>
        
        </div>
      
    </div>
  );
};

export default Home;
