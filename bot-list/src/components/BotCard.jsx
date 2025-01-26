import PropTypes from "prop-types";

const BotCard = ({ bot, onEnlistBot }) => {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => onEnlistBot(bot)}
    >
      <img src={avatar_url} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 italic mb-4">{catchphrase}</p>
        <div className="space-y-2">
          <p className="text-sm text-gray-700">Health: {health}</p>
          <p className="text-sm text-gray-700">Damage: {damage}</p>
          <p className="text-sm text-gray-700">Armor: {armor}</p>
          <p className="text-sm text-gray-700">Class: {bot_class}</p>
        </div>
      </div>
    </div>
  );
};

BotCard.propTypes = {
  bot: PropTypes.object.isRequired,
  onEnlistBot: PropTypes.func.isRequired,
};

export default BotCard;