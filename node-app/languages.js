const express = require('express');
var cors = require('cors')
const { uniqueNamesGenerator, languages } = require('unique-names-generator');
const app = express();// Get maximum character from ENVs else return 5 character

app.use(cors());

// app.use('/app', express.static(__dirname + '/ui/dist'));

const MAX_LANGUAGES_CHARACTERS = process.env.MAX_LANGUAGES_CHARACTERS || 1;
const config = {
    dictionaries: [languages]
}// Get the character name array

const getLanguagesCharacters = () => {
    const characterNames = [];for (let i = 1; i <= MAX_LANGUAGES_CHARACTERS; i += 1) {
        characterNames.push(uniqueNamesGenerator(config));
    }
    return characterNames;
};

app.get('/random_languages', (req, res) => {
    res.json(getLanguagesCharacters());
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
