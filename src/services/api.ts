import axios from "axios";
import { Article, NYTArticle, NewsDataArticle, Filters } from "../types";

const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY;
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_DATA_API_KEY = import.meta.env.VITE_NEWS_DATA_API_KEY;

export const fetchNYTArticles = async (
  query: string,
  filters: Filters
): Promise<NYTArticle[]> => {
  try {
    const response = await axios.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      {
        params: {
          q: query,
          "api-key": NYT_API_KEY,
          fq: filters.category ? `news_desk:(${filters.category})` : undefined,
          sort:
            filters.date === "today"
              ? "newest"
              : filters.date === "this_week"
              ? "newest"
              : filters.date === "this_month"
              ? "newest"
              : undefined,
        },
      }
    );
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching NYT articles:", error);
    return [];
  }
};

export const fetchNewsDataArticles = async (
  query: string,
  filters: Filters
): Promise<NewsDataArticle[]> => {
  try {
    const response = await axios.get("https://newsdata.io/api/1/news", {
      params: {
        apikey: NEWS_DATA_API_KEY,
        q: query,
        category: filters.category || undefined,
        language: "en", 
        
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching NewsData articles:", error);
    return [];
  }
};

export const fetchNewsAPIArticles = async (
  query: string,
  filters: Filters
): Promise<Article[]> => {
  try {
    const today = new Date();
    let fromDate;

    switch (filters.date) {
      case "today":
        fromDate = today.toISOString().split("T")[0];
        break;
      case "this_week":
        fromDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
        break;
      case "this_month":
        fromDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0];
        break;
      default:
        fromDate = undefined;
    }

    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        apiKey: NEWS_API_KEY,
        language: "en",
        from: fromDate,
        to: today.toISOString().split("T")[0],
        pageSize: 10,
      },
    });
    return response.data.articles;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error fetching NewsAPI articles:",
        error.response?.data || error.message
      );
    } else {
      console.error("Error fetching NewsAPI articles:", error);
    }
    throw error; 
  }
};

export const fetchLatestNews = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: "us", 
        apiKey: NEWS_API_KEY,
        pageSize: 10,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    return [];
  }
};

export const combineAndDeduplicateArticles = (
  articles: (Article | NYTArticle | NewsDataArticle)[]
): (Article | NYTArticle | NewsDataArticle)[] => {
  const seenTitles = new Set();
  return articles.filter((article) => {
    const title = "title" in article ? article.title : article.headline.main;
    if (seenTitles.has(title)) {
      return false;
    }
    seenTitles.add(title);
    return true;
  });
};
