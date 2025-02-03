// Import necessary hooks and libraries from React and Axios for HTTP requests.
// We use useState to manage component state, useEffect to handle side effects, 
// and axios to make HTTP requests to fetch data.
import { useState, useEffect } from "react"; // Importing React hooks for state management and side effects.
import BotCollection from "./components/BotCollection"; // Importing the BotCollection component to display all available bots.
import YourBotArmy from "./components/YourBotArmy"; // Importing the YourBotArmy component to display the user's selected bots.
import BotSpecs from "./components/BotSpecs"; // Importing the BotSpecs component to show detailed information about a selected bot.
import SortBar from "./components/SortBar"; // Importing the SortBar component to allow sorting of bots by different criteria.
import axios from "axios"; // Importing Axios for making HTTP requests to the server.
import "./index.css"; // Importing the global CSS file for styling the application.

// The main App component that serves as the entry point for the application.
const App = () => {
    // State to store the list of all available bots fetched from the API.
    const [bots, setBots] = useState([]); // Initializing the 'bots' state as an empty array.
    
    // State to store the list of bots that the user has enlisted in their army.
    const [army, setArmy] = useState([]); // Initializing the 'army' state as an empty array.
    
    // State to track the currently selected bot for displaying detailed specifications.
    const [selectedBot, setSelectedBot] = useState(null); // Initializing the 'selectedBot' state as null.

    // Using the useEffect hook to fetch the list of bots when the component mounts.
    useEffect(() => {
        // Defining an asynchronous function to fetch bots from the API.
        const fetchBots = async () => {
            try {
                // Making a GET request to the API endpoint to retrieve the list of bots.
                const response = await axios.get("https://bots-si0g.onrender.com/bots");
                
                // Updating the 'bots' state with the data received from the API.
                setBots(response.data);
            } catch (error) {
                // Logging any errors that occur during the fetch operation to the console.
                console.error("Error fetching bots:", error);
            }
        };
        
        // Calling the fetchBots function to execute the API call.
        fetchBots();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

    // Function to handle enlisting a bot into the user's army.
    const handleEnlistBot = (bot) => {
        // Checking if the bot is already in the user's army to avoid duplicates.
        if (!army.some((b) => b.id === bot.id)) {
            // Adding the bot to the 'army' state by creating a new array with the current bot included.
            setArmy([...army, bot]);
        }
    };

    // Function to handle releasing a bot from the user's army.
    const handleReleaseBot = (bot) => {
        // Finding the bot being removed from the army to add it back to the available bots.
        const removedBot = army.find((b) => b.id === bot.id);
        
        // Updating the 'army' state by filtering out the bot being released.
        setArmy(army.filter((b) => b.id !== bot.id));
        
        // Adding the removed bot back to the 'bots' state so it becomes available again.
        setBots([...bots, removedBot]);
    };

    // Function to handle sorting the list of bots based on a specified criteria.
    const handleSort = (criteria) => {
        // Creating a shallow copy of the 'bots' array to avoid mutating the original state.
        const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
        
        // Updating the 'bots' state with the newly sorted array of bots.
        setBots(sortedBots);
    };

    // Returning the JSX structure of the App component.
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-8">
            {/* Setting up the main container with a gradient background and padding. */}
            <div className="container mx-auto px-4">
                {/* Adding a header section with a title and subtitle for the application. */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Bot Battlr</h1>
                    <p className="text-xl text-white">
                        Build your ultimate bot army and dominate the galaxy!
                    </p>
                </header>
                
                {/* Rendering the SortBar component to allow users to sort bots. */}
                <SortBar onSort={handleSort} />
                
                {/* Conditional rendering: If a bot is selected, display its detailed specifications. */}
                {selectedBot ? (
                    <BotSpecs
                        bot={selectedBot} // Passing the selected bot as a prop to the BotSpecs component.
                        onBack={() => setSelectedBot(null)} // Providing a callback to clear the selected bot.
                        onEnlist={handleEnlistBot} // Providing a callback to enlist the bot into the user's army.
                    />
                ) : (
                    <>
                        {/* If no bot is selected, display the user's bot army and the collection of available bots. */}
                        <YourBotArmy army={army} onReleaseBot={handleReleaseBot} />
                        <BotCollection bots={bots} onEnlistBot={handleEnlistBot} />
                    </>
                )}
            </div>
        </div>
    );
};

// Exporting the App component as the default export of this module.
export default App;