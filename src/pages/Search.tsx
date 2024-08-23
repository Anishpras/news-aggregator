import React, { useState } from "react";
import { useNewsApi } from "../hooks/useNewsApi";
import SearchBar from "../components/SearchBar";
import FilterOptions from "../components/FilterOptions";
import ArticleList from "../components/ArticleList";
import { Filters } from "../types";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    date: "",
    category: "",
    source: "",
  });
  const { articles, isLoading, isError, error } = useNewsApi({
    query,
    filters,
  });

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const handleFilter = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search News</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterOptions onFilter={handleFilter} />
      {isLoading && <div className="text-center mt-4">Loading...</div>}
      {isError && (
        <div className="text-center mt-4 text-red-500">
          Error fetching news: {error || "An unknown error occurred"}
        </div>
      )}
      {!isLoading && !isError && articles && articles.length > 0 ? (
        <ArticleList articles={articles} />
      ) : (
        <div className="text-center mt-4">No articles found</div>
      )}
    </div>
  );
};

export default Search;
