import { format, isValid, parseISO } from 'date-fns';

export const formatDate = (dateString: string) => {
 const date = parseISO(dateString); // Parse the string as ISO 8601
 if (!isValid(date)) {
  throw new Error("Invalid date string provided");
 }
 return format(date, "d MMMM yyyy");
}