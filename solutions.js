var people = {
  "joe" : {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: "sue",
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue" : {
    first_name : "Sue",
    last_name : "Summers",
    preferences : {
      meal : "fish",
      favorite_genres : ["funk", "blues"],
    },
    sitting_next_to: "joe",
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
};

// EXAMPLE:
// What is Joe's last name?
console.log(people.joe.last_name);
console.log("-------");

// Now you do it!

// What are the last names of all the people?
// HINT: Iterate through the object
for (var key in people){
	console.log(people[key].last_name);
}
console.log("-------");


// What is the first genre that each person listed?
// HINT: Iterate through the object and console.log each person's first genre choice
for (var key in people){
	console.log(people[key].preferences.favorite_genres[0]);
}
console.log("-------");


// What is the last name of the person sitting next to joe?
// HINT: Start by finding who joe is sitting next to, then find that person in the object
console.log(people[people.joe.sitting_next_to].last_name);
console.log("-------");

// What meal is sue going to eat?
console.log(people.sue.preferences.meal);
console.log("-------");

// What was the date of the first correspondence with joe?
console.log(people.joe.correspondence[0].date);
console.log("-------");

// What was the description of the last correspondence with sue?
console.log(people.sue.correspondence[1].description);
console.log("-------");
