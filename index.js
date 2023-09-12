onst tutorials = [
  "Javascript Fundamentals",
  "React Hooks",
  "Python Flask",
  "Sql Basics"
];
Define a function called titleCased:
function titleCased() {
  // Implementation goes here
}
Initialize an empty array called capitalizedTitles inside the titleCased function.
function titleCased() {
  const capitalizedTitles = [];
  // Implementation goes here
}
Iterate over each title in the tutorials array using the map() method. Inside the map() callback function, split the title into an array of words using split(" ").
function titleCased() {
  const capitalizedTitles = tutorials.map(title => {
    const words = title.split(" ");
    // Implementation goes here
  });
  // Implementation goes here
}
Iterate over each word in the words array using the map() method. Inside the map() callback function, capitalize the first letter of the word using charAt(0).toUpperCase() + word.slice(1).
function titleCased() {
  const capitalizedTitles = tutorials.map(title => {
    const words = title.split(" ");
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // Implementation goes here
  });
  // Implementation goes here
}
Join the array of words back into a single string using join(" ").
function titleCased() {
  const capitalizedTitles = tutorials.map(title => {
    const words = title.split(" ");
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedTitle = capitalizedWords.join(" ");
    // Implementation goes here
  });
  // Implementation goes here
}
Add the capitalizedTitle to the capitalizedTitles array.
function titleCased() {
  const capitalizedTitles = tutorials.map(title => {
    const words = title.split(" ");
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedTitle = capitalizedWords.join(" ");
    return capitalizedTitle;
  });
  // Implementation goes here

function titleCased() {
  const capitalizedTitles = tutorials.map(title => {
    const words = title.split(" ");
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedTitle = capitalizedWords.join(" ");
    return capitalizedTitle;
  });
  return capitalizedTitles;
}


//Pseudocode, we use the map() method to iterate through each tutorial title. Inside the map() callback function, we split the title into an array of words using split(" "). Then, we use another map() method to iterate through each word and capitalize the first letter using charAt(0).toUpperCase() + word.slice(1). Finally, we join the capitalized words back into a title using join(" ").

//Define an array called tutorials with the given tutorial names.

 //Define a function called titleCased:
   //Initialize an empty array called capitalizedTitles.

   //Iterate over each title in the tutorials array:
     //Split the title into an array of words.

     //Iterate over each word in the array of words:
       //Capitalize the first letter of the word and concatenate it with the rest of the word.

     //Join the array of words back into a single string.

     //Add the capitalized title to the capitalizedTitles array.

   //Return the capitalizedTitles array.

//Call the titleCased function and store the result in a variable called result.

//Print the result variable to the console.


//// Lab: Using map() to Generate a New ArrayLet's put our newly acquired knowledge of map() to use! We just uploaded 10 coding tutorials online, but some of them have inconsistent casing. We want all the titles to be "title case", in other words, the first letter of each word should be capitalized. Create a new array containing the names of the tutorials with proper title case formatting. For example, 'what does the this keyword mean?' should become 'What Does The This Keyword Mean?'.
//our job is to write the following function:

//titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data.
//NOTE: This lab is challenging! You will need to iterate through the tutorials array, modifying the name of each tutorial. To do this, you will also need to access and modify each individual word.

////Some questions to consider:

//How can we "iterate" through individual words in a string?
//Can we execute an iteration inside an iteration? How?
//How can we capitalize just the first letter in a word?
//A couple of hints:

//Break the task into smaller chunks: using the console or a REPL, start by figuring out how to modify one individual element in the tutorials array. Once you've got that working, then figure out how to update the array itself.
//Use Google!!
//Remember the workflow:

//Install the dependencies using npm install.
/////Run the tests using npm test.
//Read the errors; vocalize what they're asking you to do. //Pseudocode
//Write code; repeat steps 2 and 3 often until a test passes.
//Repeat as needed for the remaining tests.