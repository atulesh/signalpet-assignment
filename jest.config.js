module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Handle @ alias
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
