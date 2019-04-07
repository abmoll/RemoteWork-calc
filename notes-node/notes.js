console.log('starting notes.js')

const fs = require('fs');

// module.exports.add = (a,b) => {
//   return a+b;
// }
var addNote = (title, body) => {
  //console.log('adding note', title, body);
  var notes = []
  var note = {
    title,
    body
  }

  var notesString = fs.readFileSync('notes-data.json')
  notes = JSON.parse(notesString)

  notes.push(note)
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var getAll = () => {
  console.log('getting all notes');
};

var getNote = function(title) {
  console.log('getting note', title);
}

var removeNote = title => {
  console.log('removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
