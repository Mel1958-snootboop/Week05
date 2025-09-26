//They bring in components and styles needed to build and style the homepage.
 import Head from 'next/head';

// Imports the Layout component for consistent page structure and the siteTitle variable for setting the page title.
 import Layout, { siteTitle } from '../components/layout';

// Imports utility CSS module styles for use in this page (such as headings and spacing).
 import utilStyles from '../styles/utils.module.css';

// Utility that reads post metadata (e.g. from markdown files in /posts)
// and returns an array of posts sorted by date — used in getStaticProps.
 import { getSortedPostsData } from '../lib/posts';

// Next.js Link provides client-side navigation (and optional prefetching)
// for internal routes.
 import Link from 'next/link';

// Small component that formats a date string and renders it for display
// (used below to show each post's published date).
 import Date from '../components/date';
 
// Runs at build time to fetch data needed to pre-render this page.
// Calls `getSortedPostsData()` to read and sort post metadata and
// returns the posts as `allPostsData` inside `props` for the page component.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
//It creates and styles the homepage, showing an introduction and a tutorial link.
export default function Home({ allPostsData }) {
  return (

     // Renders the homepage layout with a title and introduction section.
    // Displays the site title in the browser tab and a welcome message with a link to the Next.js tutorial.
   // Blog list: map `allPostsData` to linked post titles and formatted dates.
   // Each item links to `/posts/[id]` and shows the published date via the
   // `Date` component. 
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
        <Link href={`/posts/${id}`}>{title}</Link>
        <br />
        <small className={utilStyles.lightText}>
        <Date dateString={date} />
        </small>
        </li>
          ))}
        </ul>
      </section>

        <p>Hello, I'm Melanie! And I am a CS major.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}