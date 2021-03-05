import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Main from '../components/home'

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
         
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        </Head>
        <Main/>
      </Layout>
    </div>
  )
}
