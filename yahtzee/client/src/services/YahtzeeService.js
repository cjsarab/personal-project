const baseRollsURL = 'http://localhost:9000/api/scores/';

const YahtzeeService = {

    getRolls() {
      return fetch(baseRollsURL)
      .then(res => res.json());
    }

};

export default YahtzeeService;