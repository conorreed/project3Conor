import { Link } from "react-router-dom";

const Lair = () => {
  return (
    <main className="flex justify-content-center bg-slate-900">
      {" "}
      {/* centering background image */}
      <div className=" lairBackground w-[100rem] h-[60rem] flex flex-col">
        {" "}
        {/* supplying background image and flex parent  */}
        <div className="flex justify-center">
          <h1 className="text-blue-100">DA LAIR</h1>
        </div>
        <div className="flex justify-between items-end">
          <div className=" flex mx-[25rem] p-10 h-[10rem]">
            <Link to="/Battle">
              <button className="shadow-lg bg-slate-300 cursor-pointer hover:scale-125 transition-all ease-in-out">
              Bowser's Castle
              </button>
            </Link>
          </div>

          <aside className="mx-5">
            <div className=" shadow-lg bg-[rgba(97,59,96,0.7)] p-10 rounded-xl my-2 flex flex-col justify-between items-center w-[25rem] h-[40rem]">
              <h2 className="text-white font-bold text-2xl">
                Pick Ya Monster :
              </h2>

              <button className=" w-[15rem] shadow-lg bg-slate-300 cursor-pointer hover:scale-125 transition-all ease-in-out">
                <div className="flex flex-row justify-between">
                  <img src="/gif/monsters/frog.gif" alt="frog" />
                  <ul>
                    <li>HP :</li>
                    <li>ATTK :</li>
                  </ul>
                </div>
                <p className="font-bold">Fraowg</p>
              </button>

              <button className="w-[15rem] shadow-lg bg-slate-300 cursor-pointer hover:scale-125 transition-all ease-in-out">
                <div className="flex flex-row justify-between">
                  <img src="/gif/monsters/ghost.gif" alt="ghost" />
                  <ul>
                    <li>HP :</li>
                    <li>ATTK :</li>
                  </ul>
                </div>
                <p className="font-bold">toshG</p>
              </button>

              <button className="w-[15rem] shadow-lg bg-slate-300 cursor-pointer hover:scale-125 transition-all ease-in-out">
                <div className="flex flex-row justify-between">
                  <img src="/gif/monsters/bat.gif" alt="bat" />
                  <ul>
                    <li>HP :</li>
                    <li>ATTK :</li>
                  </ul>
                </div>
                <p className="font-bold">EEP</p>
              </button>
              <button className="w-[15rem] shadow-lg bg-slate-300 cursor-pointer hover:scale-125 transition-all ease-in-out">
                <div className="flex flex-row justify-between">
                  <img src="/gif/monsters/skel.gif" alt="skel" />
                  <ul>
                    <li>HP :</li>
                    <li>ATTK :</li>
                  </ul>
                </div>

                <p className="font-bold"> Skeli</p>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
export default Lair;
