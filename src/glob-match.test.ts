import { globMatch } from './glob-match';


describe('globMatch', () => {
  it('should return true for a single matching pattern', () => {
    expect(globMatch('example.txt', '*.txt')).toBe(true);
  });

  it('should return false for a single non-matching pattern', () => {
    expect(globMatch('example.txt', '*.md')).toBeFalsy();
  });

  it('should return true for a matching pattern in an array', () => {
    expect(globMatch('example.txt', ['*.txt', '*.md'])).toBe(true);
  });

  it('should return false for no matching patterns in an array', () => {
    expect(globMatch('example.txt', ['*.md', '*.js'])).toBeFalsy();
  });

  it('should return false if the value matches a blacklist pattern', () => {
    expect(globMatch('example.txt', ['!example.txt'])).toBe(false);
  });

  it('should return false if the value matches a blacklist pattern in an array', () => {
    expect(globMatch('example.txt', ['*.txt', '!example.txt'])).toBe(false);
  });

  it('should return true if the value matches a whitelist pattern and no blacklist patterns', () => {
    expect(globMatch('example.txt', ['*.txt', '!example.md'])).toBe(true);
  });

  it('should return false if the value matches a blacklist pattern and a whitelist pattern', () => {
    expect(globMatch('example.txt', ['*.txt', '!example.txt'])).toBe(false);
  });

  it('should return true if the value matches multiple whitelist patterns', () => {
    expect(globMatch('example.txt', ['*.txt', '*.md'])).toBe(true);
  });

  it('should return false if the value matches multiple blacklist patterns', () => {
    expect(globMatch('example.txt', ['!example.txt', '!example.md'])).toBe(false);
  });

  it('should return false if the pattern is not an array or string', () => {
    expect(globMatch('example.txt', 123 as any)).toBe(false);
  });

  it('should return false if the pattern is an empty array', () => {
    expect(globMatch('example.txt', [])).toBeFalsy();
  });

  it('should handle complex patterns', () => {
    expect(globMatch('src/index.ts', ['src/**/*.(t|j)s', '!src/test/**/*'])).toBe(true);
    expect(globMatch('src/index.js', ['src/**/*.(t|j)s', '!src/test/**/*'])).toBe(true);
    expect(globMatch('src/test/index.ts', ['src/**/*', '!src/test/**/*'])).toBe(false);
  });

  it('should handle multiple blacklist patterns', () => {
    expect(globMatch('example.txt', ['!example.txt', '!example.md'])).toBe(false);
  });

  it('should handle multiple whitelist patterns', () => {
    expect(globMatch('example.txt', ['*.txt', '*.md'])).toBe(true);
  });

  it('should handle mixed patterns', () => {
    expect(globMatch('example.txt', ['*.txt', '!example.md'])).toBe(true);
    expect(globMatch('example.md', ['*.txt', '!example.md'])).toBe(false);
  });
});
