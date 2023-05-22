const path = require('path');
const express = require('express');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    // app.use(express.static('src/public'));
    app.use(express.urlencoded({extended: false}));
}

module.exports = expressConfig;