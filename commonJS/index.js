const m = require('./module1.js')

console.log(m.a)
m.a++
console.log(m.a)
console.log(m.getA())
m.addOne()
console.log(m.getA())

