import React from "react";

function getTimeLeft(timestamp: number): { days: string; hours: string; minutes: string; seconds: string } {
  const now = Date.now();
  const delta = timestamp - now;

  if (delta <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const deltaSeconds = delta / 1000;

  const days = Math.floor(deltaSeconds / 86400);
  const daysString = days < 10 ? "0" + days.toString() : days.toString();

  const hours = Math.floor((deltaSeconds / 3600) % 24);
  const hoursString = hours < 10 ? "0" + hours.toString() : hours.toString();

  const minutes = Math.floor((deltaSeconds / 60) % 60);
  const minutesString = minutes < 10 ? "0" + minutes.toString() : minutes.toString();

  const seconds = Math.floor(deltaSeconds % 60);
  const secondsString = seconds < 10 ? "0" + seconds.toString() : seconds.toString();

  return { days: daysString, hours: hoursString, minutes: minutesString, seconds: secondsString };
}

export const useCountdown = (futureTime: number) => {
  const [timeFinished, setTimeFinished] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < futureTime) {
        setTimeLeft(
          getTimeLeft(futureTime) ?? {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          }
        );
        setTimeFinished(false);
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        setTimeFinished(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [futureTime]);

  return { timeFinished, timeLeft };
};
