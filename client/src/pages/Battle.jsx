import { useState } from "react";
import { Link } from "react-router-dom";


//TODO maybe try to hide the header here?


const Battle = () => {
  const [effect, setEffect] = useState(false);
  return (
    <div className=" battleBackground h-screen w-screen flex text-blue-100 bg-gray-800">
      {/* <h1 className="p-5">Didnt get to this yet</h1> */}

      <div className="  flex flex-col justify-end text-center  w-screen">
        <div className=" charContainer  flex flex-row justify-between mb-5 ">
          {/* margin for charContainer is in index css. couldnt get inline to work right */}

          
          <div
            id="animatedImage"
            className={`${effect && "animate-wiggle"}  p-4 flex flex-col`}
            onClick={() => {
              setEffect(true);
            }}
            onAnimationEnd={() => setEffect(false)}
            // className="flex flex-row "
          >
            <p className="py-1.5 text-fuchsia-400">hp and better looking card here</p>
            <div className="flex flex-row  justify-between rounded-md h-[70px] bg-slate-400 ">
              
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Attack
              </button>
              <Link to="/Lair"><button className="bg-red-500 text-white px-4 py-2 rounded">
                Run
              </button></Link>
            </div>

            {/* i cant remember how to do it but we can toggle the "hidden" class based off what char the user chooses */}
            
            <div className="monster flex flex-row justify-end">
              <img src="/gif/monsters/ghost.gif" alt="ghost" className=" hidden" />
              <img src="/gif/monsters/skel.gif" alt="skel"  className="hidden"/>
              <img src="/gif/monsters/frog.gif" alt="frog" className="" />
              <img
                src="/gif/monsters/bat.gif"
                alt="bat" className="hidden" />
            </div>
          </div>

          {/* <img src="/gif/flames.gif" alt="flames" style={{ width: "50px" }} /> */}
            <div className="flex flex-col justify-between">
            <p className=" text-fuchsia-400">hp and better looking card here</p>
          <div className="villagers flex flex-row items-end ">
            
            <img
              src="/gif/townsFolk/man.gif"
              alt="woman-blue"
              style={{ width: "140px", height: "170px" }}
            />
            <img
              src="/gif/townsFolk/woman-blue.gif"
              alt="woman-blue"
              style={{ width: "90px", height: "170px" }}
            />
            <img
              src="/gif/townsFolk/woman-nun.gif"
              alt="woman-nun"
              style={{ width: "100px", height: "170px" }}
            />
            <img
              src="/gif/townsFolk/mayor.gif"
              alt="mayor"
              style={{ width: "140px", height: "170px" }}
            />
          </div>
          </div>
        </div>
        <h1 className="p-5">-</h1>
      </div>
    </div>
  );
};

export default Battle;
