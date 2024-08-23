import React from "react";
import { useLatestNews } from "../hooks/useNewsApi";
import ArticleList from "../components/ArticleList";
import { Article } from "../types";

const Home: React.FC = () => {
  const { data: articles, isLoading, isError, error } = useLatestNews();

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">
        Error fetching news: {error?.toString()}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      {articles && articles.length > 0 ? (
        <ArticleList articles={articles as Article[]} />
      ) : (
        <div className="text-center">No articles found</div>
      )}
    </div>
  );
};

export default Home;
