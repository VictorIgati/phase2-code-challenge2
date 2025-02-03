// Import PropTypes for type checking of props.
import PropTypes from "prop-types"; // Importing PropTypes to validate the types of props passed to the component.

/**
 * BotSpecs component renders detailed information about a selected bot.
 * It includes buttons to go back or enlist the bot.
 */
const BotSpecs = ({ bot, onBack, onEnlist }) => { // Destructuring props to get 'bot', 'onBack', and 'onEnlist'.
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      {/* 
        Creating a container div with a white background, rounded corners, a box shadow, padding, 
        and a maximum width for the bot specifications section. Centered horizontally using 'mx-auto'.
      */}

      <h2 className="text-3xl font-bold text-gray-800 mb-4">{bot.name}</h2>
      {/* Displaying the name of the bot as a heading with bold styling and some margin below. */}

      <img
        src={bot.avatar_url} // Setting the image source to the bot's avatar URL.
        alt={bot.name} // Providing an alternative text for accessibility purposes.
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      {/* 
        Rendering the bot's avatar image with full width, fixed height, and rounded corners. 
        The 'object-cover' class ensures the image maintains its aspect ratio and covers the space.
      */}

      <div className="space-y-2">
        {/* Creating a container div for the bot's specifications with spacing between each line. */}
        <p className="text-sm text-gray-700">Health: {bot.health}</p> {/* Displaying the bot's health value. */}
        <p className="text-sm text-gray-700">Damage: {bot.damage}</p> {/* Displaying the bot's damage value. */}
        <p className="text-sm text-gray-700">Armor: {bot.armor}</p> {/* Displaying the bot's armor value. */}
        <p className="text-sm text-gray-700">Class: {bot.bot_class}</p> {/* Displaying the bot's class. */}
        <p className="text-sm text-gray-600 italic">{bot.catchphrase}</p>
        {/* Displaying the bot's catchphrase in smaller, italicized text. */}
      </div>

      <div className="flex space-x-4 mt-6">
        {/* Creating a container div for the action buttons with horizontal spacing and margin at the top. */}
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          onClick={onBack} // Calling the 'onBack' function when the button is clicked.
        >
          Back {/* Button label to navigate back to the previous view. */}
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => onEnlist(bot)} // Calling the 'onEnlist' function with the current bot as an argument.
        >
          Enlist {/* Button label to enlist the bot into the user's army. */}
        </button>
      </div>
    </div>
  );
};

/**
 * Define prop types for the BotSpecs component.
 * The bot object, onBack function, and onEnlist function are required.
 */
BotSpecs.propTypes = {
  bot: PropTypes.object.isRequired, // Ensuring 'bot' is an object and is required.
  onBack: PropTypes.func.isRequired, // Ensuring 'onBack' is a function and is required.
  onEnlist: PropTypes.func.isRequired, // Ensuring 'onEnlist' is a function and is required.
};

// Exporting the BotSpecs component as the default export of this module.
export default BotSpecs;