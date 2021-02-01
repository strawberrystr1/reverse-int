module.exports = function reverse (n) {
    return Math.sign(n) > 0 ? Number(n.toString().split('').reverse().join('')) : Number(n.toString().split('').splice(1).reverse().join(''))
}
