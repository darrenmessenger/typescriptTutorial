"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path = './data/data.json'; // Path to your JSON file
function replaceKeys(obj) {
    const result = {};
    Object.keys(obj).forEach(key => {
        const newKey = key === 'Foo' ? 'Bar' : key;
        if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result[newKey] = replaceKeys(obj[key]); // Recurse for nested objects
        }
        else {
            result[newKey] = obj[key];
        }
    });
    return result;
}
fs_1.default.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const jsonData = JSON.parse(data);
    const modifiedData = replaceKeys(jsonData);
    fs_1.default.writeFile(path, JSON.stringify(modifiedData, null, 2), 'utf8', err => {
        if (err) {
            console.error('Error writing the file:', err);
        }
        else {
            console.log('File successfully updated');
        }
    });
});
