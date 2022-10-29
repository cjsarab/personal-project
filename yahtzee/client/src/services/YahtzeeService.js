const baseRollsURL = 'http://localhost:9000/api/rolls';

const YahtzeeService = {

    getRolls() {
      return fetch(baseRollsURL)
      .then(res => res.json());
    },

    addRoll(roll) {
      return fetch(baseRollsURL, {
        method: 'POST',
        body: JSON.stringify({"roll" : roll}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
    },

    // updateRoll(roll) { 

    //   return fetch(baseRollsURL + ObjectID, {
    //     method: 'PUT',
    //     body: JSON.stringify({"roll" : roll}),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => res.json());
    // },
};

export default YahtzeeService;