import React from "react";
import ArticleCard from "./ArticleCard";
import { Article, NYTArticle, NewsDataArticle } from "../types";

interface ArticleListProps {
  articles: (Article | NYTArticle | NewsDataArticle)[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
