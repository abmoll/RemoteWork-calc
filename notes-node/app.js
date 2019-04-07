console.log('starting app.js')

const fs = require('fs')
const notes = require('./notes.js')
const yargs = require('yargs')
const argv = yargs.argv

// var res = notes.add(4,5)
// console.log(res);
var command = process.argv[2];
console.log('command: ',command)

// fs.appendFileSync('greetings.txt', `hello ${user.username}! You are ${notes.age}`)

if (command === 'add'){
notes.addNote(argv.title, argv.body);
}
else if (command === 'list'){
  console.log('listing all commands')
}
else if (command === 'read'){
  console.log('getting note')
}
else if (command === 'remove'){
  console.log('removing note')
}
else {
  console.log('command not recognized')
}
