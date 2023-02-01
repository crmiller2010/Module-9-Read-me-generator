class MarkDown {

    static renderLicenseBadge(license){
        const badges = {
            mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
            isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
            gnuplv3: `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            mit: `[MIT](https://choosealicense.com/licenses/mit/)`,
            isc: `[ISC](https://choosealicense.com/licenses/isc/)`,
            gnugplv3: `[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license){
        if (license){
            return `licensed under the ${this.renderLicenseLink(license)} license`
        }else{
            return``
        }
    }

    static generateReadme(answers){
        return `
        
# ${answers.title}

# ${this.renderLicenseBadge(answers.license)}

## table Of Content
- [project description](#Description)
- [Install](#Install)
- [Use](#Use)
- [Contributors](#Contributors)
- [Questions](#Questions)

## Description
${answers.description}
        
## Install
${answers.install}

## Use
${answers.use}

## Contributors
${answers.contribution}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseSection(answers.license)}
    `
    }
}

module.exports = MarkDown
