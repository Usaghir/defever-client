import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const BASE_URL = "https://disease.sh/v3/covid-19";

export function useCoronaAPI(
  path,
  { initialData = {}, converter = (data) => data, refetchInterval = null }
) {
  const [data, setData] = useState(initialData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const convertData = useCallback(converter, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${path}`, {
          headers: {
            "Content-Type": "application/json",
            mode: "cors",
          },
        });

        setData(convertData(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    if (refetchInterval) {
      const intervalId = setInterval(fetchData, refetchInterval);
      return () => clearInterval(intervalId);
    }
  }, [convertData, path, refetchInterval]);

  return data;
}
