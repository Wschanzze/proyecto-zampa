const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function run() {
  console.log('Starting Chrome...');
  const userProfile = 'C:\\Users\\Joshua\\.gemini\\antigravity\\brain\\455d3d07-1f01-4376-a5df-08a63fd615d2/scratch/chrome-profile-diag';
  
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    `--user-data-dir=${userProfile}`
  ]);

  await new Promise(resolve => setTimeout(resolve, 4000));

  let webSocketDebuggerUrl;
  try {
    webSocketDebuggerUrl = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9222/json/list', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const list = JSON.parse(data);
            resolve(list[0].webSocketDebuggerUrl);
          } catch (e) {
            reject(e);
          }
        });
      }).on('error', reject);
    });
  } catch (e) {
    console.error('Error:', e.message);
    chrome.kill();
    return;
  }

  const ws = new WebSocket(webSocketDebuggerUrl);
  
  ws.onopen = () => {
    ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
    setTimeout(() => {
      ws.send(JSON.stringify({
        id: 2,
        method: 'Page.navigate',
        params: { url: 'http://localhost:4028/home' }
      }));
    }, 500);

    setTimeout(() => {
      ws.send(JSON.stringify({
        id: 3,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const nav = document.querySelector('nav');
            const section = document.querySelector('section');
            const img = document.querySelector('section img');
            const wrapper = document.querySelector('section .absolute');

            return {
              nav: nav ? nav.getBoundingClientRect() : null,
              section: section ? section.getBoundingClientRect() : null,
              wrapper: wrapper ? wrapper.getBoundingClientRect() : null,
              img: img ? {
                rect: img.getBoundingClientRect(),
                style: {
                  position: window.getComputedStyle(img).position,
                  top: window.getComputedStyle(img).top,
                  height: window.getComputedStyle(img).height,
                  objectFit: window.getComputedStyle(img).objectFit,
                }
              } : null
            };
          })()`,
          returnByValue: true
        }
      }));
    }, 7000);
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id === 3) {
      console.log(JSON.stringify(data.result?.result?.value, null, 2));
      ws.close();
      chrome.kill();
    }
  };
}

run().catch(console.error);
