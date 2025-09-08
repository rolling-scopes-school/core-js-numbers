const assert = require('assert');
const tasks = require('../src/numbers-tasks');
it.optional = require('../extensions/it-optional');
const forbidden = require('../extensions/forbidden');

describe('02-numbers-tasks', () => {
  it.optional('getRectangleArea should return a square of rectangle', () => {
    assert.equal(tasks.getRectangleArea(5, 10), 50);
    assert.equal(tasks.getRectangleArea(5, 5), 25);
    assert.equal(
      forbidden.isCommented(tasks.getRectangleArea),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getCircleCircumference should return a circumference of circle', () => {
    assert.equal(tasks.getCircleCircumference(5), 31.41592653589793);
    assert.equal(tasks.getCircleCircumference(3.14), 19.729201864543903);
    assert.equal(tasks.getCircleCircumference(0), 0);
    assert.equal(
      forbidden.isCommented(tasks.getCircleCircumference),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getAverage should return an average of two numbers', () => {
    assert.equal(tasks.getAverage(5, 5), 5);
    assert.equal(tasks.getAverage(10, 0), 5);
    assert.equal(tasks.getAverage(-3, 3), 0);
    assert.equal(tasks.getAverage(Number.MAX_VALUE - 2, Number.MAX_VALUE), Number.MAX_VALUE - 1);
    assert.equal(tasks.getAverage(Number.MAX_VALUE, -Number.MAX_VALUE / 2), Number.MAX_VALUE / 4);
    assert.equal(
      forbidden.isCommented(tasks.getAverage),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getDistanceBetweenPoints should return a distance between points', () => {
    assert.equal(tasks.getDistanceBetweenPoints(0, 0, 0, 1), 1);
    assert.equal(tasks.getDistanceBetweenPoints(0, 0, 1, 0), 1);
    assert.equal(tasks.getDistanceBetweenPoints(-5, 0, 10, -10), 18.027756377319946);
    assert.equal(
      forbidden.isCommented(tasks.getDistanceBetweenPoints),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getLinearEquationRoot should return a root of linear equation', () => {
    assert.equal(tasks.getLinearEquationRoot(5, -10), 2);
    assert.equal(tasks.getLinearEquationRoot(1, 8), -8);
    assert.equal(tasks.getLinearEquationRoot(5, 0), 0);
    assert.equal(
      forbidden.isCommented(tasks.getLinearEquationRoot),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getAngleBetweenVectors should return a angle (in radians) between two linear vectors', () => {
    assert.equal(tasks.getAngleBetweenVectors(1, 0, 0, 1), Math.PI / 2);
    assert.equal(tasks.getAngleBetweenVectors(0, 1, 0, -1), Math.PI);
    assert.equal(tasks.getAngleBetweenVectors(0, -1, 1, 0), Math.PI / 2);
    assert.equal(tasks.getAngleBetweenVectors(0, 1, 0, 1), 0);
    assert.equal(
      forbidden.isCommented(tasks.getAngleBetweenVectors),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getLastDigit should return a last digit of the number', () => {
    assert.equal(tasks.getLastDigit(100), 0);
    assert.equal(tasks.getLastDigit(37), 7);
    assert.equal(tasks.getLastDigit(5), 5);
    assert.equal(tasks.getLastDigit(0), 0);
    assert.equal(
      forbidden.isCommented(tasks.getLastDigit),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('parseNumberFromString should return a number from the given string representation', () => {
    assert.equal(tasks.parseNumberFromString('100'), 100);
    assert.equal(tasks.parseNumberFromString('37'), 37);
    assert.equal(tasks.parseNumberFromString('-525.5'), -525.5);
    assert.equal(
      forbidden.isCommented(tasks.parseNumberFromString),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getParallelepipedDiagonal should return a diagonal length of the rectangular parallepiped', () => {
    assert.equal(tasks.getParallelepipedDiagonal(1, 1, 1), Math.sqrt(3));
    assert.equal(tasks.getParallelepipedDiagonal(3, 3, 3), Math.sqrt(27));
    assert.equal(tasks.getParallelepipedDiagonal(1, 2, 3), Math.sqrt(14));
    assert.equal(
      forbidden.isCommented(tasks.getParallelepipedDiagonal),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('roundToPowerOfTen should return an number rounded to specified power of 10', () => {
    assert.equal(tasks.roundToPowerOfTen(1234, 0), 1234);
    assert.equal(tasks.roundToPowerOfTen(1234, 1), 1230);
    assert.equal(tasks.roundToPowerOfTen(1234, 2), 1200);
    assert.equal(tasks.roundToPowerOfTen(1234, 3), 1000);
    assert.equal(tasks.roundToPowerOfTen(9678, 0), 9678);
    assert.equal(tasks.roundToPowerOfTen(9678, 1), 9680);
    assert.equal(tasks.roundToPowerOfTen(9678, 2), 9700);
    assert.equal(tasks.roundToPowerOfTen(9678, 3), 10000);
    assert.equal(
      forbidden.isCommented(tasks.roundToPowerOfTen),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('isPrime should return true if specified number is prime', () => {
    assert.equal(tasks.isPrime(2), true, '2', '2 is a prime number');
    assert.equal(tasks.isPrime(3), true, '3', '3 is a prime number');
    assert.equal(tasks.isPrime(4), false, '4', '4 is not a prime number');
    assert.equal(tasks.isPrime(5), true, '5', '5 is a prime number');
    assert.equal(tasks.isPrime(6), false, '6', '6 is not a prime number');
    assert.equal(tasks.isPrime(7), true, '7', '7 is a prime number');
    assert.equal(tasks.isPrime(8), false, '8', '8 is not a prime number');
    assert.equal(tasks.isPrime(9), false, '9', '9 is not a prime number');
    assert.equal(tasks.isPrime(10), false, '10', '10 is not a prime number');
    assert.equal(tasks.isPrime(11), true, '11', '11 is a prime number');
    assert.equal(tasks.isPrime(12), false, '12', '12 is not a prime number');
    assert.equal(tasks.isPrime(13), true, '13', '13 is a prime number');
    assert.equal(tasks.isPrime(113), true, '113', '113 is a prime number');
    assert.equal(tasks.isPrime(119), false, '119', '119 is not a prime number');
    assert.equal(
      forbidden.isCommented(tasks.isPrime),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('toNumber should convert any value to number or return the default', () => {
    assert.equal(tasks.toNumber(null, 0), 0);
    assert.equal(tasks.toNumber('test', 0), 0);
    assert.equal(tasks.toNumber('1', 0), 1);
    assert.equal(tasks.toNumber(42, 0), 42);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.toNumber(new Number(42), 0), 42);
    assert.equal(tasks.toNumber(undefined, -1), -1);
    assert.equal(
      forbidden.isCommented(tasks.toNumber),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getCube returns the cube of the given number', () => {
    assert.equal(tasks.getCube(3), 27);
    assert.equal(tasks.getCube(-2), -8);
    assert.equal(tasks.getCube(0), 0);
    assert.equal(
      forbidden.isCommented(tasks.getCube),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getFibonacciNumber returns the Fibonacci number located at the index position', () => {
    assert.equal(tasks.getFibonacciNumber(0), 0);
    assert.equal(tasks.getFibonacciNumber(1), 1);
    assert.equal(tasks.getFibonacciNumber(2), 1);
    assert.equal(tasks.getFibonacciNumber(3), 2);
    assert.equal(tasks.getFibonacciNumber(10), 55);
    assert.equal(
      forbidden.isCommented(tasks.getFibonacciNumber),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getSumToN returns the sum of all numbers from 1 to n', () => {
    assert.equal(tasks.getSumToN(5), 15);
    assert.equal(tasks.getSumToN(10), 55);
    assert.equal(tasks.getSumToN(1), 1);
    assert.equal(
      forbidden.isCommented(tasks.getSumToN),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getSumOfDigits returns the sum of the digits of a given number', () => {
    assert.equal(tasks.getSumOfDigits(123), 6);
    assert.equal(tasks.getSumOfDigits(202), 4);
    assert.equal(tasks.getSumOfDigits(5), 5);
    assert.equal(tasks.getSumOfDigits(101010101010), 6);
    assert.equal(
      forbidden.isCommented(tasks.getSumOfDigits),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('isPowerOfTwo returns true if the given number is a power of two, false otherwise', () => {
    assert.equal(tasks.isPowerOfTwo(4), true, '4 is a power of 2');
    assert.equal(tasks.isPowerOfTwo(16), true, '16 is a power of 2');
    assert.equal(tasks.isPowerOfTwo(15), false, '15 is not a power of 2');
    assert.equal(tasks.isPowerOfTwo(-512), false, '-512 is not a power of 2');
    assert.equal(tasks.isPowerOfTwo(1000), false, '1000 is not a power of 2');
    assert.equal(
      forbidden.isCommented(tasks.isPowerOfTwo),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getSine the sine of a number', () => {
    assert.equal(tasks.getSine(0), 0);
    assert.equal(tasks.getSine(Math.PI / 2), 1);
    assert.equal(
      forbidden.isCommented(tasks.getSine),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('numberToStringInBase returns a string representation of a number in exponential notation', () => {
    assert.equal(tasks.numberToStringInBase(255, 16), 'ff');
    assert.equal(tasks.numberToStringInBase(2, 2), '10');
    assert.equal(tasks.numberToStringInBase(8, 8), '10');
    assert.equal(tasks.numberToStringInBase(123, 2), '1111011');
    assert.equal(tasks.numberToStringInBase(-15, 2), '-1111');
    assert.equal(tasks.numberToStringInBase(123, 10), '123');
    assert.equal(tasks.numberToStringInBase(999, 16), '3e7');
    assert.equal(
      forbidden.isCommented(tasks.numberToStringInBase),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('toExponential returns a string representation of a number in exponential notation', () => {
    assert.equal(tasks.toExponential(12345, 2), '1.23e+4');
    assert.equal(tasks.toExponential(-12345, 3), '-1.235e+4');
    assert.equal(tasks.toExponential(12345, 1), '1.2e+4');
    assert.equal(
      forbidden.isCommented(tasks.toExponential),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('toFixed returns a string representation of a number in fixed-point notation', () => {
    assert.equal(tasks.toFixed(12345, 2), 12345.00);
    assert.equal(tasks.toFixed(12.345, 1), 12.3);
    assert.equal(
      forbidden.isCommented(tasks.toFixed),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('toPrecision returns a string representation of a number in normal notation rounded to precision significant digits', () => {
    assert.equal(tasks.toPrecision(12345, 7), 12345.00);
    assert.equal(tasks.toPrecision(12.345, 4), 12.35);
    assert.equal(
      forbidden.isCommented(tasks.toPrecision),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getNumberValue returns the primitive value of a Number object', () => {
    assert.equal(tasks.getNumberValue(Number(5)), 5);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.getNumberValue(new Number(-5)), -5);
    assert.equal(
      forbidden.isCommented(tasks.getNumberValue),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('isNumber returns a boolean value indicating whether a number or not', () => {
    assert.equal(tasks.isNumber(Infinity), false, 'Infinity is not a number');
    assert.equal(tasks.isNumber(NaN), false, 'NaN is not a number');
    assert.equal(tasks.isNumber(0), true, '0 is a number');
    assert.equal(tasks.isNumber('a' / 1), false, 'a/1 is not a number');
    assert.equal(tasks.isNumber('a'), false, 'a is not a number');
    assert.equal(tasks.isNumber(5), true, '5 is a number');
    assert.equal(tasks.isNumber('5'), false, 'string value 5 is not a number');
    assert.equal(tasks.isNumber(null), false, 'null is not a number');
    assert.equal(tasks.isNumber(''), false, 'empty value is not a number');
    assert.equal(tasks.isNumber(true), false, 'true is not a number');
    assert.equal(tasks.isNumber(10), true, '10 is a number');
    assert.equal(
      forbidden.isCommented(tasks.isNumber),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('isInteger returns a boolean value indicating whether a number is an integer or not', () => {
    assert.equal(tasks.isInteger(5), true, '5 is an integer');
    assert.equal(tasks.isInteger(5.1), false, '5.1 is not an integer');
    assert.equal(tasks.isInteger('5'), false, 'string value 5 is not an integer');
    assert.equal(tasks.isInteger(3 / 2), false, '3/2 is not an integer');
    assert.equal(
      forbidden.isCommented(tasks.isInteger),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getFloatOnString a floating point number or NaN', () => {
    assert.equal(tasks.getFloatOnString('4.567abcdefgh'), 4.567);
    assert.equal(tasks.getFloatOnString('4.567abcdefgh123'), 4.567);
    assert.equal(tasks.getFloatOnString('abcdefgh'), NaN);
    assert.equal(
      forbidden.isCommented(tasks.getFloatOnString),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getIntegerOnString an integer of the specified base or NaN', () => {
    assert.equal(tasks.getIntegerOnString('4.567abcdefgh', 10), 4);
    assert.equal(tasks.getIntegerOnString('abcdefgh', 10), NaN);
    assert.equal(tasks.getIntegerOnString('1.234', 2), 1);
    assert.equal(tasks.getIntegerOnString('10', 8), 8);
    assert.equal(
      forbidden.isCommented(tasks.getIntegerOnString),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('roundToSmallestInteger returns the largest integer less than or equal to a given number', () => {
    assert.equal(tasks.roundToSmallestInteger(5.9), 5);
    assert.equal(tasks.roundToSmallestInteger(-5.1), -6);
    assert.equal(
      forbidden.isCommented(tasks.roundToSmallestInteger),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('roundToLargestInteger returns the smallest integer greater than or equal to a given number', () => {
    assert.equal(tasks.roundToLargestInteger(5.1), 6);
    assert.equal(tasks.roundToLargestInteger(-5.9), -5);
    assert.equal(
      forbidden.isCommented(tasks.roundToLargestInteger),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('roundToNearestInteger returns the value of a number rounded to the nearest integer', () => {
    assert.equal(tasks.roundToNearestInteger(5.5), 6);
    assert.equal(tasks.roundToNearestInteger(5.4), 5);
    assert.equal(tasks.roundToNearestInteger(-5.5), -5);
    assert.equal(
      forbidden.isCommented(tasks.roundToNearestInteger),
      false,
      'Be sure to remove comments from the final solution',
    );
  });

  it.optional('getIntegerPartNumber returns the integer part of a number by removing any fractional digits', () => {
    assert.equal(tasks.roundToNearestInteger(5.5), 5);
    assert.equal(tasks.roundToNearestInteger(5.4), 5);
    assert.equal(tasks.roundToNearestInteger(-5.5), -5);
    assert.equal(
      forbidden.isCommented(tasks.roundToNearestInteger),
      false,
      'Be sure to remove comments from the final solution',
    );
  });
});

describe('02-numbers-tasks optimal implementation tests', () => {
  it.optional('optimal implementation of getCube', () => {
    assert.equal(tasks.getCube(3), 27);
    assert.equal(
      tasks.getCube.toString().includes('**'),
      true,
      'find the operator performing this action in the documentation',
    );
  });

  it.optional('optimal implementation of getSine', () => {
    assert.equal(tasks.getSine(0), 0);
    assert.equal(
      tasks.getSine.toString().includes('Math.sin'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of numberToStringInBase', () => {
    assert.equal(tasks.numberToStringInBase(255, 16), 'ff');
    assert.equal(
      tasks.numberToStringInBase.toString().includes('toString'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of toExponential', () => {
    assert.equal(tasks.toExponential(12345, 2), '1.23e+4');
    assert.equal(
      tasks.toExponential.toString().includes('toExponential'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of toFixed', () => {
    assert.equal(tasks.toFixed(12345, 2), 12345.00);
    assert.equal(
      tasks.toFixed.toString().includes('toFixed'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of toPrecision', () => {
    assert.equal(tasks.toPrecision(12345, 7), 12345.00);
    assert.equal(
      tasks.toPrecision.toString().includes('toPrecision'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of getNumberValue', () => {
    assert.equal(tasks.getNumberValue(Number(5)), 5);
    assert.equal(
      tasks.getNumberValue.toString().includes('.valueOf'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of isNumber', () => {
    assert.equal(tasks.isNumber(0), true, '0 is a number');
    assert.equal(tasks.isNumber.toString().includes('.isFinite'), true);
    assert.equal(
      tasks.isNumber.toString().includes('.isNaN'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of isInteger', () => {
    assert.equal(tasks.isInteger(5), true, '5 is an integer');
    assert.equal(
      tasks.isInteger.toString().includes('.isInteger'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of getFloatOnString', () => {
    assert.equal(tasks.getFloatOnString('4.567abcdefgh'), 4.567);
    assert.equal(
      tasks.getFloatOnString.toString().includes('.parseFloat'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of getIntegerOnString', () => {
    assert.equal(tasks.getIntegerOnString('4.567abcdefgh', 10), 4);
    assert.equal(
      tasks.getIntegerOnString.toString().includes('.parseInt'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of roundToSmallestInteger', () => {
    assert.equal(tasks.roundToSmallestInteger(5.9), 5);
    assert.equal(
      tasks.roundToSmallestInteger.toString().includes('Math.floor'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of roundToLargestInteger', () => {
    assert.equal(tasks.roundToLargestInteger(5.1), 6);
    assert.equal(
      tasks.roundToLargestInteger.toString().includes('Math.ceil'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of roundToNearestInteger', () => {
    assert.equal(tasks.roundToNearestInteger(5.5), 5);
    assert.equal(
      tasks.roundToNearestInteger.toString().includes('Math.round'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });

  it.optional('optimal implementation of getIntegerPartNumber', () => {
    assert.equal(tasks.roundToNearestInteger(5.5), 5);
    assert.equal(
      tasks.roundToNearestInteger.toString().includes('Math.trunc'),
      true,
      'find in the documentation a class method that allows you to solve the problem in one step',
    );
  });
});
