let checkDatatype = (param) => {
  const iniArray = param instanceof Array;
  let result = "";
  if (param === String(param)) {
    result += "string";
  } else if (param === Number(param)) {
    result += "number";
  } else if (param === Boolean(param)) {
    result += "boolean";
  } else if (param == null) {
    result += "null";
  } else if ((param = iniArray)) {
    result += "array";
  } else if (param == typeof param) {
    result += "fucntion";
  } else if (param == Object(param)) {
    result += "object";
  }
  return result;
};

console.log(checkDatatype("Ruang Guru"));
console.log(checkDatatype(234));
console.log(checkDatatype(true));
console.log(checkDatatype([2, 3, 4]));
console.log(checkDatatype({ bunga: "mawar" }));
console.log(checkDatatype(null));
console.log(checkDatatype(function () {}));
console.log(checkDatatype(() => {}));

exports.checkDatatype = checkDatatype;

// checkDatatype should return string of data type name
//     should return "string" when passed a string
//       ✕ should return "string" when passed "hello" (1 ms)
//       ✕ should return "string" when passed "123" (1 ms)
//       ✕ should return "string" when passed ""
//     should return "number" when passed a number
//       ✕ should return "number" when passed 123
//       ✕ should return "number" when passed 0
//       ✕ should return "number" when passed -123
//       ✕ should return "number" when passed 1.23
//       ✕ should return "number" when passed 0.0 (1 ms)
//     should return "boolean" when passed a boolean
//       ✕ should return "boolean" when passed true (1 ms)
//       ✕ should return "boolean" when passed false (1 ms)
//       ✕ should return "boolean" when passed !true (1 ms)
//       ✕ should return "boolean" when passed !false (1 ms)
//       ✕ should return "boolean" when passed !!true
//       ✕ should return "boolean" when passed !!false
//     should return "null" when passed null
//       ✕ should return "null" when passed null
//     should return "array" when passed an array
//       ✕ should return "array" when passed []
//       ✕ should return "array" when passed [1, 2, 3]
//       ✕ should return "array" when passed ["a", "b", "c"]
//       ✕ should return "array" when passed [true, false, true] (1 ms)
//       ✕ should return "array" when passed [null, null, null]
//       ✕ should return "array" when passed [undefined, undefined, undefined]
//       ✕ should return "array" when passed [1, "a", true, null, undefined]
//     should return "object" when passed an object
//       ✕ should return "object" when passed {}
//       ✕ should return "object" when passed { a: 1 }
//       ✕ should return "object" when passed { a: "a" }
//       ✕ should return "object" when passed { a: true }
//       ✕ should return "object" when passed { a: null } (1 ms)
//       ✕ should return "object" when passed { a: undefined }
//       ✕ should return "object" when passed { a: 1, b: "a", c: true, d: null, e: undefined }
//     should return "function" when passed a function
//       ✕ should return "function" when passed function () {}
//       ✕ should return "function" when passed () => {}
