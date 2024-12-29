// Start of Selection
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

const scales = [
  "",
  "Thousand",
  "Million",
  "Billion",
  "Trillion",
  "Quadrillion",
  "Quintillion",
  "Sextillion",
  "Septillion",
  "Octillion",
  "Nonillion",
  "Decillion",
  "Undecillion",
  "Duodecillion",
  "Tredecillion",
  "Quattuordecillion",
  "Quindecillion",
  "Sexdecillion",
  "Septendecillion",
  "Octodecillion",
  "Novemdecillion",
  "Vigintillion",
  "Unvigintillion",
  "Duovigintillion",
  "Trevigintillion",
  "Quattuorvigintillion",
  "Quinvigintillion",
  "Sexvigintillion",
  "Septenvigintillion",
  "Octovigintillion",
  "Nonvigintillion",
  "Trigintillion",
  "Untrigintillion",
  "Duotrigintillion",
  "Trestrigintillion",
  "Quattuortrigintillion",
  "Quintrigintillion",
  "Sextrigintillion",
  "Septentrigintillion",
  "Octotrigintillion",
  "Nontrigintillion",
  "Centillion",
  "Googol",
  "Googolplex",
  "Skewer's Number",
];

function compileNumber(numStr) {
  if (numStr === "0") {
    return "Zero";
  }

  // Remove leading zeros
  numStr = numStr.replace(/^0+/, "");
  if (numStr.length === 0) {
    return "Zero";
  }

  const number = numStr;
  const numLength = number.length;
  const numGroups = Math.ceil(numLength / 3);
  const groups = [];

  for (let i = 0; i < numGroups; i++) {
    const start = numLength - (i + 1) * 3;
    const end = numLength - i * 3;
    const group = number.slice(Math.max(start, 0), end);
    groups.push(parseInt(group, 10));
  }

  let words = [];

  for (let i = 0; i < groups.length; i++) {
    const groupNum = groups[i];
    if (groupNum === 0) continue;
    const groupWords = compileHundred(groupNum);
    const scale = scales[i];
    words.unshift(groupWords + (scale ? " " + scale : ""));
  }

  return words.join(" ").trim();
}

function compileHundred(num) {
  let word = "";
  if (num > 99) {
    word += ones[Math.floor(num / 100)] + " Hundred ";
    num = num % 100;
  }
  word += compileTeen(num);
  return word.trim();
}

function compileTeen(num) {
  if (num < 10) {
    return ones[num];
  } else if (num >= 10 && num < 20) {
    return tens[num - 10];
  } else {
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return teens[ten] + (one ? " " + ones[one] : "");
  }
}

function Compiler() {
  const [number, setNumber] = useState("143");

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only digits
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  return (
    <div className="laptop:p-16 mobile:p-3 place-content-center place-items-center flex flex-col flex-1">
      <h1 className="laptop:text-5xl mobile:text-sm text-white text-center mobile:mt-6 laptop:mt-0 mobile:p-2 laptop:p-10">
        <code>
          Input any positive number you know. I will convert it into text format
        </code>
      </h1>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        className="laptop:text-3xl mobile:text-xl mt-2 laptop:h-20 mobile:h-7 text-center w-11/12 p-6 rounded-xl bg-pink-600/20 text-white"
        placeholder="Input any number you know"
      />
      <h1 className="laptop:text-6xl select-all mobile:text-xl mt-14 leading-relaxed text-pink-300 text-center">
        {compileNumber(number)}
      </h1>
    </div>
  );
}

export default Compiler;
