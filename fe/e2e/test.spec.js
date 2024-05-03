import { expect, test } from '@playwright/test';

test('should display welcome message', async ({ page }) => {
    await page.goto('http://localhost:5173');
    const el = await page.locator('h1');
    await expect (el).toHaveText('Hello, Vue 3!');
  });