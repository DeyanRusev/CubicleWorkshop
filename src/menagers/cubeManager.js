const uniqid = require('uniqid');
// const db = require('../db.json');

const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {

    const newCube = {
        id: uniqid(),
        ...cubeData,
    }
    cubes.push(newCube);



    return newCube;
}