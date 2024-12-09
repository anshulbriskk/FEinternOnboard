import React from 'react';

const SearchHistory = ({ history }) => {
  const recentHistory = history.slice(-5).reverse(); // Get the most recent 10 searches and reverse to display the latest at the top

  return (
    <div className="bg-white p-4 rounded shadow-md text-center w-full max-w-sm">
      <h4 className="text-lg font-semibold mb-4">History of previous searches:</h4>
      <div className="space-y-2">
        {recentHistory.length > 0 && recentHistory.map((term, index) => (
          <p key={index} className="text-gray-700">{term}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
