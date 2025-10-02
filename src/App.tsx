import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import DatePaginator from "./components/DatePaginator";
import NasaImage from "./components/NasaImage";
import { DateTime } from "luxon";

export interface ApodData {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}

function App() {
  const [currentDate, setCurrentDate] = useState(
    DateTime.now().minus({ days: 1 }).toISODate()
  );
  const [apod, setApod] = useState<{
    data: ApodData | null | undefined;
    loading: boolean;
    error: string | null | undefined;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_APOD_API_KEY;
      if (!apiKey) {
        console.log("no api key");
      }

      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`
      );
      const data = await res.json();
      setApod({ ...apod, data, loading: false });
    } catch (e) {
      setApod({
        data: null,
        loading: false,
        error: e instanceof Error ? e.message : "Error occurred",
      });
    }
  };

  const handleDateChange = (date: string) => {
    setCurrentDate(date);
  };

  useEffect(() => {
    fetchData();
  }, [currentDate]);

  return (
    <div className="min-h-screen flex justify-center pt-16 w-full">
      <Card>
        <Card.Title>NASA Astronomy Picture of the Day</Card.Title>
        <Card.Subtitle>
          <DatePaginator
            currentDate={currentDate}
            onDateChange={handleDateChange}
          />
        </Card.Subtitle>
        <Card.Content>
          {apod.data ? (
            <NasaImage apod={apod.data} loading={apod.loading} />
          ) : (
            "No image today :("
          )}
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;
