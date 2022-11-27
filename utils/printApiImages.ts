const { image_search } = require('duckduckgo-images-api')

function printDogsImages(query: string) {
    image_search({ query, moderate: true }).then((results) => {
        results.forEach((result) => console.log(result.image))
    }
    )
}

printDogsImages('dogs')