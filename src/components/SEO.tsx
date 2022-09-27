export const SEO = () => (
  <>
    <meta charSet='UTF-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width' />

    {/* Favicons */}
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/static/favicons/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/static/favicons/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/static/favicons/favicon-16x16.png'
    />
    <link
      rel='shortcut icon'
      type='image/x-icon'
      href='/static/favicons/favicon.ico'
    />

    {/* Manifest */}
    <link rel='manifest' href='/manifest.json' />

    {/* Metas Tags */}
    <meta name='title' content='José Domínguez Pérez • Web Developer 🧑‍💻' />
    <meta
      name='description'
      content='José Domínguez Pérez is a web developer based in Guayaquil, Ecuador. On this website you will find a little about him and some of the projects he has worked on.'
    />
    <meta name='author' content='José Domínguez Pérez' />
    <meta name='copyright' content='José Domínguez Pérez' />
    <meta
      name='keywords'
      content='software, web development, frontend, backend, javascript, react, vue, node.'
    />

    {/* Open Graph */}
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://josemidev.vercel.app' />
    <meta
      property='og:site_name'
      content='José Domínguez Pérez • Web Developer 🧑‍💻'
    />
    <meta
      property='og:title'
      content='José Domínguez Pérez • Web Developer 🧑‍💻'
    />
    <meta
      property='og:description'
      content='José Domínguez Pérez is a web developer based in Guayaquil, Ecuador. On this website you will find a little about him and some of the projects he has worked on.'
    />
    <meta property='og:image' content='/static/images/banner.webp' />

    {/* Twitter */}
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content='https://josemidev.vercel.app' />
    <meta
      property='twitter:title'
      content='José Domínguez Pérez • Web Developer 🧑‍💻'
    />
    <meta
      property='twitter:description'
      content='José Domínguez Pérez is a web developer based in Guayaquil, Ecuador. On this website you will find a little about him and some of the projects he has worked on.'
    />
    <meta property='twitter:image' content='/static/images/banner.webp' />

    {/* Color theme */}
    <meta name='color-scheme' content='dark' />
    <meta name='theme-color' content='#121212' />

    {/* Others */}
    <link rel='canonical' href='https://josemidev.vercel.app' />
  </>
)
