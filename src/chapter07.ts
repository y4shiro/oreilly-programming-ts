// 7.1 null を返す
function ask() {
  return prompt('When is your birthday?');
}

function parse(birthday: string): Date | null {
  const date = new Date(birthday);
  if (!isValid(date)) {
    return null;
  }
  return date;
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

const date = parse(ask());
if (date) {
  console.info('Date is', date.toISOString());
} else {
  console.error('Error');
}
