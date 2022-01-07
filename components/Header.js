import Head from 'next/head'

const Header=({location})=> {
    return (
        <Head className='dark:border-gray-700'>
            <title>AGVs{(location && ' - ' + location)}</title>
            <link rel="icon" href="/moldex.png" />
        </Head>
    )
}

export default Header