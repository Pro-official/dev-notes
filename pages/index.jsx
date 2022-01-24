import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import { sanityClient, urlFor } from "../sanity";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log();
  return (
    <>
      <Head>
        <title>Home | DevNotes</title>
        <meta name="description" content="DevNote - Developers Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Banner></Banner>

      {/* Articles  */}
      <article className="mt-8 w-full max-w-7xl mx-auto md:p-4 cursor-pointer mb-10 hover:drop-shadow-lg hover:shadow-lg rounded-lg">
        {props.posts.map((post) => (
          <>
            <Link
              className={styles.links}
              href={`/post/${post.slug.current}`}
              key={post._id}
            >
              {post.featured && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 ">
                  <div>
                    <img
                      className="rounded-lg"
                      src={urlFor(post.mainImage).url()}
                      alt=""
                    />
                  </div>
                  <div className="my-auto">
                    <h4 className="font-links font-bold uppercase underline underline-offset-4 text-base">
                      {post.categories}
                    </h4>
                    <h1 className="hover:underline underline-offset-2 title text-5xl leading-12 font-title font-black mt-6">
                      {post.title}
                    </h1>
                    <p className="mt-6 w-11/12 font-normal leading-none text-xl font-semibold">
                      {post.description}
                    </p>
                    <p className="mt-4">
                      By <span className="font-bold">{post.author.name}</span> |{" "}
                      {new Date(post.publishedAt.slice(0, 10)).toDateString()}
                    </p>
                  </div>
                </div>
              )}
            </Link>
          </>
        ))}
      </article>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
      _id,
      title,
      description,
      mainImage,
      categories,
      publishedAt,
      slug,
      featured,
      author -> {
      name,
      image
    }
    }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
