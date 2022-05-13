import path from 'path'

export const origin = 'https://peapix.com'

export const headers = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
  referer: 'https://peapix.com/',
  Cookie:
    'fpestid=5Gcam6UVX5SWO4ZJhvhn4zbxD7bLCMpg9QBaxa_ZOR4h3ccOz-xs3-Pqf4fcg7MAh1gzKw; __cf_bm=WVniUPEy_ACuXqG.kaPA.qNTg6nKSuYQrM_cp53NszM-1652367450-0-Aav1S5eKZ3d93lfqnvWAgAyGpNYlm+5wEetDduPkK6wvOFv/oL3OEAoEBFVpw711IYDQPy19iCQy8GAh/30uOuGv3l02a0c3NC/2ggXzUAI8DrwxyI9cLiE8RZcFpCXwww==; _gid=GA1.2.942917615.1652367454; _ga_NL9LSZC964=GS1.1.1652367452.6.1.1652368264.0; _ga=GA1.2.1231156223.1652106207',
}

export const dir = process.env.dir || path.resolve(process.cwd(), 'archives')
