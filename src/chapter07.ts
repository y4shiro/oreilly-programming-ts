function ask() {
  return prompt('When is your birthday?');
}

// カスタムエラー型
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function parse(birthday: string): Date {
  const date = new Date(birthday);
  if (!isValid(date)) {
    throw new InvalidDateFormatError('Enter a date in the from YYYY/MM//DD');
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you a timeload?');
  }
  return date;
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

try {
  const date = parse(ask());
  console.info('Date is', date.toISOString());
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message);
  } else if (e instanceof DateIsInTheFutureError) {
    console.error(e.message);
  } else {
    throw e;
  }
}
