// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Project title is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide information about your project: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information about the usage information of your project: '
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide instructions on how to contribute to project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Description on how to test your project: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license associated with your project',
        choices: ['none', 'MIT', 'Apache', 'Mozilla', 'Unilicense', 'GNUv2.0']
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/' + fileName + ".md", data, err => {
            //if error, reject Promise and send error to Promise's catch method
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created! Check the dist folder for your README.'
            });
        });
    });
};

//Gather user input 
const promptUser = () => {
    let inputInfo = [];
    // for (let i = 0; i < questions.length; i++) {
    //     inquirer.prompt(questions[i]);
    // }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Project title is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide information about your project: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide information about the usage information of your project: '
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Provide instructions on how to contribute to project: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Description on how to test your project: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license associated with your project',
            choices: ['none', 'MIT', 'Apache', 'Mozilla', 'Unilicense', 'GNUv3.0']
        },
        {
            type: 'input',
            name: 'features',
            message: 'Enter the list of features in your project: '
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any examples of tests of your project'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Enter the names of anyone else that contributed to your project'
        }

    ]).then(infoInput => {
        inputInfo.push(infoInput);
        console.log(inputInfo);
        return generateMarkdown(inputInfo[0]);
    }).then(readmeFile => {
        return writeToFile(inputInfo[0].title, readmeFile);
    }).then(finishedProj => {
        console.log("File created! Check out the dist folder for your README!");
    }).catch(err => {
        console.log(err);
    })
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser();
}

// Function call to initialize app
init();
