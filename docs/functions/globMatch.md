[**@isdk/glob**](../README.md)

***

[@isdk/glob](../globals.md) / globMatch

# Function: globMatch()

> **globMatch**(`value`, `pattern`): `boolean` \| `undefined`

Defined in: [glob-match.ts:23](https://github.com/isdk/glob.js/blob/5a4634660cdf363ea1108a0b4bc9e13579744c7c/src/glob-match.ts#L23)

Checks if a given string matches the specified pattern(s).
Blacklist patterns take precedence over whitelist patterns.

## Parameters

### value

`string`

The string to be matched.

### pattern

`string` \| `string`[]

A single pattern string or an array of pattern strings.

## Returns

`boolean` \| `undefined`

Returns `true` if the string matches any of the whitelist patterns and does not match any blacklist patterns, otherwise if match any blacklist patterns returns `false`.

## Examples

```ts
// Returns true
globMatch("example.txt", "*.txt");
```

```ts
// Returns false
globMatch("example.txt", ["*.md", "!example.txt"]);
```
