const axios = require('axios')

const { getToken } = require('duckduckgo-images-api/src/utils')

const url = 'https://duckduckgo.com/'

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
    const response = await axios.get('http://api.duckduckgo.com/', {
        params,
        headers
    })
    return response.data.Results
}

printUrls('dogecoin').then((results) => {
    results.forEach((result) => console.log(result.FirstURL))
})
