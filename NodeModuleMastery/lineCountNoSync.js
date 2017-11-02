var fs= require('fs')

//synchronous file read
//var notesText = fs.readFileSync('./notes.md', 'utf-8')
var notesText = fs.readFile(process.argv[2], function (err, data) {

    notesText.split('');
    var lineCount = 0;
    for (var i in notesText) {
      if (notesText[i] == '\n') {
        lineCount++;
      }
    }
    console.log("LineCount: " + lineCount)
});
