const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./Readme');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Install instructions?'
    },
    {
        type: 'input',
        name: 'use',
        message: 'use?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'contributors?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'for questions (email)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'git hub: (github)?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
]

 function questions1(){
    return inquirer.prompt(questions)
        .then((answers)=>{
        const mark = MarkDown.generateReadme(answers)
            fs.writeFile('README.md', mark,function(err){
                if(err){
                    console.log('could not save file');
                    }else{
                        console.log("README created")
                    }
            })
        
    })
    .catch((error)=>{
        console.log(error)
    })
}

questions1()