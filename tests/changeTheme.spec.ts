import { test, expect } from '@playwright/test';
import { SettingsPage } from '../pages/settings.page';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('');
});

test('test', async ({ page }) => {
  const settingsPage = new SettingsPage(page)
  await settingsPage.sideBarButton.click();
  await settingsPage.themesButton.click();
  await settingsPage.themeTerminalButton.click();
  await settingsPage.saveAndExitButton.click();
  await page.reload()
  await expect(page.locator('body')).toHaveCSS('background-color','rgb(34, 34, 34)')
});