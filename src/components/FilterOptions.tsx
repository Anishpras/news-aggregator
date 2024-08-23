import React from "react";
import { Filters } from "../types";

interface FilterOptionsProps {
  onFilter: (filters: Partial<Filters>) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilter }) => {
  return (
    <div className="mb-4 flex space-x-4">
      <select
        onChange={(e) => onFilter({ date: e.target.value })}
        className="px-2 py-1 border border-gray-300 rounded-md">
        <option value="">Select Date</option>
        <option value="today">Today</option>
        <option value="this_week">This Week</option>
        <option value="this_month">This Month</option>
      </select>
      <select
        onChange={(e) => onFilter({ category: e.target.value })}
        className="px-2 py-1 border border-gray-300 rounded-md">
        <option value="">Select Category</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </select>
      <select
        onChange={(e) => onFilter({ source: e.target.value })}
        className="px-2 py-1 border border-gray-300 rounded-md">
        <option value="">Select Source</option>
        <option value="nyt">New York Times</option>
        <option value="newsapi">News API</option>
        <option value="newsdata">News Data</option>
      </select>
    </div>
  );
};

export default FilterOptions;
