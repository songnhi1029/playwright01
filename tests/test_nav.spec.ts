import { test, expect } from '@playwright/test';
import { link } from 'fs';
import { text } from 'stream/consumers';

test('count and print nav-array links on playwright.dev', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const navLinkLocator = page.locator('nav >> a');

    //const navLinkText = await navLinkLocator.allTextContents();
    const allLinkTextURL = await navLinkLocator.evaluateAll(list => list.map(element => {
        const textContent = element.textContent?.trim();
        const ariaLabel = element.getAttribute('aria-label')?.trim();
        const title = element.getAttribute('title')?.trim();

        const text = textContent || ariaLabel || title  || '';

        return {
            text: text , 
            url: (element as HTMLAnchorElement).href || ''
        }
    }));

    console.log('Total Navi link tim thay: ', allLinkTextURL.length);
    //console.log('Detail: ', allLinkTextURL);
    allLinkTextURL.forEach((link, index) => {
        console.log(`[${index + 1}] ${link.text} \n   [URL] ${link.url}\n`);
    });

    //console.log('New commit kkkk');

    expect (allLinkTextURL.length).toBeGreaterThanOrEqual(1);
});