let friends = ["Sarah", "Eden", "Lauren", "Rachel", "Sara"];

for (var i = 0; i < friends.length; i++) {
    for (var j = 99; j > 1; j--) {
        if (j > 2) {
            console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file.`);
        }
        if (j == 2) {
            console.log(`2 lines of code in the file, 2 lines of code; ${friends[i]} strikes one out, clears it all out, 1 line of code in the file.`);
        }
    } console.log(`1 line of code in the file, 1 line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file!`);
}
