// I don't have enough skills to continue writing code.
// I will write this in the future...
const { key, token } = require('./config.json');

fetch(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(board => {
            console.log(board.name);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });