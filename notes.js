const fs = require('fs')
const chalk = require('chalk');

const addNotes =  (title, body) => {
    const notes = loadNotes()

    duplicateNotes = notes.filter((note) => note.title === title)

    if( duplicateNotes == 0){
        notes.push({
            title: title,
            body: body
        }) 

        saveNotes(notes)         
        console.log(chalk.green.inverse("Note has been added"))
    } else {
        console.log(chalk.red.inverse("Title already exist"))
    }
        
}

const loadNotes = () => {
    try{
        const data = fs.readFileSync('notes.json');
        const dataJson = data.toString();
        return JSON.parse(dataJson);
    } catch(e){
        return []
    }
}

const saveNotes = (data) => {
    const jsonData = JSON.stringify(data);
    //console.log(jsonData)
    fs.writeFileSync('notes.json', jsonData)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filtered = notes.filter( (note) => note.title !== title )

    if(notes.length > filtered.length){        
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(filtered)
    }else {
        console.log(chalk.red.inverse('Note not found'))
    }
}
module.exports = {
    addNotes,
    removeNote
}