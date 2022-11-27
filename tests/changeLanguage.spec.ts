import { test, expect } from '@playwright/test';
import { SettingsPage } from '../pages/settings.page';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('');
});
test('Change Language', async ({ page }) => {
  const settingsPage = new SettingsPage(page)
  await page.goto('');
  await settingsPage.sideBarButton.click();
  await settingsPage.allSettingsButton.click();
  await settingsPage.languageSelect.selectOption('es_AR');
  await settingsPage.saveAndExitButton.click()
  await expect(page).toHaveURL('');
});