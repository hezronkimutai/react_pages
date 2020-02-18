const { defaults } = require('jest-config');

module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.js',
    '!index.js',
    '!src/index.js',
    '!src/mockData.js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/example/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: [
    '<rootDir>/src/example/testConfigurations/setupTests.js',
    'jest-localstorage-mock',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  reporters: [
    'default',
  ],
  collectCoverage: true,
  coverageReporters: ['lcov', 'json', 'text', 'html'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};