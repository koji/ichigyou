<div align="center">
  <img src="https://github.com/koji/ichigyou/assets/474225/41f6b766-ce0f-432a-9d0e-49e459a1b1be" width="500" />
  
  <h1>ichigyou (一行 いちぎょう)</h1>
  
  <p><strong>Elegant one-liner utility functions for TypeScript/JavaScript</strong></p>
  
  <p>
    <a href="https://www.npmjs.com/package/ichigyou"><img src="https://img.shields.io/npm/v/ichigyou.svg" alt="npm version" /></a>
    <a href="https://github.com/koji/ichigyou/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/ichigyou.svg" alt="license" /></a>
    <a href="https://koji.github.io/ichigyou/index.html"><img src="https://img.shields.io/badge/docs-TSDoc-blue.svg" alt="documentation" /></a>
  </p>
</div>

---

## ✨ Why ichigyou?

**ichigyou** (一行 = "one line" in Japanese) is a carefully curated collection of **54+ concise, battle-tested utility functions** written as elegant TypeScript one-liners. Stop reinventing the wheel—use functions that are:

- ⚡ **Zero dependencies** - Lightweight and tree-shakeable
- 🎯 **Type-safe** - Full TypeScript support with comprehensive TSDoc
- 🧪 **Tested** - Each function is thoroughly tested
- 📦 **Modular** - Import only what you need
- 🚀 **Production-ready** - Used in real-world applications

## 📚 Function Categories

| Category | Functions | Examples |
|----------|-----------|----------|
| **String** | 18 functions | `isValidEmail`, `toTitleCase`, `isPalindrome`, `countWords` |
| **Array** | 13 functions | `removeDuplicated`, `intersection`, `minMax`, `isSubset` |
| **Number** | 23 functions | `isPrime`, `fibonacci`, `gcd`, `median`, `factorial` |
| **Object** | Utilities | Deep merge, flatten, and more |
| **Other** | Helpers | Date, validation, and misc utilities |

## 🚀 Quick Start

### Installation

```bash
# npm
npm i ichigyou

# yarn
yarn add ichigyou

# pnpm
pnpm i ichigyou

# bun
bun install ichigyou
```

### Usage Examples

```typescript
import { 
  isValidEmail, 
  removeDuplicated, 
  isPrime,
  fibonacci 
} from 'ichigyou'

// String utilities
isValidEmail('user@example.com') // true
toTitleCase('hello world') // 'Hello World'

// Array utilities
removeDuplicated([1, 2, 2, 3, 3, 4]) // [1, 2, 3, 4]
intersection([1, 2, 3], [2, 3, 4]) // [2, 3]

// Number utilities
isPrime(17) // true
fibonacciMemo(10) // 55
gcd(48, 18) // 6
median([1, 2, 3, 4, 5]) // 3
```

## 🎯 Popular Functions

### String Operations
```typescript
isValidEmail(email: string): boolean
isValidURL(url: string): boolean
toTitleCase(str: string): string
isPalindrome(str: string): boolean
removeVowels(str: string): string
isAnagram(str1: string, str2: string): boolean
```

### Array Manipulation
```typescript
removeDuplicated<T>(arr: T[]): T[]
intersection<T>(arr1: T[], arr2: T[]): T[] | null
minMax(arr: number[]): { min: number, max: number }
hasUniqueValues<T>(arr: T[]): boolean
isSubset<T>(arr1: T[], arr2: T[]): boolean
```

### Mathematical Functions
```typescript
isPrime(num: number): boolean
fibonacciMemo(n: number): number
gcd(num1: number, num2: number): number
lcm(num1: number, num2: number): number
factorial(num: number): number
median(arr: number[]): number
standardDeviation(arr: number[]): number
```

## 📖 Documentation

Full API documentation with detailed examples is available at:
👉 **[https://koji.github.io/ichigyou/index.html](https://koji.github.io/ichigyou/index.html)**

## 🤝 Contributing

Contributions are welcome! If you have a useful one-liner function to add:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-function`)
3. Add your function with tests
4. Commit your changes (`git commit -m 'Add amazing function'`)
5. Push to the branch (`git push origin feature/amazing-function`)
6. Open a Pull Request

## 📝 License

MIT © [Koji Kanao](https://github.com/koji)

## ⭐ Show Your Support

If **ichigyou** saved you time and keystrokes, give it a star! ⭐

---

### Sample
