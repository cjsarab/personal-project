use personalyahtzee;
db.dropDatabase();

db.scores.insertMany([
    {
        throw1: {
            [1,2,3,4,5]
        }
    }
]);