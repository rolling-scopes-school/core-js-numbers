const assert = require('assert');
const tasks = require('../src/numbers-tasks');
it.optional = require('../extensions/it-optional');

describe('02-numbers-tasks', () => {
  it.optional('getRectangleArea should return a square of rectangle', () => {
    assert.equal(tasks.getRectangleArea(5, 10), 50);
    assert.equal(tasks.getRectangleArea(5, 5), 25);
  });

  it.optional('getCircleCircumference should return a circumference of circle', () => {
    assert.equal(tasks.getCircleCircumference(5), 31.41592653589793);
    assert.equal(tasks.getCircleCircumference(3.14), 19.729201864543903);
    assert.equal(tasks.getCircleCircumference(0), 0);
  });

  it.optional('getAverage should return an average of two numbers', () => {
    assert.equal(tasks.getAverage(5, 5), 5);
    assert.equal(tasks.getAverage(10, 0), 5);
    assert.equal(tasks.getAverage(-3, 3), 0);
    assert.equal(tasks.getAverage(Number.MAX_VALUE - 2, Number.MAX_VALUE), Number.MAX_VALUE - 1);
    assert.equal(tasks.getAverage(Number.MAX_VALUE, -Number.MAX_VALUE / 2), Number.MAX_VALUE / 4);
  });

  it.optional('getDistanceBetweenPoints should return a distance between points', () => {
    assert.equal(tasks.getDistanceBetweenPoints(0, 0, 0, 1), 1);
    assert.equal(tasks.getDistanceBetweenPoints(0, 0, 1, 0), 1);
    assert.equal(tasks.getDistanceBetweenPoints(-5, 0, 10, -10), 18.027756377319946);
  });

  it.optional('getLinearEquationRoot should return a root of linear equation', () => {
    assert.equal(tasks.getLinearEquationRoot(5, -10), 2);
    assert.equal(tasks.getLinearEquationRoot(1, 8), -8);
    assert.equal(tasks.getLinearEquationRoot(5, 0), 0);
  });

  it.optional('getAngleBetweenVectors should return a angle (in radians) between two linear vectors', () => {
    assert.equal(tasks.getAngleBetweenVectors(1, 0, 0, 1), Math.PI / 2);
    assert.equal(tasks.getAngleBetweenVectors(0, 1, 0, -1), Math.PI);
    assert.equal(tasks.getAngleBetweenVectors(0, -1, 1, 0), Math.PI / 2);
    assert.equal(tasks.getAngleBetweenVectors(0, 1, 0, 1), 0);
  });

  it.optional('getLastDigit should return a last digit of the number', () => {
    assert.equal(tasks.getLastDigit(100), 0);
    assert.equal(tasks.getLastDigit(37), 7);
    assert.equal(tasks.getLastDigit(5), 5);
    assert.equal(tasks.getLastDigit(0), 0);
  });

  it.optional('parseNumberFromString should return a number from the given string representation', () => {
    assert.equal(tasks.parseNumberFromString('100'), 100);
    assert.equal(tasks.parseNumberFromString('37'), 37);
    assert.equal(tasks.parseNumberFromString('-525.5'), -525.5);
  });

  it.optional('getParallelepipedDiagonal should return a diagonal length of the rectangular parallepiped', () => {
    assert.equal(tasks.getParallelepipedDiagonal(1, 1, 1), Math.sqrt(3));
    assert.equal(tasks.getParallelepipedDiagonal(3, 3, 3), Math.sqrt(27));
    assert.equal(tasks.getParallelepipedDiagonal(1, 2, 3), Math.sqrt(14));
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
  });

  it.optional('isPrime should return true if specified number is prime', () => {
    assert.equal(tasks.isPrime(2), true, '2');
    assert.equal(tasks.isPrime(3), true, '3');
    assert.equal(tasks.isPrime(4), false, '4');
    assert.equal(tasks.isPrime(5), true, '5');
    assert.equal(tasks.isPrime(6), false, '6');
    assert.equal(tasks.isPrime(7), true, '7');
    assert.equal(tasks.isPrime(8), false, '8');
    assert.equal(tasks.isPrime(9), false, '9');
    assert.equal(tasks.isPrime(10), false, '10');
    assert.equal(tasks.isPrime(11), true, '11');
    assert.equal(tasks.isPrime(12), false, '12');
    assert.equal(tasks.isPrime(13), true, '13');
    assert.equal(tasks.isPrime(113), true, '113');
    assert.equal(tasks.isPrime(119), false, '119');
  });

  it.optional('toNumber should convert any value to number or return the default', () => {
    assert.equal(tasks.toNumber(null, 0), 0);
    assert.equal(tasks.toNumber('test', 0), 0);
    assert.equal(tasks.toNumber('1', 0), 1);
    assert.equal(tasks.toNumber(42, 0), 42);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.toNumber(new Number(42), 0), 42);
    assert.equal(tasks.toNumber(undefined, -1), -1);
  });

  it.optional('getCube returns the cube of the given number', () => {
    assert.equal(tasks.getCube(3), 27);
    assert.equal(tasks.getCube(-2), -8);
    assert.equal(tasks.getCube(0), 0);
  });

  it.optional('getFibonacciNumber returns the Fibonacci number located at the index position', () => {
    assert.equal(tasks.getFibonacciNumber(0), 0);
    assert.equal(tasks.getFibonacciNumber(1), 1);
    assert.equal(tasks.getFibonacciNumber(2), 1);
    assert.equal(tasks.getFibonacciNumber(3), 2);
    assert.equal(tasks.getFibonacciNumber(10), 55);
  });

  it.optional('getSumToN returns the sum of all numbers from 1 to n', () => {
    assert.equal(tasks.getSumToN(5), 15);
    assert.equal(tasks.getSumToN(10), 55);
    assert.equal(tasks.getSumToN(1), 1);
  });

  it.optional('getSumOfDigits returns the sum of the digits of a given number', () => {
    assert.equal(tasks.getSumOfDigits(123), 6);
    assert.equal(tasks.getSumOfDigits(202), 4);
    assert.equal(tasks.getSumOfDigits(5), 5);
    assert.equal(tasks.getSumOfDigits(101010101010), 6);
  });

  it.optional('isPowerOfTwo returns true if the given number is a power of two, false otherwise', () => {
    assert.equal(tasks.isPowerOfTwo(4), true);
    assert.equal(tasks.isPowerOfTwo(16), true);
    assert.equal(tasks.isPowerOfTwo(15), false);
    assert.equal(tasks.isPowerOfTwo(-512), true);
    assert.equal(tasks.isPowerOfTwo(1000), false);
  });

  it.optional('getSine the sine of a number', () => {
    assert.equal(tasks.getSine(0), 0);
    assert.equal(tasks.getSine(Math.PI / 2), 1);
  });

  it.optional('numberToStringInBase returns a string representation of a number in exponential notation', () => {
    assert.equal(tasks.numberToStringInBase(255, 16), 'ff');
    assert.equal(tasks.numberToStringInBase(2, 2), '10');
    assert.equal(tasks.numberToStringInBase(8, 8), '10');
    assert.equal(tasks.numberToStringInBase(123, 2), '1111011');
    assert.equal(tasks.numberToStringInBase(-15, 2), '-1111');
    assert.equal(tasks.numberToStringInBase(123, 10), '123');
    assert.equal(tasks.numberToStringInBase(999, 16), '3e7');
  });

  it.optional('toExponential returns a string representation of a number in exponential notation', () => {
    assert.equal(tasks.toExponential(12345, 2), '1.23e+4');
    assert.equal(tasks.toExponential(-12345, 3), '-1.235e+4');
    assert.equal(tasks.toExponential(12345, 1), '1.2e+4');
  });

  it.optional('toFixed returns a string representation of a number in fixed-point notation', () => {
    assert.equal(tasks.toFixed(12345, 2), 12345.00);
    assert.equal(tasks.toFixed(12.345, 1), 12.3);
  });

  it.optional('toPrecision returns a string representation of a number in normal notation rounded to precision significant digits', () => {
    assert.equal(tasks.toPrecision(12345, 7), 12345.00);
    assert.equal(tasks.toPrecision(12.345, 4), 12.35);
  });

  it.optional('getNumberValue returns the primitive value of a Number object', () => {
    assert.equal(tasks.getNumberValue(Number(5)), 5);
    // eslint-disable-next-line no-new-wrappers
    assert.equal(tasks.getNumberValue(new Number(-5)), -5);
  });

  it.optional('isNumber returns a boolean value indicating whether a number or not', () => {
    assert.equal(tasks.isNumber(Infinity), false);
    assert.equal(tasks.isNumber(NaN), false);
    assert.equal(tasks.isNumber(0), true);
    assert.equal(tasks.isNumber('a' / 1), false);
    assert.equal(tasks.isNumber('a'), false);
    assert.equal(tasks.isNumber(5), true);
    assert.equal(tasks.isNumber('5'), false);
    assert.equal(tasks.isNumber(null), false);
    assert.equal(tasks.isNumber(''), false);
    assert.equal(tasks.isNumber(true), false);
    assert.equal(tasks.isNumber(10), true);
  });

  it.optional('isInteger returns a boolean value indicating whether a number is an integer or not', () => {
    assert.equal(tasks.isInteger(5), true);
    assert.equal(tasks.isInteger(5.1), false);
    assert.equal(tasks.isInteger('5'), false);
    assert.equal(tasks.isInteger(3 / 2), false);
  });

  it.optional('getFloatOnString a floating point number or NaN', () => {
    assert.equal(tasks.getFloatOnString('4.567abcdefgh'), 4.567);
    assert.equal(tasks.getFloatOnString('4.567abcdefgh123'), 4.567);
    assert.equal(tasks.getFloatOnString('abcdefgh'), NaN);
  });

  it.optional('getIntegerOnString an integer of the specified base or NaN', () => {
    assert.equal(tasks.getIntegerOnString('4.567abcdefgh', 10), 4);
    assert.equal(tasks.getIntegerOnString('abcdefgh', 10), NaN);
    assert.equal(tasks.getIntegerOnString('1.234', 2), 1);
    assert.equal(tasks.getIntegerOnString('10', 8), 8);
  });

  it.optional('roundToSmallestInteger returns the largest integer less than or equal to a given number', () => {
    assert.equal(tasks.roundToSmallestInteger(5.9), 5);
    assert.equal(tasks.roundToSmallestInteger(-5.1), -6);
  });

  it.optional('roundToLargestInteger returns the smallest integer greater than or equal to a given number', () => {
    assert.equal(tasks.roundToLargestInteger(5.1), 6);
    assert.equal(tasks.roundToLargestInteger(-5.9), -5);
  });

  it.optional('roundToNearestInteger returns the value of a number rounded to the nearest integer', () => {
    assert.equal(tasks.roundToNearestInteger(5.5), 6);
    assert.equal(tasks.roundToNearestInteger(5.4), 5);
    assert.equal(tasks.roundToNearestInteger(-5.5), -5);
  });

  it.optional('getIntegerPartNumber returns the integer part of a number by removing any fractional digits', () => {
    assert.equal(tasks.roundToNearestInteger(5.5), 5);
    assert.equal(tasks.roundToNearestInteger(5.4), 5);
    assert.equal(tasks.roundToNearestInteger(-5.5), -5);
  });

  it.optional('getMaxNumber returns the largest number', () => {
    assert.equal(tasks.getMaxNumber(1, 2), 2);
    assert.equal(tasks.getMaxNumber(-5, -6), -5);
    assert.equal(tasks.getMaxNumber(0, 5), 5);
  });

  it.optional('getRandomInteger returns a random integer in the range from min to max', () => {
    for (let i = 0; i < 10; i += 1) {
      const min = Math.floor(Math.random() * 10);
      const max = Math.floor(Math.random() * 10 + min + 1);
      const result = tasks.getRandomInteger(min, max);
      assert.equal(min <= result && result <= max, true);
    }
  });

  it.optional('getHypotenyse returns the length of the hypotenuse of a right triangle', () => {
    assert.equal(tasks.getHypotenyse(3, 4), 5);
    assert.equal(tasks.getHypotenyse(5, 6).toPrecision(14), 7.8102496759067);
    assert.equal(tasks.getHypotenyse(Number.MAX_VALUE, 6), 1.7976931348623157e+308);
  });

  it.optional('getCountNotEvenNumber returns count of not even numbers from zero to the resulting number', () => {
    assert.equal(tasks.getCountNotEvenNumber(4), 2);
    assert.equal(tasks.getCountNotEvenNumber(5), 3);
    assert.equal(tasks.getCountNotEvenNumber(10), 5);
    assert.equal(tasks.getCountNotEvenNumber(15), 8);
    assert.equal(tasks.getCountNotEvenNumber(-4), 2);
    assert.equal(tasks.getCountNotEvenNumber(-5), 3);
    assert.equal(tasks.getCountNotEvenNumber(-10), 5);
    assert.equal(tasks.getCountNotEvenNumber(-15), 8);
  });
});

