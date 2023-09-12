const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title => {
    // Split the title into an array of words
    const words = title.split(" ");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a title
    return capitalizedWords.join(" ");
  });
};

console.log(titleCased());



//Pseudocode, we use the map() method to iterate through each tutorial title. Inside the map() callback function, we split the title into an array of words using split(" "). Then, we use another map() method to iterate through each word and capitalize the first letter using charAt(0).toUpperCase() + word.slice(1). Finally, we join the capitalized words back into a title using join(" ").




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