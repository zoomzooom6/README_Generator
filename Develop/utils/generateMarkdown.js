// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeURL = 'https://img.shields.io/badge/licence-' + license + '-blue'
  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    let licenseURL = 'https://choosealicense.com/licenses/mit/';
    return licenseURL;
  } else if(license === 'Apace') {
    let licenseURL = 'https://choosealicense.com/licenses/apache-2.0/';
    return licenseURL;
  } else if(license === 'Mozilla') {
    let licenseURL = 'https://choosealicense.com/licenses/mpl-2.0/';
    return licenseURL;
  } else if(license === 'Unilicense') {
    let licenseURL = 'https://choosealicense.com/licenses/unlicense/';
    return licenseURL;
  } else if(license === 'GNUv3.0') {
    let licenseURL = 'https://choosealicense.com/licenses/gpl-3.0/';
    return licenseURL;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseURL = renderLicenseLink(license);
  let badge = renderLicenseBadge(license);
  let badgeURL = 'license-' + license + '-blue'
  if (license) {
    return `![${badgeURL}](${badge})
    This project was made using ${license}, you can find more information about this license <a href="${licenseURL}" target="_blank">here</a>`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license);
  return `# ${data.title}

  ## About the project
  ${data.about}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Tests](#tests)
  * [Contribute](#how-to-contribute)
  * [Questions and Contact](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributors}

  ## License
  ${license}

  ## Features
  ${data.features}

  ## Tests
  ${data.tests}

  ## How to contribute
  ${data.contribute}

  ## Questions
  Contact me at <a href='mailto:${data.email}'>${data.email}</a>
  View my other projects on [Github](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;