import { Page } from "@playwright/test";

class SettingsPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    public get sideBarButton() {
        return this.page.getByRole('link', { name: '⇶' })
    }

    public get allSettingsButton() {
        return this.page.getByRole('link', { name: 'All Settings' })
    }

    public get languageSelect() {
        return this.page.locator('#setting_kad')
    }

    public get themesButton() {
        return this.page.getByRole('link', { name: 'Themes' })
    }

    public get themeTerminalButton() {
        return this.page.locator('div:nth-child(6) > .set-theme > .set-theme__color-2')
    }

    public get saveAndExitButton() {
        return this.page.locator('div.set-main-footer > a')
    }
}

export { SettingsPage }