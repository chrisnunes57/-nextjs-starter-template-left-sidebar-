import Head from 'next/head'

function DefaultHead() {
    return (
        <Head>
            <title>YOUR TITLE HERE</title>
            <meta property="og:title" content="YOUR TITLE HERE" key="title" />

            <meta charSet="utf-8" />
            <meta name="description" content="YOUR DESCRIPTION HERE" />
            <meta name="author" content="Chris Nunes" />
            <meta name="keywords" content="KEYWORDS HERE" />

            <meta property="og:url" content="PROD URL GOES HERE" />
            <meta property="og:image" content="SEO IMAGE GOES HERE" />
        </Head>
    )
}

export default DefaultHead;
