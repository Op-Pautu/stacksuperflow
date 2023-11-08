import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now: Date = new Date();
  const timeDifference: number = now.getTime() - createdAt.getTime();

  // Define time units in milliseconds
  const minute: number = 60 * 1000;
  const hour: number = 60 * minute;
  const day: number = 24 * hour;
  const week: number = 7 * day;
  const month: number = 30 * day;
  const year: number = 365 * day;

  if (timeDifference < minute) {
    const secondsAgo = Math.floor(timeDifference / 1000);
    return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < week) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < month) {
    const weeksAgo = Math.floor(timeDifference / week);
    return `${weeksAgo} week${weeksAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < year) {
    const monthsAgo = Math.floor(timeDifference / month);
    return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
  } else {
    const yearsAgo = Math.floor(timeDifference / year);
    return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
  }
};

export const formatAndDivideNumber = (number: number): string => {
  let formattedNumber: number | string = number;
  let suffix: string = '';

  if (number >= 1000000) {
    formattedNumber = (number / 1000000).toFixed(1);
    suffix = 'M';
  } else if (number >= 1000) {
    formattedNumber = (number / 1000).toFixed(1);
    suffix = 'K';
  }

  return `${formattedNumber}${suffix}`;
};


export const getJoinedDate = (date: Date): string => {
  // Get the month and year components from the date
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Join the month and year to form the joined date
  const joinedDate = `${month} ${year}`;

  return joinedDate;
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params)
  currentUrl[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: currentUrl,
  },
    {
      skipNull: true
    }
  )
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];

}

export const removeKeysFromQuery = ({ params, keysToRemove }: RemoveUrlQueryParams) => {
  const currentUrl = qs.parse(params)

  keysToRemove.forEach((key) => {
    delete currentUrl[key]
  })

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: currentUrl
  },
    {
      skipNull: true
    })
} 
