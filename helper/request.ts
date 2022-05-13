import fetch, { RequestInfo } from 'node-fetch'

const request = (params: RequestInfo) =>
  fetch(params, {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'zh',
      'cache-control': 'max-age=0',
      'sec-ch-ua':
        '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36',
      cookie:
        '_ga_NL9LSZC964=GS1.1.1652444955.1.0.1652444955.0; __cf_bm=74yaUsBlSEO6ymHLuF.cWbRexnPuwIJWEjQtBupGX34-1652444954-0-AUKXiqPcPjTVvAq//x8ZuoYuoERJrQh7yaroSZkEHp/MQatVKxiXWd0e3eP+YaacbiogzHYkxb1bwzGQJFhIuBPCdjHXCUozjOeCBLK9uXU0q/XoWWMQO5ducakgeeYP7g==; _ga=GA1.2.209749876.1652444956; _gid=GA1.2.795906548.1652444956; _gat_gtag_UA_148172409_1=1; fpestid=J3S4peIUkGAczFhIplvvB0NnYMWdOOwSPAqNjAZJoLSYUL6cZ2GUeboUPQ6W_LvUOIrPzQ',
    },
  })

export default request
