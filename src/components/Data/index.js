import { useEffect, useState, createContext } from "react";
import ListCheck from "../ListCheck";
export const dataInApi = createContext();

function Data() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data.products);
        });
    };

    fetchApi();
  }, []);

  return (
    <>
      <dataInApi.Provider value={data}>
        <ListCheck />
      </dataInApi.Provider>
    </>
  );
}

export default Data;
