import PropTypes from "prop-types";
import BotCard from "./BotCard";

const BotCollection = ({ bots, onEnlistBot }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onEnlistBot={onEnlistBot} />
      ))}
    </div>
  );
};

BotCollection.propTypes = {
  bots: PropTypes.array.isRequired,
  onEnlistBot: PropTypes.func.isRequired,
};

export default BotCollection;