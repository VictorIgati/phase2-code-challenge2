import PropTypes from "prop-types";

const SortBar = ({ onSort }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        onClick={() => onSort("health")}
      >
        Sort by Health
      </button>
      <button
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        onClick={() => onSort("damage")}
      >
        Sort by Damage
      </button>
      <button
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        onClick={() => onSort("armor")}
      >
        Sort by Armor
      </button>
    </div>
  );
};

SortBar.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default SortBar;