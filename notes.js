
const fs = require('fs')

const addNotes = function (title, body){
    const note = loadNotes()
    note.push({
        title: title,
        body: body
    })
    //console.log(note)
    saveNotes(note)
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
module.exports = {
    addNotes,
    loadNotes
}