export default function calculateTimeRemaining(time: number) {
  const mins = Math.floor(time / 60);
  const seconds = time % 60;

  if (time <= 0) return "00:00";

  return `${mins >= 10 ? mins : `0${mins}`}:${
    seconds.toString().length > 1 ? seconds : `0${seconds}`
  }`;
}
