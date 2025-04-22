const isValidDate = (year: number, month: number, date: number) => {
  const calendarDate = new Date(year, month, date);
  return (
    calendarDate.getFullYear() === year &&
    calendarDate.getMonth() === month &&
    calendarDate.getDate() === date
  );
};

const monthString = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Des',
];

/**
 * Convert date from YYYY-MM-DD HH:mm:ss format to be DD MMMM YYYY format
 * @param dateValue string date with format YYYY-MM-DDTHH:mm:ssZ
 */
export const dateToString = (dateValue: string) => {
  try {
    const [year, month, date] = dateValue.split('T')[0].split('-');
    const [hour, minute] = dateValue.split('T')[1].split(':');

    if (isValidDate(Number(year), Number(month), Number(date))) {
      return `${date} ${
        monthString[Number(month) - 1]
      } ${year} ${hour}:${minute}`;
    }

    return '';
  } catch (_error) {
    return '';
  }
};
