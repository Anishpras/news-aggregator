import { useQuery } from "@tanstack/react-query";
import {
  fetchNYTArticles,
  fetchNewsDataArticles,
  fetchNewsAPIArticles,
  fetchLatestNews,
  combineAndDeduplicateArticles,
} from "../services/api";
import { Filters } from "../types";

interface UseNewsApiProps {
  query: string;
  filters: Filters;
}

export const useNewsApi = ({ query, filters }: UseNewsApiProps) => {
  const nytQuery = useQuery({
    queryKey: ["nyt", query, filters],
    queryFn: () => fetchNYTArticles(query, filters),
    enabled: !!query,
    retry: false,
  });

  const newsDataQuery = useQuery({
    queryKey: ["newsData", query, filters],
    queryFn: () => fetchNewsDataArticles(query, filters),
    enabled: !!query,
    retry: false,
  });

  const newsApiQuery = useQuery({
    queryKey: ["newsApi", query, filters],
    queryFn: () => fetchNewsAPIArticles(query, filters),
    enabled: !!query,
    retry: false,
  });

  const isLoading =
    nytQuery.isLoading || newsDataQuery.isLoading || newsApiQuery.isLoading;
  const isError =
    nytQuery.isError || newsDataQuery.isError || newsApiQuery.isError;
  const error = nytQuery.error || newsDataQuery.error || newsApiQuery.error;

  const articles = combineAndDeduplicateArticles([
    ...(nytQuery.data || []),
    ...(newsDataQuery.data || []),
    ...(newsApiQuery.data || []),
  ]);

  return {
    articles,
    isLoading,
    isError,
    error: error ? (error as Error).message : null,
  };
};

export const useLatestNews = () => {
  return useQuery({
    queryKey: ["latestNews"],
    queryFn: fetchLatestNews,
    retry: false,
  });
};
