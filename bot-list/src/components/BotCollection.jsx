// Import PropTypes for type checking of props and BotCard for rendering individual bot cards.
import PropTypes from "prop-types"; // Importing PropTypes to validate the types of props passed to the component.
import BotCard from "./BotCard"; // Importing the BotCard component to display individual bots.

/**
 * BotCollection component renders a grid layout of bot cards.
 * It maps over an array of bots and displays each one using the BotCard component.
 */
const BotCollection = ({ bots, onEnlistBot }) => { // Destructuring props to get 'bots' (array of bots) and 'onEnlistBot' (callback function).
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {/* 
        Creating a grid layout with varying numbers of columns based on screen size:
        - 1 column on small screens
        - 2 columns on medium screens (sm)
        - 3 columns on larger screens (md)
        - 4 columns on extra-large screens (lg)
        The 'gap-6' class adds spacing between the grid items, and 'mb-8' adds margin at the bottom.
      */}
      
      {bots.map((bot) => ( // Iterating over the 'bots' array to render each bot as a card.
        <BotCard key={bot.id} bot={bot} onEnlistBot={onEnlistBot} />
        /* 
          Rendering the BotCard component for each bot in the array.
          Each card is assigned a unique 'key' using the bot's 'id'.
          The 'bot' prop passes the bot data, and 'onEnlistBot' provides a callback for enlisting the bot.
        */
      ))}
    </div>
  );
};

/**
 * Define prop types for the BotCollection component.
 * The bots array and onEnlistBot function are required.
 */
BotCollection.propTypes = {
  bots: PropTypes.array.isRequired, // Ensuring 'bots' is an array and is required for the component to work properly.
  onEnlistBot: PropTypes.func.isRequired, // Ensuring 'onEnlistBot' is a function and is required for handling enlist actions.
};

// Exporting the BotCollection component as the default export of this module.
export default BotCollection;