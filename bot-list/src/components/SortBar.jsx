// Import PropTypes for type checking of props.
import PropTypes from "prop-types"; // Importing PropTypes to validate the types of props passed to the component.

// The SortBar functional component renders a set of buttons for sorting bots by different criteria.
const SortBar = ({ onSort }) => { // Destructuring the 'onSort' prop, which is a function to handle sorting logic.
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {/* 
        Creating a container div with flexbox layout for centering the buttons horizontally. 
        'space-x-4' adds spacing between the buttons, and 'mb-8' adds margin at the bottom.
      */}
      
      {/* Button to sort bots by health */}
      <button
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100 active:text-blue-900 shadow-md shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => onSort("health")} // When clicked, this button calls the 'onSort' function with "health" as the argument.
      >
        Sort by Health {/* Displaying the label for the button. */}
      </button>

      {/* Button to sort bots by damage */}
      <button
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100 active:text-blue-900 shadow-md shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => onSort("damage")} // When clicked, this button calls the 'onSort' function with "damage" as the argument.
      >
        Sort by Damage {/* Displaying the label for the button. */}
      </button>

      {/* Button to sort bots by armor */}
      <button
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100 active:text-blue-900 shadow-md shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => onSort("armor")} // When clicked, this button calls the 'onSort' function with "armor" as the argument.
      >
        Sort by Armor {/* Displaying the label for the button. */}
      </button>
    </div>
  );
};

// Defining PropTypes for type-checking the props passed to the SortBar component.
SortBar.propTypes = {
  onSort: PropTypes.func.isRequired, // Ensuring 'onSort' is a function and is required for the component to work properly.
};

// Exporting the SortBar component as the default export of this module.
export default SortBar;