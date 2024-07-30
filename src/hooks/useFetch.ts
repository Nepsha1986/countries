import { useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
};

const useFetch = <T>(serviceFunction: () => Promise<T>): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await serviceFunction();
      setData(result);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err);
      } else {
        setError(new Error("An unknown error occurred") as AxiosError);
      }
    } finally {
      setLoading(false);
    }
  }, [serviceFunction]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
  };
};

export { useFetch };
