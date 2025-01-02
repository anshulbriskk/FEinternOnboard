module.exports = {
    // Specify the test environment
    testEnvironment: 'jsdom',
    
    // Setup files to run before the tests
    setupFilesAfterEnv: ['app/jest.setup.js'],
    
    // Transform configuration to use Babel
    transform: {
      '^.+\\.(js|jsx|ts)$': 'babel-jest',
    },
    
    // Module name mapper to handle CSS modules
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    
    // Path to the jest setup file
    setupFiles: ['dotenv/config'],
  
    // Module file extensions for importing
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
    // Ignore patterns for transformation
    transformIgnorePatterns: [
      '/node_modules/',
    ],
  
    // Test match patterns to find the test files
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
  };
  