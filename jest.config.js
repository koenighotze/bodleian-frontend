module.exports = {
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/src/**/*.test.js'],
  testEnvironment: 'node',
  resetMocks: true,
  resetModules: true,
  verbose: false,
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'text-summary'],
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.test.js', '!**/*.integration.test.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  roots: ['src/'],
}
