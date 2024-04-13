<div>
<img src="https://github.com/koji/ichigyou/assets/474225/41f6b766-ce0f-432a-9d0e-49e459a1b1be" width="500" />
</div>

# ichogyou (1 行)

`ichigyou` is a list of typescript one liners

### object property check

if an object has a key, the function returns true.

```ts
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
console.log(isEmptyString('')) // true
console.log(isEmptyString('hello')) // false
```

### count words

this function returns how many words the text has.

```ts
console.log(countWords('This is a my pen.')) // output 5
```

### find max value number

this function returns the maximum value from an array of numbers.

```ts
const testArr = [10, 12, -100, 99, 80]
console.log(findMax(testArr)) // output 99
```

### sort numbers

this function sorts numbers in an array of numbers.

```ts
const testArr = [10, 12, -100, 99, 80]
console.log(sortNumAsc(testArr)) // output [-100, 10, 12, 80, 99]
```

### generate random number

this function generates a random number that is in between min and max.

```ts
console.log(randomNum(0, 100)) // output 42
```

### remove duplicated elements in an array

this function removes duplicated elements in an array.

```ts
const numTest = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 0, 0]
const strTest = ['a', 'b', 'b', 'a', 'c', 'd', 'd', 'e', 'e']
console.log(removeDuplicated(numTest)) // output [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(removeDuplicated(strTest)) // output  ["a", "b", "c", "d", "e"]
```

### reverse string

this function reverses a string.

```ts
console.log(reverseString('javascript')) // output "tpircsavaj"
```

### numeric check for string

this function checks string is numeric or not.

```ts
console.log(isNumeric('2')) // output true
console.log(isNumeric('typescript')) // output false
```
