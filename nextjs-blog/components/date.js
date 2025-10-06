// components/date.js
import { parseISO, format } from 'date-fns';
 
// Component that takes an ISO date string as a prop, parses it into a Date
// object, and formats it into a human-readable string like "January 1, 2020".
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}