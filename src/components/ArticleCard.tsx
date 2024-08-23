import React from "react";
import { Article, NYTArticle, NewsDataArticle } from "../types";

interface ArticleCardProps {
  article: Article | NYTArticle | NewsDataArticle;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const getTitle = () => {
    if ("title" in article) return article.title;
    if ("headline" in article) return article.headline.main;
    return "No title available";
  };

  const getDescription = () => {
    if ("description" in article) return article.description;
    if ("abstract" in article) return article.abstract;
    return "No description available";
  };

  const getUrl = () => {
    if ("url" in article) return article.url;
    if ("web_url" in article) return article.web_url;
    if ("link" in article) return article.link;
    return "#";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{getTitle()}</h2>
      <p className="text-gray-600 mb-4">{getDescription()}</p>
      <a
        href={getUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;
