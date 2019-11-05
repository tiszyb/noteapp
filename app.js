
const yargs = require('yargs');
const notes = require('./notes');

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
    handler (args) {
        notes.addNotes(args.title, args.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder : {
        title: {
            describe:'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(args) {
        notes.removeNote(args.title)
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
    handler(args) {
        console.log('Title : ' + args.title + args.body)
    }
})

yargs.command({
    command : 'read',
    describe : 'read a note',
    builder : {
        title : {
            describe : 'read'
        }
    },
    handler(args) {
        console.log(args.title)
    }
})

yargs.parse()
// console.log(yargs.argv)

// console.log( process.argv)