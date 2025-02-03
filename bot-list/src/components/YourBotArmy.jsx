// Import PropTypes for type checking of props and the BotCard component for rendering individual bot cards.
import PropTypes from "prop-types"; // Importing PropTypes to validate the types of props passed to the component.
import BotCard from "./BotCard"; // Importing the BotCard component to display individual bots.

// The YourBotArmy functional component renders the list of bots in the user's army.
const YourBotArmy = ({ army, onReleaseBot }) => { // Destructuring props to get 'army' (the list of bots) and 'onReleaseBot' (callback function).
    return (
        <div className="mt-8"> {/* Adding margin at the top for spacing. */}
            <h2 className="text-2xl font-bold text-white mb-4">Your Bot Army</h2> {/* Displaying a heading for the user's bot army. */}
            
            {/* Using a grid layout to arrange the bot cards in rows with varying columns based on screen size. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Mapping over the 'army' array to render each bot as a card. */}
                {army.map((bot) => (
                    <div key={bot.id} className="relative"> {/* Wrapping each bot card in a div with relative positioning for the release button. */}
                        {/* Rendering the BotCard component for each bot in the army. */}
                        <BotCard bot={bot} onEnlistBot={() => onReleaseBot(bot)} /> {/* Passing the bot data and a callback to release the bot. */}
                        
                        {/* Adding a "release" button for each bot in the army. */}
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
                            onClick={() => onReleaseBot(bot)} // Calling the 'onReleaseBot' callback when the button is clicked.
                        >
                            × {/* Displaying a cross symbol to indicate the release action. */}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Defining PropTypes for type-checking the props passed to the YourBotArmy component.
YourBotArmy.propTypes = {
    army: PropTypes.array.isRequired, // Ensuring 'army' is an array and is required.
    onReleaseBot: PropTypes.func.isRequired, // Ensuring 'onReleaseBot' is a function and is required.
};

// Exporting the YourBotArmy component as the default export of this module.
export default YourBotArmy;