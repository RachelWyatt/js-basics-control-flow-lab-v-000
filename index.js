// Write your code in this file!
function scuberGreetingForFeet(someValue) {
let result
  if (someValue <= 400){
    result = "This one is on me!"
  } else if (someValue >2500) {
    result = "No can do."
  } else if (someValue >= 2000) {
    result = "I will gladly take your thirty bucks."
  } 
  return result
}

function ternaryCheckCity(value) {
  let result;
  switch (value) {
    case value = "NYC":
        result = "Ok, sounds good."
        break;
    case value != "NYC":
        result = "No go."
        break;
    default:
        // Statements
        break;
  }
  return result
}