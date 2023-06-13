// concat()
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = arr1.concat(arr2)
console.log(arr3) // [1, 2, 3, 4, 5, 6]

// every()
const isEven = (num) => num % 2 == 0
let arr4 = [2, 4, 6]
console.log(arr1.every(isEven)) // false
console.log(arr4.every(isEven)) // true

// filter()
const startsWithM = (word) => word[0] == 'M'
let arr5 = ['Molly', 'Melanie', 'Ann']
let arr6 = arr5.filter(startsWithM)
console.log(arr6) // [ 'Molly', 'Melanie' ]

// flat()
let arr7 = [1, 2, [[['hello']]], [[4, 5]]]
console.log(arr7.flat(2)) // [ 1, 2, [ 'hello' ], 4, 5 ]

// forEach()
arr1.forEach(elem => console.log(elem)) // 1  2  3

// indexOf()
console.log(arr1.indexOf(2)) // 1
console.log(arr1.indexOf(5)) // -1(not found)

// lastIndexOf()
let arr8 = [1, 2, 3, 7, 2, 5, 2, 6]
console.log(arr8.lastIndexOf(2)) // 6

// map()
console.log(arr1.map(num => num ** 2)) // [ 1, 4, 9 ]

// reduce()
console.log(arr1.reduce((x, y) => x * y)) // 6
console.log(arr1.reduce((x, y) => x * y, 5)) // 30

// reverse()
arr1.reverse() // in-place
console.log(arr1) // [ 3, 2, 1 ]

// slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(1, 7)) // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals.slice(1, -1)) // [ 'bison', 'camel', 'duck' ]
console.log(animals.slice()) // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

// some()
console.log(arr1.some(isEven)) // true

// sort()
arr8.sort()
console.log(arr8) // [ 1, 2, 2, 2, 3, 5, 6, 7 ]
console.log(arr8.sort()) // [ 1, 2, 2, 2, 3, 5, 6, 7 ]

// splice()
let removed = animals.splice(2, 0, 'cat')
console.log(animals) // [ 'ant', 'bison', 'cat', 'camel', 'duck', 'elephant' ]
console.log(removed) // []
removed = animals.splice(2, 3, 'another cat')
console.log(animals) // [ 'ant', 'bison', 'another cat', 'elephant' ]
console.log(removed) // [ 'cat', 'camel', 'duck' ]

// entries()
let iterator = animals.entries()
for (const [key, value] of iterator){
    console.log(key, value)
}

// fill()
arr8.fill(6, 2)
console.log(arr8) // [ 1, 2, 6, 6, 6, 6, 6, 6 ]

// find()
console.log(arr8.find(num => num > 5)) // 6
console.log(arr8.find(num => num > 7)) // undefined

// findIndex()
console.log(arr8.findIndex(num => num % 2 == 0)) // 1
console.log(arr8.findIndex(num => num > 7)) // -1

// findLastIndex()
// not available

// includes()
console.log(arr8.includes(6)) // true
console.log(arr8.includes(66)) // false

// join()
console.log(animals.join('*')) // ant*bison*cat*camel*duck*elephant

// with()
//not available
