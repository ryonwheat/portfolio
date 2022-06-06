const { createNode } = require("typescript");

exports.onPreInit = () => {
    console.log('gatsby-node: Loaded gatsby-node')
}

exports.sourceNodes = async ({ actions: {createNode}, createNodeId, createContentDigest }) => {
    console.log('gatsby-node: sourcing nodes')

    const url = "https://zenquotes.io/api/quotes/";
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    data.map((quote, i) => createNode({
        ...quote,
        id: createNodeId(quote.a),
        internal: {
            type: 'Quote',
            contentDigest: createContentDigest(quote)
        }
    }))



    // const response = await fetch(
    //     `${process.env.SPOTIFY_AUTHORIZE_URL}?`, {
    //         method: 'GET',
    //         body: `response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URL}`
    //     }
    // )
    // console.log('RESPONSE: ', response)
}