var fs = require('fs');


function hasNumber(str) {
    return /\d/.test(str);
}

function stringGenerator(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ234579';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if (!hasNumber(result)) {
        result = 1 + result;
        if (result.length > 7) {
            result = result.substr(0, 7);
        }
    } else {
        //below code is to replace all numbers with Z in a string
        result = result.replace(/\d/g, "Z");
        //and then put a random number at 1st position
        result = Math.floor(Math.random() * 9) + 1 + result;
    }
    return result.substr(0, 7)+",";
}

for(var i=0;i<150000;i++){
    var output = stringGenerator(7);
    fs.appendFile('file.csv', output, function (err) {
        if (err) throw err;
    });
}