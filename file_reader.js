const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

let firstName, lastName, age, hobbies;

fs.readFile("./firstname.txt", "utf-8")
  .then(data => {
    firstName = data.trim();
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then(data => {
    lastName = data.trim();
    return fs.readFile("./age.txt", "utf-8");
  })
  .then(data => {
    age = data.trim();
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then(data => {
    const hobbies = ["swimming", "dancing"];

    const finalText = `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0].trim()} and ${hobbies[1].trim()}`;
    console.log(finalText);
  })

  .catch(err => {
    console.error('Error:', err.message);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function textPromisseAsync() {
  try {
    const asyncFirstName = await fs.readFile("./firstname.txt", "utf-8");
    const asyncLastName = await fs.readFile("./lastname.txt", "utf-8");
    const asyncAge = await fs.readFile("./age.txt", "utf-8");
    const asyncHobbiesData = await fs.readFile("./hobbies.txt", "utf-8");
    const hobbiesArray = ['swimming', 'dancing'];

    const finalSentence = `${asyncFirstName.trim()} ${asyncLastName.trim()} is ${asyncAge.trim()} years old and his hobbies are ${hobbiesArray[0].trim()} and ${hobbiesArray[1].trim()}`;

    console.log(finalSentence);

    } catch (err) {
    console.error('Error', err.message);
  }
}

textPromisseAsync();