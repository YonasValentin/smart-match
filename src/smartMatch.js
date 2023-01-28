"use strict";
exports.__esModule = true;
exports.smartMatch = void 0;
var smartMatch = function (input, searchText) {
    //convert both input and searchText to lowercase for case insensitive
    var lowerInput = input.toLowerCase();
    var lowerSearchText = searchText.toLowerCase();
    // removes all white space and non-alphanumerice characters
    var regexFilter = /[^0-9a-zA-Z]/g;
    var inputWords = lowerInput.replaceAll(regexFilter, " ").split(" ");
    var textRanges = null;
    var totalLettersSkipped = 0;
    for (var i = 0; i < inputWords.length; i++) {
        if (!lowerSearchText)
            break;
        var word = inputWords[i];
        var acc = lowerSearchText.substring(0, word.length);
        var exists = word.includes(acc);
        if (exists) {
            lowerSearchText = lowerSearchText.replace(acc, '');
            textRanges !== null && textRanges !== void 0 ? textRanges : (textRanges = []);
            textRanges.push({
                from: totalLettersSkipped,
                to: totalLettersSkipped + (acc.length - 1)
            });
        }
        totalLettersSkipped += word.length + 1;
    }
    console.log(textRanges);
    return textRanges;
};
exports.smartMatch = smartMatch;
