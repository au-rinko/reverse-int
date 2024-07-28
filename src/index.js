module.exports = function reverse (n) {
    return n < 0 ? n.toString().substring(1).split("").reverse().join("") : +n.toString().split("").reverse().join("");
}
