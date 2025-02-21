import { useEffect, useState } from "react";
import ExcursionCard from "./ExcursionCard";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const ExcursionList = () => {
  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${API_URL}/excursions`, {
          withCredentials: true,
        });

        console.log(response);

        setExcursions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {excursions.map((excursion) => (
        <ExcursionCard key={excursion.id} excursion={excursion} />
      ))}
    </div>
  );
};

export default ExcursionList;
