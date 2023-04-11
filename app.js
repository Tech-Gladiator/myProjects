//question #1
function createAdder(num) 
{
  return function(x) 
    {
    return x + num;
    };
}

// Example:
const add5 = createAdder(5);
console.log(add5(10));           // Output: 15
console.log(add5(7));            // Output: 12
console.log(add5(2));           // Output: 7

//question #2
function searchArray(arr, value) 
{
  // base case: array is empty or value not found
  if (arr.length === 0) 
    {
    return false;
    }
  
  // check if first element of array is the value we're searching for
  if (arr[0] === value) 
    {
    return true;
    }
  
  // recursive case: search the rest of the array
  return searchArray(arr.slice(1), value);
}

//question #3
function addNewParagraph(text) 
{
  // create a new paragraph element
      const newParagraph = document.createElement("p");
  // set the text content of the new paragraph element
      newParagraph.textContent = text;
  // get the body element of the HTML document
      const body = document.querySelector("body");
  // add the new paragraph element to the bottom of the body element
      body.appendChild(newParagraph);
}
addNewParagraph("Hello am learning JS");

//question #4
function addListItem(text) 
{
  // Get the unordered list element
      const list = document.querySelector('ul');

  // Create a new list item element
      const listItem = document.createElement('li');

  // Set the text content of the new list item
      listItem.textContent = text;

  // Add the new list item to the unordered list
  list.appendChild(listItem);
}
addListItem('Item 1');

//question #5
function changeBackgroundColor(element, color) 
{
    element.style.backgroundColor = color;
}
var myElement = document.getElementById("my-element");
changeBackgroundColor(myElement, "blue");

//question #6
function saveObjectToLocalStorage(key, object) 
{
  localStorage.setItem(key, JSON.stringify(object));
}
const myObject = {name: "bilal", age: 28};
saveObjectToLocalStorage("myKey", myObject);
const storedObject = JSON.parse(localStorage.getItem("myKey"));
console.log(storedObject); // {name: "bilal", age: 28}

//question #7
function getObjectFromLocalStorage(key)
{
  const storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue);
}

//question #8
function saveObjectToLocalStorage(obj) 
{
  // Save each property to localStorage
  for (const key in obj) 
  {
    if (obj.hasOwnProperty(key)) 
       {
        localStorage.setItem(key, obj[key]);
       }
  }

  // Retrieve the object from localStorage
  const newObj = {};
  for (let i = 0; i < localStorage.length; i++) 
  {
    const key = localStorage.key(i);
    newObj[key] = localStorage.getItem(key);
   }

  // Return the new object
  return newObj;
}
const myObject = 
{
  name: "Bilal",
  age: 30,
  city: "karachi"
};

const savedObject = saveObjectToLocalStorage(myObject);
console.log(savedObject); // Output: {name: "Bilal", age: "30", city: "karachi"}











