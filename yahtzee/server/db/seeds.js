use personalyahtzee;
db.dropDatabase();

db.rolls.insertMany([
    {roll:[1,2,3,4,5]}
])

db.scores.insertMany([
    {score: 100}
])