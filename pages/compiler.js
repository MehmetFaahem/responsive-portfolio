import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const tens = [
  "ten",
  "eleventh",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "ninteen",
];

const teens = [
  "",
  "",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
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

export function ApiGenerator() {
  const [field, setField] = useState({
    Parent: "",
    currentKey: "",
    currentValue: "",
    Childs: {
      Data: [{}],
    },
  });
  const [json, setJson] = useState(JSON.stringify(field.Childs, null, 2));
  return (
    <div className="mt-10 flex laptop:flex-row mobile:flex-col justify-between place-items-center">
      <div>
        {/* <section>
          <p className="text-xl text-white font-medium py-3">Parent</p>
          <input
            value={field.Parent}
            onChange={(e) => setField({ ...field, Parent: e.target.value })}
            className="p-4 bg-black/50 rounded-xl text-white"
            placeholder="Parent"
          />
        </section> */}
        <section>
          <p className=" mobile:text-sm laptop:text-left mobile:text-center laptop:text-xl text-white font-medium py-3">
            Keys and Values
          </p>
          <div className="flex laptop:flex-row mobile:flex-col mobile:space-y-3 laptop:space-y-0 laptop:space-x-3">
            <input
              className="p-4 bg-black/50 rounded-xl text-white"
              value={field.currentKey}
              onChange={(e) =>
                setField({ ...field, currentKey: e.target.value })
              }
              placeholder="Key"
            />
            <input
              className="p-4 bg-black/50 rounded-xl text-white"
              value={field.currentValue}
              onChange={(e) =>
                setField({ ...field, currentValue: e.target.value })
              }
              placeholder="Value"
            />
          </div>
        </section>
        <button
          onClick={() => {
            Object.assign(field.Childs.Data[0], {
              [field.currentKey]: field.currentValue,
            });

            setJson(JSON.stringify(field.Childs, null, 2));
            setField({ ...field, currentKey: "", currentValue: "" });
            console.log(field.Childs);
          }}
          className="bg-black p-4 text-sm text-white rounded-xl mt-10"
        >
          Add to API
        </button>
        <button
          onClick={() => {}}
          className="bg-black text-sm p-4 ml-4 text-white rounded-xl mt-10"
        >
          Get Url
        </button>
      </div>
      <div
        style={{
          height: "500px",
          overflowY: "scroll",
        }}
        className="mobile:p-5 laptop:p-10 laptop:w-1/2 mobile:w-full laptop:mt-0 mobile:mt-10 bg-black/50 text-white rounded-2xl"
      >
        <pre>
          <code className="mobile:text-xs laptop:text-3xl">{json}</code>
        </pre>
      </div>
    </div>
  );
}

function Compiler() {
  const [number, setNumber] = useState(0);

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
        min={0}
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
