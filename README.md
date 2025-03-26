# @isdk/glob

[![npm version](https://badge.fury.io/js/@isdk%2Fglob.svg)](https://badge.fury.io/js/@isdk%2Fglob)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

`@isdk/glob` is a library that provides a simple and efficient way to match string against glob patterns. It supports both whitelist and blacklist patterns, with blacklist patterns taking precedence.

## Installation

You can install `@isdk/glob`:

```bash
npm install @isdk/glob
```

## Usage

### Basic Usage

The globMatch function checks if a given string matches the specified pattern(s).

```typescript
import { globMatch } from '@isdk/glob';

// Single pattern
console.log(globMatch('example.txt', '*.txt')); // true
console.log(globMatch('example.txt', '*.md'));  // false

// Array of patterns
console.log(globMatch('example.txt', ['*.txt', '*.md'])); // true
console.log(globMatch('example.txt', ['*.md', '*.js'])); // false
```

### Advanced Usage

You can use both whitelist and blacklist patterns. Blacklist patterns take precedence over whitelist patterns.

```typescript
import { globMatch } from 'glob-match';

// Blacklist pattern
console.log(globMatch('example.txt', ['!example.txt'])); // false

// Mixed patterns
console.log(globMatch('example.txt', ['*.txt', '!example.txt'])); // false
console.log(globMatch('example.txt', ['*.txt', '!example.md']));  // true
```

## API Documentation

### globMatch(value: string, pattern: string | string[]): boolean

Checks if a given string matches the specified pattern(s).

* Parameters:
  * `value` (string): The string to be matched.
  * `pattern` (string | string[]): A single pattern string or an array of pattern strings.
* Returns:
  * `boolean`: Returns `true` if the string matches any of the whitelist patterns and does not match any blacklist patterns, otherwise returns `false` or `undefined`.

Example

```js
import { globMatch } from 'glob-match';

console.log(globMatch('example.txt', '*.txt')); // true
console.log(globMatch('example.txt', ['*.md', '!example.txt'])); // false
```

## Contributing

We welcome contributions from the community! Here are some ways you can help:

* **Bug Reports**: If you find a bug, please open an issue on the [GitHub Issues page](https://github.com/isdk/glob.js/issues).
* **Feature Requests**: If you have an idea for a new feature, feel free to open an issue to discuss it.
* **Pull Requests**: If you want to contribute code, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE-MIT) file for details.
