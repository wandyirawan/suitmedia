console.log('start program');

let LeagueTable = class {
  constructor(teamList){
    this.core  = teamList.map(team =>{
      let key = team
      let temp = {'team': key, 'totalScore':0}
      return temp
    });
  }

  recordGame (team1,team2,score)  {
    var foundIndex1 = this.core.findIndex(x => x.team == team1);
    var foundIndex2 = this.core.findIndex(x => x.team == team2);
    var score1 = parseInt(score.split(':')[0]);
    var score2 = parseInt(score.split(':')[1])
    this.core[foundIndex1].totalScore += score1
    this.core[foundIndex2].totalScore += score2
    //this.core[team2] = score.split(':')[1];
  }

  all() {
    console.log(this.core)
  }

  getRank(rank) {

    let temp = this.core.sort((a,b) => b.totalScore - a.totalScore)
      
    console.log(temp[rank].team);
  }
}

const table = new LeagueTable(['Liverpool', 'Chelsea', 'Arsenal']);
table.recordGame('Arsenal','Liverpool','2:1')
table.recordGame('Arsenal', 'Chelsea', '1:1');
table.recordGame('Chelsea', 'Arsenal', '0:3');
table.recordGame('Chelsea', 'Liverpool', '3:2');
table.recordGame('Liverpool', 'Arsenal', '2:2');
table.recordGame('Liverpool', 'Chelsea', '0:0');
table.all();
table.getRank(2);
