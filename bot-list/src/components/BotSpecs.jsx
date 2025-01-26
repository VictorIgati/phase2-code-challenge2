import PropTypes from "prop-types";

const BotSpecs = ({ bot, onBack, onEnlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{bot.name}</h2>
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <div className="space-y-2">
        <p className="text-sm text-gray-700">Health: {bot.health}</p>
        <p className="text-sm text-gray-700">Damage: {bot.damage}</p>
        <p className="text-sm text-gray-700">Armor: {bot.armor}</p>
        <p className="text-sm text-gray-700">Class: {bot.bot_class}</p>
        <p className="text-sm text-gray-600 italic">{bot.catchphrase}</p>
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => onEnlist(bot)}
        >
          Enlist
        </button>
      </div>
    </div>
  );
};

BotSpecs.propTypes = {
  bot: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
  onEnlist: PropTypes.func.isRequired,
};

export default BotSpecs;