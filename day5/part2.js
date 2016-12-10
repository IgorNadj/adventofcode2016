var md5 = require('md5');


var input = process.argv[2];
if(!input){
	console.log('usage: node '+process.argv[1]+' input');
	process.exit(1);
}


console.log('hi');
// console.log(md5('abc3231929'));

var out = [];

var i = 0;
var charsFilled = 0;
while(charsFilled < 8){
	var hash = md5(input+i);
	if(hash.substring(0,5) === '00000'){
		var pos = hash.substring(5,6);
		if(pos < 8){			
			if(out[pos] === undefined){
				// not filled yet
				var char = hash.substring(6,7);
				console.log(i, hash, pos, char);
				charsFilled++;
				out[pos] = char;
			}
		}
	}
	i++;
}

console.log(out.join(''));