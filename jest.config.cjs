module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest', // Transform TypeScript files
    '^.+\\.jsx?$': 'babel-jest'  // Transform JavaScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jest-environment-jsdom',
};
