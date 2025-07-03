import { Matcher } from 'picomatch';
import picomatch from 'picomatch/posix.js';
// picomatch.isMatch()
// console.log('🚀 ~ isMatch:', isMatch)


/**
 * Checks if a given string matches the specified pattern(s).
 * Blacklist patterns take precedence over whitelist patterns.
 *
 * @param value - The string to be matched.
 * @param pattern - A single pattern string or an array of pattern strings.
 * @returns Returns `true` if the string matches any of the whitelist patterns and does not match any blacklist patterns, otherwise if match any blacklist patterns returns `false`.
 *
 * @example
 * // Returns true
 * globMatch("example.txt", "*.txt");
 *
 * @example
 * // Returns false
 * globMatch("example.txt", ["*.md", "!example.txt"]);
 */
export function globMatch(value: string, pattern: string|string[]) {
  let result: boolean|undefined
  if (typeof pattern === 'string') {pattern = [pattern]}
  if (!Array.isArray(pattern)) {result = false}

  if (result === undefined) {
    const {blacklist, whitelist} = generateMatchers(pattern)

    if (blacklist.length > 0) {
      const isBlacklisted = blacklist.some(p => p(value));
      if (isBlacklisted) {
        result = false;
      }
    }

    if (result === undefined && whitelist.length > 0) {
      const isWhitelisted = whitelist.some(p => p(value));
      if (isWhitelisted) {
        result = true;
      }
    }
  }
  return result;
}

/**
 * Generates matcher objects by separating blacklist and whitelist patterns.
 *
 * @param patterns - An array of pattern strings, where patterns starting with `!` are considered blacklist patterns.
 * @returns An object containing `blacklist` and `whitelist` arrays, each of which is an array of `Matcher` objects.
 * @example
 * const patterns = ['!node_modules', 'src', 'tests', '!build'];
 * const matchers = genMatchers(patterns);
 * console.log(matchers.blacklist); // Output: [Matcher for 'node_modules', Matcher for 'build']
 * console.log(matchers.whitelist); // Output: [Matcher for 'src', Matcher for 'tests']
 */
function generateMatchers(patterns: string[]) {
  const blacklist: Matcher[] = [];
  const whitelist: Matcher[] = [];
  patterns.forEach(p => {
    if (p.startsWith('!')) {
      blacklist.push(picomatch(p.slice(1)));
    } else {
      whitelist.push(picomatch(p));
    }
  });
  return {blacklist, whitelist}
}
