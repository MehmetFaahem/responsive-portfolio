import React, { useState } from "react";

const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

const tens = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const teens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

function compileTrillion(num) {
  if (num == 0) {
    return "Zero";
  } else if (num >= 1000000000000) {
    return (
      compileBillion(Math.floor(num / 1000000000000)) +
      " Trillion " +
      compileBillion(num % 1000000000000)
    );
  } else {
    return compileBillion(num);
  }
}

function compileBillion(num) {
  if (num >= 1000000000) {
    return (
      compileMillion(Math.floor(num / 1000000000)) +
      " Billion " +
      compileMillion(num % 1000000000)
    );
  } else {
    return compileMillion(num);
  }
}

function compileMillion(num) {
  if (num >= 1000000) {
    return (
      compileThousends(Math.floor(num / 1000000)) +
      " Million " +
      compileThousends(num % 1000000)
    );
  } else {
    return compileThousends(num);
  }
}

function compileThousends(num) {
  if (num >= 1000) {
    return (
      compileHundred(Math.floor(num / 1000)) +
      " Thousend " +
      compileHundred(num % 1000)
    );
  } else {
    return compileHundred(num);
  }
}

function compileHundred(num) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " Hundred " + compileTeen(num % 100);
  } else {
    return compileTeen(num);
  }
}

function compileTeen(num) {
  if (num < 10) {
    // 1 To 9
    return ones[num];
  } else if (num >= 10 && num < 20) {
    // 10 To 19
    return tens[num - 10];
  } else {
    // 21 To 99
    return teens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function Compiler() {
  const [number, setNumber] = useState(143);

  return (
    <div className="laptop:p-16 mobile:p-3 place-content-center place-items-center flex flex-col flex-1">
      <h1 className="laptop:text-5xl mobile:text-sm text-white text-center mobile:mt-6 laptop:mt-0 mobile:p-2 laptop:p-10">
        <code>
          Input any positive number you know. I will convert it into text format
        </code>
      </h1>
      <input
        type="number"
        value={number}
        min={1}
        max={9999999999999999}
        onChange={(e) => setNumber(e.target.value)}
        className="laptop:text-3xl mobile:text-xl mt-2 laptop:h-20 mobile:h-7 text-center w-11/12 p-6 rounded-xl bg-pink-600/20 text-white"
        placeholder="input any number you know"
      />
      <h1 className="laptop:text-6xl select-all mobile:text-xl mt-14 leading-relaxed text-pink-300 text-center">
        {compileTrillion(number)}
      </h1>
    </div>
  );
}

export default Compiler;
