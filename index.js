const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var dictionary = {
  'c.': '2',
  's.': '5',
  'qcf ': '236',
  'qcb ': '214',
  'Dash ': '66',
  'Dash': '66',
  'Backdash ': '44',
  'Backdash': '44',
};


rl.question('Input the combo in SF notation ', (answer) => {
  var answerSplitted = answer.split(' > ');
  var result = [];
  answerSplitted.forEach(function(move) {
    if ( move.match(/^.*?(?=j.[LMH][PK]|[LMH][PK])/)) {
      var x = move.match(/^.*?(?=j.[LMH][PK]|[LMH][PK])/)
      var y = dictionary[x];
      console.log(x[0])
      move = move.substring(x[0].length);
      console.log("move ", move)
      result.push(y + " " + move);
    }
    else {
      console.log(move)
      result.push(move)
    }
  })
  result.join(' > ')
  console.log(`Your combo in anime notation is as follows: `, result.join(' > '));

  rl.close();
});

//(Chair On) c.LK > c.MP > s.HK > qcf LP > Dash j.MP > s.HK > qcf LP+LK > 5 Actions > Finisher on chair
