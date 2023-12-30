//define a prototype object for fifa online

class FifaOnlinePlayer {
    constructor(name, team, position, goals) {
        this.name = name;
        this.team = team;
        this.position = position;
        this.goals = goals;
    }

    score() {
        this.goals++;
    }

    clone() {
        return new FifaOnlinePlayer(
            this.name,
            this.team,
            this.position,
            this.goals
        );
    }
}

//create a new fifaOnline player prototype

const prototypePattern = new FifaOnlinePlayer("CR7", "Al Nassr", "FW", 0);

//create multiple instance ò the fifaonline player
const cr7 = prototypePattern.clone();
const m10 = prototypePattern.clone();
m10.name = "Messi";
m10.team = "PSG";

cr7.score();
console.log(`${cr7.name} has recored ${cr7.goals} this season`);
