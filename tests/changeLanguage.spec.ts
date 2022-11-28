import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SettingsPage } from '../pages/settings.page';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('');
});
test('Change Language to "Español"', async ({ page }) => {
  const homePage = new HomePage(page)
  const settingsPage = new SettingsPage(page)
  await page.goto('');
  await settingsPage.sideBarButton.click();
  await settingsPage.allSettingsButton.click();
  await settingsPage.languageSelect.selectOption('es_AR');
  await expect(settingsPage.saveAndExitButton).toHaveText('Guardar y salir')
  await settingsPage.saveAndExitButton.click()
  await expect(page).toHaveURL('');
  await page.reload()
  await expect(homePage.searchInputES).toBeVisible()
});