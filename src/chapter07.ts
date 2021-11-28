function ask() {
  return prompt('When is your birthday?');
}

// カスタムエラー型
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function parse(
  birthday: string
): Date | InvalidDateFormatError | DateIsInTheFutureError {
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

const result = parse(ask());
if (result instanceof InvalidDateFormatError) {
  console.error(result.message);
} else if (result instanceof DateIsInTheFutureError) {
  console.error(result.message);
} else {
  console.info('Date is', result.toISOString());
}

// function x(): T | Error1 {}
// function y(): T | Error1 | Error2 {
//   let a = x();
//   if (a instanceof Error) return a;
// }
// function z(): T | Error1 | Error2 | Error2 {
//   let a = y();
//   if (a instanceof Error) return a;
// }