describe('02-numbers-tasks optimal implementation tests', () => {
  it.optional('optimal implementation of getCube', () => {
    assert.equal(tasks.getCube.toString().includes('**'), true, 'should use **');
  });

  it.optional('optimal implementation of getSine', () => {
    assert.equal(tasks.getSine.toString().includes('Math.sin'), true, 'should use Math.sin');
  });

  it.optional('optimal implementation of numberToStringInBase', () => {
    assert.equal(tasks.numberToStringInBase.toString().includes('toString(base)'), true, 'should use Number.toString');
  });

  it.optional('optimal implementation of toExponential', () => {
    assert.equal(tasks.toExponential.toString().includes('toExponential(fractionDigits)'), true, 'should use Number.toExponential');
  });

  it.optional('optimal implementation of toFixed', () => {
    assert.equal(tasks.toFixed.toString().includes('toFixed(fractionDigits)'), true, 'should use Number.toFixed');
  });

  it.optional('optimal implementation of toPrecision', () => {
    assert.equal(tasks.toPrecision.toString().includes('toPrecision(precision)'), true, 'should use Number.toPrecision');
  });

  it.optional('optimal implementation of getNumberValue', () => {
    assert.equal(tasks.getNumberValue.toString().includes('.valueOf()'), true, 'should use Number.valueOf');
  });

  it.optional('optimal implementation of isNumber', () => {
    assert.equal(tasks.isNumber.toString().includes('.isFinite'), true, 'should use Number.isFinite');
    assert.equal(tasks.isNumber.toString().includes('.isNaN'), true, 'should use Number.isNaN');
  });

  it.optional('optimal implementation of isInteger', () => {
    assert.equal(tasks.isInteger.toString().includes('.isInteger(number)'), true, 'should use Number.isInteger');
  });

  it.optional('optimal implementation of getFloatOnString', () => {
    assert.equal(tasks.getFloatOnString.toString().includes('.parseFloat(str)'), true, 'should use Number.parseFloat');
  });

  it.optional('optimal implementation of getIntegerOnString', () => {
    assert.equal(tasks.getIntegerOnString.toString().includes('.parseInt(str, base)'), true, 'should use Number.parseInt');
  });

  it.optional('optimal implementation of roundToSmallestInteger', () => {
    assert.equal(tasks.roundToSmallestInteger.toString().includes('Math.floor'), true, 'should use Math.floor');
  });

  it.optional('optimal implementation of roundToLargestInteger', () => {
    assert.equal(tasks.roundToLargestInteger.toString().includes('Math.ceil'), true, 'should use Math.ceil');
  });

  it.optional('optimal implementation of roundToNearestInteger', () => {
    assert.equal(tasks.roundToNearestInteger.toString().includes('Math.round'), true, 'should use Math.round');
  });

  it.optional('optimal implementation of getIntegerPartNumber', () => {
    assert.equal(tasks.roundToNearestInteger.toString().includes('Math.trunc'), true, 'should use Math.trunc');
  });

  it.optional('optimal implementation of getMaxNumber', () => {
    assert.equal(tasks.getMaxNumber.toString().includes('Math.max'), true, 'should use Math.max');
  });

  it.optional('optimal implementation of getHypotenyse', () => {
    assert.equal(tasks.getHypotenyse.toString().includes('Math.hypot'), true, 'should use Math.hypot');
  });

  it.optional('optimal implementation of getCountNotEvenNumber', () => {
    assert.equal(tasks.getCountNotEvenNumber.toString().includes('%'), true, 'should use % to get the remainder of the division');
  });
});
