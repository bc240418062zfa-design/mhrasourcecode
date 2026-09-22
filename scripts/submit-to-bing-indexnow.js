// Instant IndexNow submission script for Microsoft Bing & Search Engines
import https from 'https';

const payload = JSON.stringify({
  host: 'mihora.tech',
  key: 'e4b3c2d1a0f9e8d7c6b5a49382716054',
  keyLocation: 'https://mihora.tech/e4b3c2d1a0f9e8d7c6b5a49382716054.txt',
  urlList: [
    'https://mihora.tech/',
    'https://mihora.tech/docs',
    'https://mihora.tech/faq',
    'https://mihora.tech/engineering',
    'https://mihora.tech/services',
    'https://mihora.tech/solutions',
    'https://mihora.tech/industries',
    'https://mihora.tech/company',
    'https://mihora.tech/insights',
    'https://mihora.tech/careers',
    'https://mihora.tech/contact',
    'https://mihora.tech/legal'
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  console.log(`[IndexNow] Response Status: ${res.statusCode} (${res.statusMessage})`);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('[IndexNow] Success: All MIHORA.TECH URLs submitted to Bing & IndexNow for instant crawling!');
    } else {
      console.log(`[IndexNow] Notice: HTTP ${res.statusCode}. ${data}`);
    }
  });
});

req.on('error', (e) => {
  console.error(`[IndexNow] Error submitting: ${e.message}`);
});

req.write(payload);
req.end();
