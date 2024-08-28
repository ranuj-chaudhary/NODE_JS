export function formatTime(inputDate) {
  const hours = String(inputDate.getHours());
  const seconds = String(inputDate.getSeconds());
  const timeUnit = hours >= 12 ? 'PM' : 'AM';
  return `${hours.padStart(2, '0')}:${seconds.padStart(2, '0')} ${timeUnit}`;
}

export function formatDate(inputDate) {
  const date = String(inputDate.getDate());
  const month = String(inputDate.getMonth());
  const year = String(inputDate.getFullYear());

  return `${date.padStart(2, '0')}/${month.padStart(2, '0')}/${year.padStart(
    2,
    '0'
  )}`;
}
