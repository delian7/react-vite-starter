export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocking CSS imports
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Ensure jest.setup.ts is included here
};
