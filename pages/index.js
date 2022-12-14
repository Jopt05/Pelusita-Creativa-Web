import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import brandLogo from '../public/assets/brand_logo.png'
import pinkRibbon from '../public/assets/pink_ribbon.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pelusita | Papelería Creativa</title>
        <meta name="description" content="Papelería creativa por Anais Hernández" />
        <meta name="keywords" content="Painting, HTML, Journal, journal, html, painting, office, papery, javascript" />
        <meta name="author" content="Anais Hernández" />
        <link rel="icon" href='/assets/brand_logo.png' />
      </Head>
      <img
        className={styles.background}
        src='/assets/background_mobile.png'
      />

      <main className={styles.main}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image 
              className={{backgroundColor: 'black'}}
              src={brandLogo}
              width={250}
              height={250}
            />
          </div>
          <div>
            <h1>Pelusita</h1>
            <h2>Papelería creativa</h2>
          </div>
        </div>

        <div className={styles.buttons}>
          {/* <a href=''>
            <img 
              src="/assets/pink_ribbon.png"
            />
            <p>Catalogo de Productos</p>
          </a> */}
          <a href='https://www.instagram.com/ann_studiess/' target='_blank' rel="noreferrer">
            <img 
              src="/assets/yellow_ribbon.png"
            />
            <p>Apuntes bonitos</p>
          </a>
          <a href='https://www.instagram.com/ann_30r/' target='_blank' rel="noreferrer">
            <img 
              src="/assets/blue_ribbon.png"
            />
            <p>Dibujitos</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>@pelusita_creativa | 2022</p>
      </footer>
    </div>
  )
}
