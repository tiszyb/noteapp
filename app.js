const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
// console.log(notes())

// console.log( chalk.red.inverse('success') )
yargs.command({
    command : 'add',
    describe : 'adding a note',
    builder : {
        title : {
            describe: 'Give your note a title',
            demandOption: true ,
            type: 'string'
        },
        body : {
            describe: 'Create body for your note',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function (args) {
        notes.addNotes(args.title, args.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove a note',
    handler : function () {
        console.log('Removing a new note')
    }
})

yargs.command({
    command : 'list',
    describe : 'list a note',
    builder : {
        title : {
            describe: 'title for listing',
            demandOption: true ,
            type: 'string'
        },
        body : {
            describe: 'body for listing',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function (args) {
        console.log('Title : ' + args.title + args.body)
    }
})

yargs.command({
    command : 'read',
    describe : 'read a note',
    handler : function () {
        console.log('reading a new note')
    }
})

yargs.parse()
// console.log(yargs.argv)

// console.log( process.argv)