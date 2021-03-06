import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "IncredibleZuess";
export const siteTitle = "Portfolio(WIP)";

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Website using nextjs" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
        {home ? (
          <>
            <img
              src="https://cdn.discordapp.com/avatars/301462063698411520/f56319f01a9ce0f514ec81550c94465b.webp?size=128"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href={`${process.env.BACKEND_URL}`}>
              <a>
                <img
                  src="https://cdn.discordapp.com/avatars/301462063698411520/f56319f01a9ce0f514ec81550c94465b.webp?size=128"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <div className={utilStyles.lightText}>
        <div className={styles.subheader}>
          <h4>
            <a href="https://discord.bio/p/IncredibleZuess"><i className="fab fa-discord"></i> IncredibleZuess#5667</a>
          </h4>

          <h4>
           <a href="https://github.com/IncredibleZuess"><i className="fab fa-github"></i> Github</a>
          </h4>
        </div>
      </div>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href={`${process.env.BACKEND_URL}`}>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
