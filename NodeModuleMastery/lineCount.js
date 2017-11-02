//process.argv[2] = filename

//node lineCount.js notes.md

var fs= require('fs')

//synchronous file read
//var notesText = fs.readFileSync('./notes.md', 'utf-8')
var notesText = fs.readFileSync(process.argv[2], 'utf-8')

notesText.split('');
var lineCount = 0;
for (var i in notesText) {
  if (notesText[i] == '\n') {
    lineCount++;
  }
}

console.log("LineCount: " + lineCount)
