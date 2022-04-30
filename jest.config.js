/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  "transform": {
    "\\.[jt]sx?$": "babel-jest",
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};