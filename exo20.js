const removeDoublons = (str) => {
    return str.spit("").filter((caractere, _, arr) => arr.indexOf(caractere) === arr.lastIndexOf(caractere)).join("");
}
console.log(removeDoublons("abacddbec")); // "e"
// "e" est le seul caractere qui n'a pas de doublon