const GameStart = () => {
  return (
    <main className="flex justify-center">
      <div className="bg-gray-800 min-h-screen min-w-full text-center pt-20">
        <h1 className="text-blue-100 mx-4 pb-4">Tutorial</h1>
        <p className="text-blue-100 mx-4">
          Alright so you play the game. It's very fun for you. Trust.
          <br />
          Heres what you need to know:
        </p>
        <ul className="text-blue-100 m-5">
          <li>You're a monster</li>
          <li>Go hit things</li>
          <li>Attk button to attack</li>
          <li>Run button if you a baby</li>
          <li>Now play game</li>
        </ul>
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer hover:scale-125 ease-in-out ">
           
            START
          </button>
        </div>
      </div>
    </main>
  );
};

export default GameStart;
