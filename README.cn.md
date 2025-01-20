# @isdk/glob

`@isdk/glob` 库提供了一种简单且高效的方法来匹配字符串与glob模式。它支持白名单和黑名单模式，黑名单模式优先级高于白名单模式。

## 安装

你可以通过以下命令安装 `@isdk/glob`:

```bash
npm install @isdk/glob
```

## 使用

### 基本用法

`globMatch` 函数检查给定的字符串是否与指定的模式匹配。

```js
import { globMatch } from '@isdk/glob';

// 单个模式
console.log(globMatch('example.txt', '*.txt')); // true
console.log(globMatch('example.txt', '*.md'));  // false

// 模式数组
console.log(globMatch('example.txt', ['*.txt', '*.md'])); // true
console.log(globMatch('example.txt', ['*.md', '*.js'])); // false

```

### 高级用法

你可以同时使用白名单和黑名单模式。黑名单模式优先于白名单模式。

```js
import { globMatch } from 'glob-match';

// 黑名单模式
console.log(globMatch('example.txt', ['!example.txt'])); // false

// 混合模式
console.log(globMatch('example.txt', ['*.txt', '!example.txt'])); // false
console.log(globMatch('example.txt', ['*.txt', '!example.md']));  // true

```

## API 文档

### globMatch(value: string, pattern: string | string[]): boolean

检查给定的字符串是否与指定的模式匹配。

* 参数：
  * `value` (string): 要匹配的字符串。
  * `pattern` (string | string[]): 单个模式字符串或模式字符串数组。
* 返回值：
  * boolean: 如果字符串与任何白名单模式匹配且不与任何黑名单模式匹配，则返回 `true`，否则返回 `false` 或 `undefined`。

## 贡献

我们欢迎社区的贡献！以下是一些你可以帮助的方式：

* **Bug 报告**：如果你发现了一个 bug，请在 [GitHub Issues 页面](https://github.com/isdk/glob.js/issues) 上打开一个 issue。
* **功能请求**：如果你有一个新功能的创意，请随时打开一个 issue 来讨论它。
* **Pull Requests**：如果你想要贡献代码，请 fork 仓库并提交你的更改。

## 许可证

本项目采用 MIT 许可证。详情见 [LICENSE 文件](./LICENSE-MIT)。
