import react, { useEffect, useState } from "react";

export const useFetch = (url: string, accessToken: string) => {
  const [data, setdata] = useState<unknown[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data: [] = await response.json();
          setdata(data);
        } else {
          setErrors([...errors, response.statusText]);
        }
      } catch {
        setErrors([...errors, "Service unavailable"]);
        console.error("Service unavailable");
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { data, errors, isLoading };
};
