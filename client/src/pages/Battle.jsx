import { useState } from "react";
import { Link } from "react-router-dom";
import '../app.css';

// Card component with Health Bar
const Card = ({ title, health, description }) => {
  const healthBarColor = health > 50 ? 'green' : 'red';

  return (
    <div className="bg-white rounded-md p-4 mb-4 text-black">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="health-bar-container mb-2">
        <div className="health-bar" style={{ width: `${health}%`, backgroundColor: healthBarColor }} />
      </div>
      <p>Health: {health}</p>
      <p>{description}</p>
    </div>
  );
};

const Battle = () => {
  const [effect, setEffect] = useState(false);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [victory, setVictory] = useState(false);
  const [showVictoryText, setShowVictoryText] = useState(false);

  const handleAttack = () => {
    const playerDamage = 10;
    const newEnemyHealth = Math.max(0, enemyHealth - playerDamage);
    setEnemyHealth(newEnemyHealth);
    setEffect(true);
    setTimeout(() => setEffect(false), 500);

    if (newEnemyHealth === 0) {
      setShowVictoryText(true);
    }
  };

  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setVictory(false);
    setShowVictoryText(false);
  };

  return (
    <div className="battleBackground h-screen w-screen flex text-blue-100 bg-gray-800">
    <div className="flex flex-col justify-end text-center w-screen">
      <div className="charContainer flex flex-row justify-between mb-5">
        <div className="p-4 flex flex-col" onClick={handleAttack}>
          <Card
            title="Froggo"
            health={playerHealth}
            description="Froggo the Destroyer"
          />
          <div className={`flex flex-row justify-between rounded-md h-[70px] bg-slate-400 `}>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Attack
            </button>
            <Link to="/Lair">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Run
              </button>
            </Link>
          </div>

            <div className="monster flex flex-row justify-end">
              <img
                src="/gif/monsters/ghost.gif"
                alt="ghost"
                className={` ${effect && "animate-wiggle"}`}
              />
              <img
                src="/gif/monsters/skel.gif"
                alt="skel"
                className={`hidden ${effect && "animate-wiggle"}`}
              />
              <img
                src="/gif/monsters/frog.gif"
                alt="frog"
                className={`hidden ${effect && "animate-wiggle"}`}
              />
              <img
                src="/gif/monsters/bat.gif"
                alt="bat"
                className={`hidden ${effect && "animate-wiggle"}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <Card
              title="Enemy"
              health={enemyHealth}
              description="Im the enemy and I suck eggs"
            />

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
        <h1 className={`p-5 ${victory && !showVictoryText ? 'hidden' : ''}`}>
          {victory ? 'You won!' : '-'}
        </h1>

        {showVictoryText && (
          <div className="victory-text">
            <p>YOU WON!!</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleRestart}
            >
              Restart Battle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Battle;
