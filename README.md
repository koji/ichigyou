# typescript one liners

### object property check

if an object has a key, the function returns true.

```ts
const hasProperty = <T extends keyof any>(obj: Record<string, unknown>, prop: T): boolean => prop in obj

const testObj= { name: "Bob", age: 100 }
const key = "age"
if (hasProperty(testObj, key)) {
  console.log('exists') // returns this
} else {
  console.log(not exist)
}
```

### empty string check

if a string is empty, the function returns true

```ts
const isEmptyString = (str: string): boolean => str.trim().length === 0

console.log(isEmptyString('')) // true
console.log(isEmptyString('hello')) // false
```

### count words

this function returns how many words the text has.

```ts
const countWords = (str: string): number => str.trim().split(/\s+/).length

console.log(countWords('This is a my pen.')) // output 5
```

### find max value number

this function returns the maximum value from an array of numbers.

```ts
const findMax = (arr: number[]): number => Math.max(...arr)

const testArr = [10, 12, -100, 99, 80]
console.log(findMax(testArr)) // output 99
```

### sort numbers

this function sorts numbers in an array of numbers.

```ts
const sortNumAsc = (arr: number[]) => arr.slice().sort((a, b) => a - b)

const testArr = [10, 12, -100, 99, 80]
console.log(sortNumAsc(testArr)) // output [-100, 10, 12, 80, 99]
```

### generate random number

this function generates a random number that is in between min and max.

```ts
const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum(0, 100)) // output 42
```

### remove duplicated elements in an array

this function removes duplicated elements in an array.

```ts
const removeDuplicated = <T extends number | string>(arr: T[]): T[] => [
  ...new Set(arr),
]

const numTest = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 0, 0]
const strTest = ['a', 'b', 'b', 'a', 'c', 'd', 'd', 'e', 'e']
console.log(removeDuplicated(numTest)) // output [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(removeDuplicated(strTest)) // output  ["a", "b", "c", "d", "e"]
```

### reverse string

this function reverses a string.

```ts
const reverseString = (str: string) => str.split('').reverse().join('')

console.log(reverseString('javascript')) // output "tpircsavaj"
```

### move to top

```ts
const moveToTop = () => window.scrollTo(0, 0)
```
