import Clock from "./Clock";
import { useState, useEffect } from "react";

const Board: React.FC = () => {
  const timezones = [
    "Europe/Stockholm",
    "Europe/London",
    "Europe/Paris",
    "Europe/Moscow",
    "Asia/Tokyo",
    "America/New_York",
    "America/Los_Angeles",
    "America/Sao_Paulo",
  ];

  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      timezones.forEach((timezone) => {
        newTimes[timezone] = new Date(Date.now()).toLocaleTimeString("en-US", {
          timeZone: timezone,
          hour12: false,
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timezones]);

  return (
    <>
      {timezones.map((timezone) => (
        <Clock key={timezone} timezone={timezone} time={times[timezone]} />
      ))}
    </>
  );
};

export default Board;
