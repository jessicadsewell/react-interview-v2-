import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { DateTime } from "luxon";

interface DatePaginatorProps {
  currentDate: string;
  onDateChange: (date: string) => void;
}

const DatePaginator = ({ currentDate, onDateChange }: DatePaginatorProps) => {
  const isToday = currentDate === DateTime.now().toISODate();

  const toPrevious = () => {
    toDay(-1);
  };

  const toNext = () => {
    toDay(1);
  };

  const toDay = (days: number) => {
    const newDate = DateTime.fromISO(currentDate).plus({ days }).toISODate();
    newDate && onDateChange(newDate);
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      <button onClick={() => toPrevious()}>
        <ArrowLeftCircleIcon className="h-5 w-5 text-gray-800" />
      </button>
      <span>{currentDate}</span>
      <button onClick={() => toNext()} disabled={isToday}>
        <ArrowRightCircleIcon className="h-5 w-5 text-gray-800" />
      </button>
    </div>
  );
};

export default DatePaginator;
