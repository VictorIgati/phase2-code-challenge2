import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import axios from "axios";
import "./index.css";
const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await axios.get("https://bots-si0g.onrender.com/bots");
        setBots(response.data);
      } catch (error) {
        console.error("Error fetching bots:", error);
      }
    };

    fetchBots();
  }, []);

  const handleEnlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleReleaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDischargeBot = (id) => {
    setArmy(army.filter((b) => b.id !== id));
  };

  const handleSort = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Bot Battlr</h1>
          <p className="text-xl text-white">
            Build your ultimate bot army and dominate the galaxy!
          </p>
        </header>
        <SortBar onSort={handleSort} />
        {selectedBot ? (
          <BotSpecs
            bot={selectedBot}
            onBack={() => setSelectedBot(null)}
            onEnlist={handleEnlistBot}
          />
        ) : (
          <>
            <BotCollection bots={bots} onEnlistBot={handleEnlistBot} />
            <YourBotArmy
              army={army}
              onReleaseBot={handleReleaseBot}
              onDischargeBot={handleDischargeBot}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
