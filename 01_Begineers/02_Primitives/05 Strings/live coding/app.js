let firstName = "Kishan";
let lastName = "Gupta";
let fullName = firstName + lastName;
console.log(fullName);

//1. CONCATENATION
// let fullName2 = firstName + " " + lastName;
// console.log(fullName2)
// let fullName3 = firstName.concat(lastName);
// console.log(fullName3)

//2. APPEND
// firstName += " something else"
// console.log(firstName)

//3. LENGTH
// console.log(firstName.length);

//4. CASES
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

//5. SLICE
//console.log(fullName.slice(1, 3));

//6. SPLIT & JOIN
//Split = split convert string into array
//join = join convert array into string
// let value = fullName.split("")
// console.log(typeof (value)) //string
// console.log(value)

// let arr = ['k', 'i', 's', 'h', 'a', 'n'];
// console.log(typeof (arr)) //object
// console.log(arr.join("")) //kishan

//7. INCLUDES
//it give boolean value , it check the particular value is present in string or not
console.log(fullName.includes("K"));

let arr = ["kishan", "vishal"]

console.log(arr.includes("kishan"))

//8. TRIM
//trim is use to trim space in string , at beginning and ending
let arr1 = [ "kishan", " gupta "];
// console.log(fullName.trim());

console.log(arr1[1].trim())

//backtik ``