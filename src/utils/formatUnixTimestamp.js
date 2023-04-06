/**
 * A function that formats a unix timestamp into a date string.
 * @param unix The unix timestamp to format. In milliseconds.
 * @param locale The locale to use for formatting. Example: 'en-US'
 * @returns A formatted date string.
 * @example
 * var formattedDate = formatUnixTimestamp(1623240000000, 'en-US');
 * console.log(formattedDate); // '6/9/2023, 4:20:00 AM'
 */

export default function formatUnixTimestamp(unix, locale) {
  const date = new Date(unix);

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const formattedDate = dateFormatter.format(date);

  return formattedDate;
}