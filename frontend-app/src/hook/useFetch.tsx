import { useEffect, useMemo, useState } from "react";
import { AppRequest } from "../request/request";

type FetchStatus = "IDLE" | "ERROR" | "LOADING" | "SUCCESS";

export function useFetch<ResponseType = any>(request: AppRequest) {
  const [data, setData] = useState<ResponseType>();
  const [error, setError] = useState<string>("");

  const [status, setStatus] = useState<FetchStatus>("IDLE");
  const isLoading = useMemo(() => status === "LOADING", [status]);
  const isError = useMemo(() => status === "ERROR", [status]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("LOADING");
        const result = await request();
        setData(result.data);
        setStatus("SUCCESS");
      } catch (error: any) {
        setStatus("ERROR");
        if (error.response.data) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
      }
    };
    fetchData();
  }, []);

  return {
    data,
    error,
    status,
    isLoading,
    isError,
  };
}
