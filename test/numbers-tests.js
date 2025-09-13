const assert = require('assert');
const tasks = require('../src/numbers-tasks');
it.optional = require('../extensions/it-optional');
const forbidden = require('../extensions/forbidden');

let getCubeSuccess = false;
let getSineSuccess = false;
let numberToStringInBaseSuccess = false;
let toExponentialSuccess = false;
let toFixedSuccess = false;
let toPrecisionSuccess = false;
let getNumberValueSuccess = false;
let isNumberSuccess = false;
let isIntegerSuccess = false;
let getFloatOnStringSuccess = false;
let getIntegerOnStringSuccess = false;
let isSafeIntegerSuccess = false;
let roundToSmallestIntegerSuccess = false;
let roundToLargestIntegerSuccess = false;
let roundToNearestIntegerSuccess = false;
let getIntegerPartNumberSuccess = false;
let getMaxNumberSuccess = false;
let getHypotenuseSuccess = false;
let getLastDigitSuccess = false;

describe('core-js-numbers', () => {
  it.optional('getRectangleArea should return a square of rectangle', () => {
    assert.equal(tasks.getRectangleArea(5, 10), 50);
    assert.equal(tasks.getRectangleArea(5, 5), 25);
    assert.equal(
      forbidden.isCommented(tasks.getRectangleArea),
      false,
      'Be sure to remove comments from the final solution'
    );
  });

  it.optional(
    'getCircleCircumference should return a circumference of circle',
    () => {
      assert.equal(tasks.getCircleCircumference(5), 31.41592653589793);
      assert.equal(tasks.getCircleCircumference(3.14), 19.729201864543903);
      assert.equal(tasks.getCircleCircumference(0), 0);
      assert.equal(
        forbidden.isCommented(tasks.getCircleCircumference),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional('getAverage should return an average of two numbers', () => {
    assert.equal(tasks.getAverage(5, 5), 5);
    assert.equal(tasks.getAverage(10, 0), 5);
    assert.equal(tasks.getAverage(-3, 3), 0);
    assert.equal(
      tasks.getAverage(Number.MAX_VALUE - 2, Number.MAX_VALUE),
      Number.MAX_VALUE - 1
    );
    assert.equal(
      tasks.getAverage(Number.MAX_VALUE, -Number.MAX_VALUE / 2),
      Number.MAX_VALUE / 4
    );
    assert.equal(
      forbidden.isCommented(tasks.getAverage),
      false,
      'Be sure to remove comments from the final solution'
    );
  });

  it.optional(
    'getDistanceBetweenPoints should return a distance between points',
    () => {
      assert.equal(tasks.getDistanceBetweenPoints(0, 0, 0, 1), 1);
      assert.equal(tasks.getDistanceBetweenPoints(0, 0, 1, 0), 1);
      assert.equal(
        tasks.getDistanceBetweenPoints(-5, 0, 10, -10),
        18.027756377319946
      );
      assert.equal(
        forbidden.isCommented(tasks.getDistanceBetweenPoints),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'getLinearEquationRoot should return a root of linear equation',
    () => {
      assert.equal(tasks.getLinearEquationRoot(5, -10), 2);
      assert.equal(tasks.getLinearEquationRoot(1, 8), -8);
      assert.equal(tasks.getLinearEquationRoot(5, 0), 0);
      assert.equal(
        forbidden.isCommented(tasks.getLinearEquationRoot),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'getAngleBetweenVectors should return a angle (in radians) between two linear vectors',
    () => {
      assert.equal(tasks.getAngleBetweenVectors(1, 0, 0, 1), Math.PI / 2);
      assert.equal(tasks.getAngleBetweenVectors(0, 1, 0, -1), Math.PI);
      assert.equal(tasks.getAngleBetweenVectors(0, -1, 1, 0), Math.PI / 2);
      assert.equal(tasks.getAngleBetweenVectors(0, 1, 0, 1), 0);
      assert.equal(
        forbidden.isCommented(tasks.getAngleBetweenVectors),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional('getLastDigit should return a last digit of the number', () => {
    assert.equal(tasks.getLastDigit(100), 0);
    assert.equal(tasks.getLastDigit(37), 7);
    assert.equal(tasks.getLastDigit(11), 1);
    assert.equal(tasks.getLastDigit(5), 5);
    assert.equal(tasks.getLastDigit(0), 0);
    assert.equal(
      forbidden.isCommented(tasks.getLastDigit),
      false,
      'Be sure to remove comments from the final solution'
    );
    getLastDigitSuccess = true;
  });

  it.optional(
    'parseNumberFromString should return a number from the given string representation',
    () => {
      assert.equal(tasks.parseNumberFromString('100'), 100);
      assert.equal(tasks.parseNumberFromString('37'), 37);
      assert.equal(tasks.parseNumberFromString('-525.5'), -525.5);
      assert.equal(
        forbidden.isCommented(tasks.parseNumberFromString),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'getParallelepipedDiagonal should return a diagonal length of the rectangular parallepiped',
    () => {
      assert.equal(tasks.getParallelepipedDiagonal(1, 1, 1), Math.sqrt(3));
      assert.equal(tasks.getParallelepipedDiagonal(3, 3, 3), Math.sqrt(27));
      assert.equal(tasks.getParallelepipedDiagonal(1, 2, 3), Math.sqrt(14));
      assert.equal(
        forbidden.isCommented(tasks.getParallelepipedDiagonal),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'roundToPowerOfTen should return an number rounded to specified power of 10',
    () => {
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
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional('isPrime should return true if specified number is prime', () => {
    assert.equal(tasks.isPrime(2), true, 'number 2 is prime');
    assert.equal(tasks.isPrime(3), true, 'number 3 is prime');
    assert.equal(tasks.isPrime(4), false, '4 is not a prime number');
    assert.equal(tasks.isPrime(5), true, 'number 5 is prime');
    assert.equal(tasks.isPrime(6), false, '6 is not a prime number');
    assert.equal(tasks.isPrime(7), true, 'number 7 is prime');
    assert.equal(tasks.isPrime(8), false, '8 is not a prime number');
    assert.equal(tasks.isPrime(9), false, '9 is not a prime number');
    assert.equal(tasks.isPrime(10), false, '10 is not a prime number');
    assert.equal(tasks.isPrime(11), true, 'number 11 is prime');
    assert.equal(tasks.isPrime(12), false, '12 is not a prime number');
    assert.equal(tasks.isPrime(13), true, 'number 13 is prime');
    assert.equal(tasks.isPrime(113), true, 'number 113 is prime');
    assert.equal(tasks.isPrime(119), false, '119 is not a prime number');
    assert.equal(
      forbidden.isCommented(tasks.isPrime),
      false,
      'Be sure to remove comments from the final solution'
    );
  });

  it.optional(
    'toNumber should convert any value to number or return the default',
    () => {
      assert.equal(tasks.toNumber(null, 0), 0);
      assert.equal(tasks.toNumber('test', 0), 0);
      assert.equal(tasks.toNumber('1', 0), 1);
      assert.equal(tasks.toNumber(42, 0), 42);
      assert.equal(tasks.toNumber(undefined, -1), -1);
      assert.equal(
        forbidden.isCommented(tasks.toNumber),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional('getCube returns the cube of the given number', () => {
    assert.equal(tasks.getCube(3), 27);
    assert.equal(tasks.getCube(-2), -8);
    assert.equal(tasks.getCube(0), 0);
    assert.equal(
      forbidden.isCommented(tasks.getCube),
      false,
      'Be sure to remove comments from the final solution'
    );
    getCubeSuccess = true;
  });

  it.optional(
    'getFibonacciNumber returns the Fibonacci number located at the index position',
    () => {
      assert.equal(tasks.getFibonacciNumber(0), 0);
      assert.equal(tasks.getFibonacciNumber(1), 1);
      assert.equal(tasks.getFibonacciNumber(2), 1);
      assert.equal(tasks.getFibonacciNumber(3), 2);
      assert.equal(tasks.getFibonacciNumber(10), 55);
      assert.equal(
        forbidden.isCommented(tasks.getFibonacciNumber),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional('getSumToN returns the sum of all numbers from 1 to n', () => {
    assert.equal(tasks.getSumToN(5), 15);
    assert.equal(tasks.getSumToN(10), 55);
    assert.equal(tasks.getSumToN(1), 1);
    assert.equal(
      forbidden.isCommented(tasks.getSumToN),
      false,
      'Be sure to remove comments from the final solution'
    );
  });

  it.optional(
    'getSumOfDigits returns the sum of the digits of a given number',
    () => {
      assert.equal(tasks.getSumOfDigits(123), 6);
      assert.equal(tasks.getSumOfDigits(202), 4);
      assert.equal(tasks.getSumOfDigits(5), 5);
      assert.equal(tasks.getSumOfDigits(101010101010), 6);
      assert.equal(
        forbidden.isCommented(tasks.getSumOfDigits),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'isPowerOfTwo returns true if the given number is a power of two, false otherwise',
    () => {
      assert.equal(tasks.isPowerOfTwo(4), true, 'the value 4 is a power of 2');
      assert.equal(
        tasks.isPowerOfTwo(16),
        true,
        'the value 16 is a power of 2'
      );
      assert.equal(
        tasks.isPowerOfTwo(15),
        false,
        'the value 15 is not a power of 2'
      );
      assert.equal(
        tasks.isPowerOfTwo(512),
        true,
        'the value 512 is a power of 2'
      );
      assert.equal(
        tasks.isPowerOfTwo(1000),
        false,
        'the value 1000 is not a power of 2'
      );
      assert.equal(
        forbidden.isCommented(tasks.isPowerOfTwo),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional('getSine the sine of a number', () => {
    assert.equal(tasks.getSine(0), 0);
    assert.equal(tasks.getSine(Math.PI / 2), 1);
    assert.equal(
      forbidden.isCommented(tasks.getSine),
      false,
      'Be sure to remove comments from the final solution'
    );
    getSineSuccess = true;
  });

  it.optional(
    'numberToStringInBase returns a string representation of a number in exponential notation',
    () => {
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
        'Be sure to remove comments from the final solution'
      );
      numberToStringInBaseSuccess = true;
    }
  );

  it.optional(
    'toExponential returns a string representation of a number in exponential notation',
    () => {
      assert.equal(tasks.toExponential(12345, 2), '1.23e+4');
      assert.equal(tasks.toExponential(-12345, 3), '-1.235e+4');
      assert.equal(tasks.toExponential(12345, 1), '1.2e+4');
      assert.equal(
        forbidden.isCommented(tasks.toExponential),
        false,
        'Be sure to remove comments from the final solution'
      );
      toExponentialSuccess = true;
    }
  );

  it.optional(
    'toFixed returns a string representation of a number in fixed-point notation',
    () => {
      assert.equal(tasks.toFixed(12345, 2), 12345.0);
      assert.equal(tasks.toFixed(12.345, 1), 12.3);
      assert.equal(
        forbidden.isCommented(tasks.toFixed),
        false,
        'Be sure to remove comments from the final solution'
      );
      toFixedSuccess = true;
    }
  );

  it.optional(
    'toPrecision returns a string representation of a number in normal notation rounded to precision significant digits',
    () => {
      assert.equal(tasks.toPrecision(12345, 7), 12345.0);
      assert.equal(tasks.toPrecision(12.345, 4), 12.35);
      assert.equal(
        forbidden.isCommented(tasks.toPrecision),
        false,
        'Be sure to remove comments from the final solution'
      );
      toPrecisionSuccess = true;
    }
  );

  it.optional(
    'getNumberValue returns the primitive value of a Number object',
    () => {
      assert.equal(tasks.getNumberValue(Number(5)), 5);
      assert.equal(tasks.getNumberValue(Number(-5)), -5);
      assert.equal(tasks.getNumberValue(Number(0)), 0);
      assert.equal(
        forbidden.isCommented(tasks.getNumberValue),
        false,
        'Be sure to remove comments from the final solution'
      );
      getNumberValueSuccess = true;
    }
  );

  it.optional(
    'isNumber returns a boolean value indicating whether a number or not',
    () => {
      assert.equal(
        tasks.isNumber(Infinity),
        false,
        'value Infinity is not a number'
      );
      assert.equal(tasks.isNumber(NaN), false, 'value NaN is not a number');
      assert.equal(tasks.isNumber(0), true, 'value 0 is a number');
      assert.equal(
        tasks.isNumber('a' / 1),
        false,
        'value "a"/1 is not a number'
      );
      assert.equal(tasks.isNumber('a'), false, 'value "a" is not a number');
      assert.equal(tasks.isNumber(5), true, 'value 5 is a number');
      assert.equal(tasks.isNumber('5'), false, 'value "5" is not a number');
      assert.equal(tasks.isNumber(null), false, 'value null is not a number');
      assert.equal(tasks.isNumber(''), false, 'value "" is not a number');
      assert.equal(tasks.isNumber(true), false, 'value true is not a number');
      assert.equal(tasks.isNumber(10), true, 'value 10 is a number');
      assert.equal(
        forbidden.isCommented(tasks.isNumber),
        false,
        'Be sure to remove comments from the final solution'
      );
      isNumberSuccess = true;
    }
  );

  it.optional(
    'isInteger returns a boolean value indicating whether a number is an integer or not',
    () => {
      assert.equal(tasks.isInteger(5), true, 'value 5 is an integer');
      assert.equal(tasks.isInteger(5.1), false, 'value 5.1 is not an integer');
      assert.equal(tasks.isInteger('5'), false, 'value "5" is not an integer');
      assert.equal(
        tasks.isInteger(3 / 2),
        false,
        'value 3/2 is not an integer'
      );
      assert.equal(
        forbidden.isCommented(tasks.isInteger),
        false,
        'Be sure to remove comments from the final solution'
      );
      isIntegerSuccess = true;
    }
  );

  it.optional('getFloatOnString a floating point number or NaN', () => {
    assert.equal(tasks.getFloatOnString('4.567abcdefgh'), 4.567);
    assert.equal(tasks.getFloatOnString('4.567abcdefgh123'), 4.567);
    assert.equal(tasks.getFloatOnString('abcdefgh'), NaN);
    assert.equal(
      forbidden.isCommented(tasks.getFloatOnString),
      false,
      'Be sure to remove comments from the final solution'
    );
    getFloatOnStringSuccess = true;
  });

  it.optional(
    'getIntegerOnString an integer of the specified base or NaN',
    () => {
      assert.equal(tasks.getIntegerOnString('4.567abcdefgh', 10), 4);
      assert.equal(tasks.getIntegerOnString('abcdefgh', 10), NaN);
      assert.equal(tasks.getIntegerOnString('1.234', 2), 1);
      assert.equal(tasks.getIntegerOnString('10', 8), 8);
      assert.equal(
        forbidden.isCommented(tasks.getIntegerOnString),
        false,
        'Be sure to remove comments from the final solution'
      );
      getIntegerOnStringSuccess = true;
    }
  );

  it.optional(
    'isSafeInteger returns whether a number is a safe integer',
    () => {
      assert.equal(tasks.isSafeInteger(10), true, 'value 10 is a safe integer');
      assert.equal(
        tasks.isSafeInteger(3.5),
        false,
        'value 3.5 is not a safe integer'
      );
      assert.equal(
        tasks.isSafeInteger(2 ** 53),
        false,
        'value 2**53 is not a safe integer'
      );
      assert.equal(
        forbidden.isCommented(tasks.isSafeInteger),
        false,
        'Be sure to remove comments from the final solution'
      );
      isSafeIntegerSuccess = true;
    }
  );

  it.optional(
    'roundToSmallestInteger returns the largest integer less than or equal to a given number',
    () => {
      assert.equal(tasks.roundToSmallestInteger(5.9), 5);
      assert.equal(tasks.roundToSmallestInteger(-5.1), -6);
      assert.equal(
        forbidden.isCommented(tasks.roundToSmallestInteger),
        false,
        'Be sure to remove comments from the final solution'
      );
      roundToSmallestIntegerSuccess = true;
    }
  );

  it.optional(
    'roundToLargestInteger returns the smallest integer greater than or equal to a given number',
    () => {
      assert.equal(tasks.roundToLargestInteger(5.1), 6);
      assert.equal(tasks.roundToLargestInteger(-5.9), -5);
      assert.equal(
        forbidden.isCommented(tasks.roundToLargestInteger),
        false,
        'Be sure to remove comments from the final solution'
      );
      roundToLargestIntegerSuccess = true;
    }
  );

  it.optional(
    'roundToNearestInteger returns the value of a number rounded to the nearest integer',
    () => {
      assert.equal(tasks.roundToNearestInteger(5.5), 6);
      assert.equal(tasks.roundToNearestInteger(5.4), 5);
      assert.equal(tasks.roundToNearestInteger(-5.5), -5);
      assert.equal(
        forbidden.isCommented(tasks.roundToNearestInteger),
        false,
        'Be sure to remove comments from the final solution'
      );
      roundToNearestIntegerSuccess = true;
    }
  );

  it.optional(
    'getIntegerPartNumber returns the integer part of a number by removing any fractional digits',
    () => {
      assert.equal(tasks.getIntegerPartNumber(5.5), 5);
      assert.equal(tasks.getIntegerPartNumber(5.4), 5);
      assert.equal(tasks.getIntegerPartNumber(-5.5), -5);
      assert.equal(
        forbidden.isCommented(tasks.getIntegerPartNumber),
        false,
        'Be sure to remove comments from the final solution'
      );
      getIntegerPartNumberSuccess = true;
    }
  );

  it.optional('getSumOfNumbers returns the sum of numbers', () => {
    assert.equal(tasks.getSumOfNumbers(1, 2, 3), 6);
    assert.equal(tasks.getSumOfNumbers(0.1, 0.2, 0.3), 0.6);
    assert.equal(
      forbidden.isCommented(tasks.getSumOfNumbers),
      false,
      'Be sure to remove comments from the final solution'
    );
  });

  it.optional('getMaxNumber returns the largest number', () => {
    assert.equal(tasks.getMaxNumber(1, 2), 2);
    assert.equal(tasks.getMaxNumber(-5, -6), -5);
    assert.equal(tasks.getMaxNumber(0, 5), 5);
    assert.equal(
      forbidden.isCommented(tasks.getMaxNumber),
      false,
      'Be sure to remove comments from the final solution'
    );
    getMaxNumberSuccess = true;
  });

  it.optional(
    'getRandomInteger returns a random integer in the range from min to max',
    () => {
      for (let i = 0; i < 10; i += 1) {
        const min = Math.floor(Math.random() * 10);
        const max = Math.floor(Math.random() * 10 + min + 1);
        const result = tasks.getRandomInteger(min, max);
        assert.equal(
          Number.isInteger(result),
          true,
          `the ${result} is not an integer`
        );
        assert.equal(
          min <= result && result <= max,
          true,
          `the ${result} is not in the range from ${min} to ${max}`
        );
      }
      assert.equal(
        forbidden.isCommented(tasks.getRandomInteger),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );

  it.optional(
    'getHypotenuse returns the length of the hypotenuse of a right triangle',
    () => {
      assert.equal(tasks.getHypotenuse(3, 4), 5);
      assert.equal(tasks.getHypotenuse(5, 6).toPrecision(14), 7.8102496759067);
      assert.equal(
        tasks.getHypotenuse(Number.MAX_VALUE, 6),
        1.7976931348623157e308
      );
      assert.equal(
        forbidden.isCommented(tasks.getHypotenuse),
        false,
        'Be sure to remove comments from the final solution'
      );
      getHypotenuseSuccess = true;
    }
  );

  it.optional(
    'getCountOfOddNumbers returns count of not even numbers from zero to the resulting number',
    () => {
      assert.equal(tasks.getCountOfOddNumbers(4), 2);
      assert.equal(tasks.getCountOfOddNumbers(5), 3);
      assert.equal(tasks.getCountOfOddNumbers(10), 5);
      assert.equal(tasks.getCountOfOddNumbers(15), 8);
      assert.equal(tasks.getCountOfOddNumbers(-4), 2);
      assert.equal(tasks.getCountOfOddNumbers(-5), 3);
      assert.equal(tasks.getCountOfOddNumbers(-10), 5);
      assert.equal(tasks.getCountOfOddNumbers(-15), 8);
      assert.equal(
        forbidden.isCommented(tasks.getCountOfOddNumbers),
        false,
        'Be sure to remove comments from the final solution'
      );
    }
  );
});

describe('core-js-numbers-tasks optimal implementation', () => {
  it.optional('optimal implementation of getCube', function test() {
    const fnStr = tasks.getCube.toString();
    if (!fnStr.includes('return') || !getCubeSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('**'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators'
    );
  });

  it.optional('optimal implementation of getSine', function test() {
    const fnStr = tasks.getSine.toString();
    if (!fnStr.includes('return') || !getSineSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('Math.sin'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
    );
  });

  it.optional(
    'optimal implementation of numberToStringInBase',
    function test() {
      const fnStr = tasks.numberToStringInBase.toString();
      if (!fnStr.includes('return') || !numberToStringInBaseSuccess) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('.toString'),
        true,
        'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
      );
    }
  );

  it.optional('optimal implementation of toExponential', function test() {
    const fnStr = tasks.toExponential.toString();
    if (!fnStr.includes('return') || !toExponentialSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.toExponential'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of toFixed', function test() {
    const fnStr = tasks.toFixed.toString();
    if (!fnStr.includes('return') || !toFixedSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.toFixed'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of toPrecision', function test() {
    const fnStr = tasks.toPrecision.toString();
    if (!fnStr.includes('return') || !toPrecisionSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.toPrecision'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of getNumberValue', function test() {
    const fnStr = tasks.getNumberValue.toString();
    if (!fnStr.includes('return') || !getNumberValueSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.valueOf'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of isNumber', function test() {
    const fnStr = tasks.isNumber.toString();
    if (!fnStr.includes('return') || !isNumberSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.isFinite'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of isInteger', function test() {
    const fnStr = tasks.isInteger.toString();
    if (!fnStr.includes('return') || !isIntegerSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.isInteger'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of getFloatOnString', function test() {
    const fnStr = tasks.getFloatOnString.toString();
    if (!fnStr.includes('return') || !getFloatOnStringSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.parseFloat'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of getIntegerOnString', function test() {
    const fnStr = tasks.getIntegerOnString.toString();
    if (!fnStr.includes('return') || !getIntegerOnStringSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.parseInt'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional('optimal implementation of isSafeInteger', function test() {
    const fnStr = tasks.isSafeInteger.toString();
    if (!fnStr.includes('return') || !isSafeIntegerSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('.isSafeInteger'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
    );
  });

  it.optional(
    'optimal implementation of roundToSmallestInteger',
    function test() {
      const fnStr = tasks.roundToSmallestInteger.toString();
      if (!fnStr.includes('return') || !roundToSmallestIntegerSuccess) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('Math.floor'),
        true,
        'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
      );
    }
  );

  it.optional(
    'optimal implementation of roundToLargestInteger',
    function test() {
      const fnStr = tasks.roundToLargestInteger.toString();
      if (!fnStr.includes('return') || !roundToLargestIntegerSuccess) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('Math.ceil'),
        true,
        'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
      );
    }
  );

  it.optional(
    'optimal implementation of roundToNearestInteger',
    function test() {
      const fnStr = tasks.roundToNearestInteger.toString();
      if (!fnStr.includes('return') || !roundToNearestIntegerSuccess) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('Math.round'),
        true,
        'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
      );
    }
  );

  it.optional(
    'optimal implementation of getIntegerPartNumber',
    function test() {
      const fnStr = tasks.getIntegerPartNumber.toString();
      if (!fnStr.includes('return') || !getIntegerPartNumberSuccess) {
        this.skip();
      }
      assert.equal(
        fnStr.includes('Math.trunc'),
        true,
        'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
      );
    }
  );

  it.optional('optimal implementation of getMaxNumber', function test() {
    const fnStr = tasks.getMaxNumber.toString();
    if (!fnStr.includes('return') || !getMaxNumberSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('Math.max'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
    );
  });

  it.optional('optimal implementation of getHypotenuse', function test() {
    const fnStr = tasks.getHypotenuse.toString();
    if (!fnStr.includes('return') || !getHypotenuseSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('Math.hypot'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math'
    );
  });

  it.optional('optimal implementation of getLastDigit', function test() {
    const fnStr = tasks.getLastDigit.toString();
    if (!fnStr.includes('return') || !getLastDigitSuccess) {
      this.skip();
    }
    assert.equal(
      fnStr.includes('%'),
      true,
      'You need to use a different method or operator, look for the appropriate method or operator in the documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators'
    );
  });
});
