function titleCased() {
  const capitalizedTitles = tutorials.map(title => {
    const words = title.split(" ");
    const capitalizedWords = words.map(word => {
      // Capitalize the first letter of each word
      // Hint: You can use the `charAt()` and `toUpperCase()` methods
    });
    // Join the modified words back together
    // Hint: You can use the `join()` method
  });
  return capitalizedTitles;
}



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




