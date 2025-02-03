// Import PropTypes for type checking of props.
import PropTypes from "prop-types"; // Importing PropTypes to validate the types of props passed to the component.

/**
 * BotCard component renders a card displaying bot information.
 * It includes bot details like name, health, damage, armor, class, catchphrase, and avatar.
 * Clicking the card triggers the enlistment of the bot.
 */
const BotCard = ({ bot, onEnlistBot }) => { // Destructuring props to get 'bot' (the bot data) and 'onEnlistBot' (callback function).
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;
  // Destructuring the bot object to extract individual properties for easier access.

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => onEnlistBot(bot)} // Adding an onClick event to trigger the enlistment of the bot when the card is clicked.
    >
      {/* 
        Creating a container div for the bot card with:
        - A white background ('bg-white')
        - Rounded corners ('rounded-lg')
        - A box shadow ('shadow-lg') that increases on hover ('hover:shadow-xl')
        - Smooth shadow transition ('transition-shadow')
        - Pointer cursor to indicate interactivity ('cursor-pointer')
      */}

      <img
        src={avatar_url} // Setting the image source to the bot's avatar URL.
        alt={name} // Providing an alternative text for accessibility purposes.
        className="w-full h-48 object-cover" // Ensuring the image covers the full width and height while maintaining its aspect ratio.
      />

      <div className="p-4">
        {/* Adding padding inside the card for better spacing. */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        {/* Displaying the bot's name as a heading with bold styling and some margin below. */}

        <p className="text-sm text-gray-600 italic mb-4">{catchphrase}</p>
        {/* Displaying the bot's catchphrase in smaller, italicized text with some margin below. */}

        <div className="space-y-2">
          {/* Creating a container div for the bot's specifications with spacing between each line. */}
          <p className="text-sm text-gray-700">Health: {health}</p> {/* Displaying the bot's health value. */}
          <p className="text-sm text-gray-700">Damage: {damage}</p> {/* Displaying the bot's damage value. */}
          <p className="text-sm text-gray-700">Armor: {armor}</p> {/* Displaying the bot's armor value. */}
          <p className="text-sm text-gray-700">Class: {bot_class}</p> {/* Displaying the bot's class. */}
        </div>
      </div>
    </div>
  );
};

/**
 * Define prop types for the BotCard component.
 * The bot object and onEnlistBot function are required.
 */
BotCard.propTypes = {
  bot: PropTypes.object.isRequired, // Ensuring 'bot' is an object and is required for the component to work properly.
  onEnlistBot: PropTypes.func.isRequired, // Ensuring 'onEnlistBot' is a function and is required for handling enlist actions.
};

// Exporting the BotCard component as the default export of this module.
export default BotCard;