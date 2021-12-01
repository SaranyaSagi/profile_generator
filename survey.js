const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (favMeal) => {
      rl.question("What's your favourite thing to eat for that meal?", (thing) => {
        rl.question('Which sport is your absolute favourite?', (sport) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) => {
            console.log(`Hi! I am ${name} and I love ${activity}.\nMy favorite meal is ${thing} for ${favMeal}.\nI prefer ${sport} over any other sport, and \nmy superpower is ${superPower}.`);
            rl.close();
          });
        });
      });
    });
  });
});


// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
