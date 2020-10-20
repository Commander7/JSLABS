const confidential = ['Donald', 'Kennedy', 'google', 'Marc', 'Cesarion'];
confidential.pop();
console.log('med pop: ' + confidential);

confidential[2] = 'Cat';
console.log('ny namn:' + confidential);

confidential.unshift('Joakim');
console.log('lägger till: ' + confidential);

confidential.sort();
console.log('Alfa order: ' + confidential);

console.log(confidential.indexOf('Joakim'));

confidential.splice(2,1);
console.log('tar bort joakim från listan: ' + confidential);

for(let i = 0; i < confidential.length; i++)
console.log(i, confidential[i]);
