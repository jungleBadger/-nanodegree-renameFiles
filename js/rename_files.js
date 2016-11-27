/**
 * Created by danielabrao on 11/26/16.
 */
(function () {
    "use strict";

    var properties = {
        "fs": require("fs"),
        "fsPath": require("path"),
        "path": "",
        "blackList": ""
    };

    var methods = {
        "init": function (path, blackList) {
            methods.setPath(path).registerBlackList(blackList).listFiles();
        },
        "setPath": function (path) {
            properties.path = path || "./images/";
            return this;
        },
        "registerBlackList": function (blackList) {
            properties.blackList = blackList || [];
            return this;
        },
        "getComposedPath": function (fileName) {
            return [properties.path, fileName].join("");
        },
        "listFiles": function () {
            properties.fs.readdir(properties.path, function (err, files) {
                if (!err) {
                    files.forEach(function (file) {
                        methods.renameFile(file);
                    });
                } else {
                    console.log(err);
                }
            });
        },
        "renameFile": function (fileName) {
            return properties.fs.rename(methods.getComposedPath(fileName), methods.getComposedPath(methods.processString(fileName, properties.blackList)));
        },
        "processString": function (string, dictionary) {
            var newString = [];
            for (var i = 0; i < string.length; i += 1) {
                var control = true;
                for (var j = 0; j < dictionary.length; j += 1) {
                    if (string[i] == dictionary[j]) {
                        control = false;
                    }
                }
                if (control) {
                    newString.push(string[i]);
                }
            }

            return newString.join("");
        }
    };


    module.exports = methods.init;

}());