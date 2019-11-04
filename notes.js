const fs = require('fs')

const addNotes = function (title, body){
    const notes = loadNotes()
    duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    if( duplicateNotes == 0){
        notes.push({
            title: title,
            body: body
        })        
        saveNotes(notes) 
        console.log("Note has been added")
    } else {
        console.log("Title already exist")
    }
        
}

const loadNotes = function (){
    try{
        const data = fs.readFileSync('notes.json');
        const dataJson = data.toString();
        return JSON.parse(dataJson);
    } catch(e){
        return []
    }
}

const saveNotes = function(data){
    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    fs.writeFileSync('notes.json', jsonData)
}

const removeNote = function(title){
    
}
module.exports = {
    addNotes,
    removeNote
}