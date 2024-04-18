module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest", // Transform TypeScript files
    "^.+\\.jsx?$": "babel-jest", // Transform JavaScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "/fileMock.js",
  },
  env: {
    node: true,
  },
};
