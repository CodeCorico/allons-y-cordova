'use strict';

var path = require('path'),
    fs = require('fs-extra');

fs.ensureDirSync(path.resolve(__dirname, '../../../apps'));

fs.copySync(path.resolve(__dirname, 'gitignore'), path.resolve(__dirname, '../../../apps/.gitignore'));
