module.exports = {
  transform: {
    '^.+\\.(ts)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
  },
};
