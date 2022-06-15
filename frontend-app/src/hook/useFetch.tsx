import { useEffect, useState } from "react";
import { AppRequest } from "../request/request";

type FetchStatus = "IDLE" | "ERRPR" | "LOADING" | "SUCCESS";

export const useFetch = (request: AppRequest) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState<string>("IDLE");

  useEffect(() => {
    const fetchData = async () => {};

    try {
      const data = await request();
    } catch (e) {}
  }, []);
};
