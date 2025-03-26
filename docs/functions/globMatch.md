[**@isdk/glob**](../README.md)

***

[@isdk/glob](../globals.md) / globMatch

# Function: globMatch()

> **globMatch**(`value`, `pattern`): `undefined` \| `boolean`

Defined in: [glob-match.ts:23](https://github.com/isdk/glob.js/blob/9ddd9b1ed7b1d604684e5e49dc3b69945e6fdf8c/src/glob-match.ts#L23)

Checks if a given string matches the specified pattern(s).
Blacklist patterns take precedence over whitelist patterns.

## Parameters

### value

`string`

The string to be matched.

### pattern

A single pattern string or an array of pattern strings.

`string` | `string`[]

## Returns

`undefined` \| `boolean`

Returns `true` if the string matches any of the whitelist patterns and does not match any blacklist patterns, otherwise returns `false`.

## Examples

```ts
// Returns true
globMatch("example.txt", "*.txt");
```

```ts
// Returns false
globMatch("example.txt", ["*.md", "!example.txt"]);
```
