const axios = require('axios')

const { getToken } = require('duckduckgo-images-api/src/utils')

const url = 'http://api.duckduckgo.com/'

const headers = {
    'content-type': 'application/json',
    'x-requested-with': 'XMLHttpRequest',
    'accept-encoding': 'null',
    'accept': 'application/json, text/javascript, */*; q=0.01',
}


async function printUrls(keywords) {

    const token = await getToken(keywords)
    let params = {
        "l": "wt-wt",
        "o": "json",
        "q": keywords,
        "vqd": token,
        "f": ",,,"
    }
    const response = await axios.get(url, {
        params,
        headers
    })
    return response.data.Results
}

printUrls('dogecoin').then((results) => {
    results.forEach((result) => console.log(result.FirstURL))
})
