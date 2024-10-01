const http = require("http");

const fs = require("fs").promises;

function requestListiner(req, res) {

const urlarray = req.url.split('/');

console.log(urlarray);

switch ( urlarray[1] ) {
    case "item":
        loadReturn('public/item.html', 'text/html', res);
        break;

    case "client":
        loadReturn('public/client.js', 'text/html', res);
        break;

     case "data":
        loadReturn('data.json', 'text/html', res);
        break;

     case "list":
        loadReturn('public/list.html', 'text/html', res);
        break;
}

}