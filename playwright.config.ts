import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './src/tests/',
  retries: 5,
  timeout: 300 * 1000,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/e2e-junit-results.xml' }]
],
  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    headless: false,
    actionTimeout: 10 * 1000,
  },
  expect: {
    timeout: 120 * 1000
  },
  workers: '100%',
  maxFailures: 100,
  projects: [
    {
      name: 'Desktop',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      dependencies: ['Authentication'],
    },
    {
      name: 'Mobile',
      use: { ...devices['iPhone 12 Pro Max'], channel: 'chrome' },
      dependencies: ['Authentication'],
    }
    
  ],
});
