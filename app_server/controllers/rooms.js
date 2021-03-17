var fs = require('fs');

var room = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));
/* GET rooms view */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', { title: pageTitle , room});
};
module.exports = {
    rooms
};