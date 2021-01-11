var alphabet = new Array(30).fill(1).map((_, i) => String.fromCharCode(65 + i));
var i = 0;

showLetter();

function showLetter() {
    if (i == 29) {
        return;
    }
    console.log(alphabet[i]);
    if (isVowel(alphabet[i])) {
        myTimeut = setTimeout(showLetter, 2000);
    } else {
        myTimeut = setTimeout(showLetter, 500);
    }
    i++;
}

function isVowel(char) {
    if (char.length == 1) {
        var vowels = new Array('A', 'E', 'I', 'O', 'U');
        var isVowel = false;

        for (e in vowels) {
            if (vowels[e] == char) {
                isVowel = true;
            }
        }

        return isVowel;
    }
}