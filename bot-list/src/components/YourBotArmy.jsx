import PropTypes from "prop-types";
import BotCard from "./BotCard";

const YourBotArmy = ({ army, onReleaseBot, onDischargeBot }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Your Bot Army</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {army.map((bot) => (
          <div key={bot.id} className="relative">
            <BotCard bot={bot} onEnlistBot={() => onReleaseBot(bot)} />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
              onClick={() => onDischargeBot(bot.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

YourBotArmy.propTypes = {
  army: PropTypes.array.isRequired,
  onReleaseBot: PropTypes.func.isRequired,
  onDischargeBot: PropTypes.func.isRequired,
};

export default YourBotArmy;