const axios = require('axios')

const { getToken } = require('duckduckgo-images-api/src/utils')
const { image_search } = require('duckduckgo-images-api')

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

function printDogsImages(query) {
    image_search({ query, moderate: true }).then((results) => {
        console.log(`\n Image Links for ${query}: \n`)
        results.forEach((result) => console.log(`- ${result.image}`))
    }
    )
}

printUrls('dogecoin').then((results) => {
    console.log(`\n Results for Dogecoin: \n`)
    results.forEach((result) => console.log(`- ${result.FirstURL}`))
})

printDogsImages('dogs')