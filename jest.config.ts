const config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1",
        "\\.(css|scss|sass)$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.js$": "babel-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transformIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
  
export default config;