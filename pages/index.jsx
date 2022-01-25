/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import { sanityClient, urlFor } from "../sanity";

export default function Home(props) {
  console.log(props);
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
      <article className="mt-20 w-full max-w-7xl mx-auto md:p-4 mb-20 hover:drop-shadow-lg hover:shadow-lg rounded-lg ">
        {props.posts.map((post) => (
          <>
            {/* <Link
              className={styles.links}
              href={`/post/${post.slug.current}`}
              key={post._id}
            > */}
            <div key={post._id}>
              {post.featured && (
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 ">
                  <div>
                    <Link href={`/post/${post.slug.current}`} passHref>
                      <img
                        className="rounded-lg h-96 w-full cursor-pointer"
                        src={urlFor(post.mainImage).url()}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="my-auto">
                    <h4 className="font-links font-bold uppercase underline underline-offset-4 text-base">
                      {post.categories}
                    </h4>
                    <Link href={`/post/${post.slug.current}`} passHref>
                      <h1 className="hover:underline underline-offset-2 title text-5xl leading-12 font-title font-black mt-6 w-11/12 cursor-pointer">
                        {post.title}
                      </h1>
                    </Link>
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
              {/* </Link> */}
            </div>
          </>
        ))}
      </article>
      <hr className="w-full md:max-w-7xl mx-auto border-black" />
      <article className="mt-20 w-full md:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
        {props.posts.map((post) => (
          <>
            {/* {post.featured && <h1 className="mb-10">{post.title}</h1>} */}
            <Link key={post._id} passHref href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer shadow-lg hover:shadow-xl border rounded-lg overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />
                <div className="flex justify-between items-center py-5 px-3 bg-white">
                  <div>
                    <h1 className="text-lg font-header leading-none font-bold ">
                      {post.title}
                    </h1>
                    <p className="text-base mt-4 leading-none">
                      {post.description.slice(0, 50)}
                      {"... "}
                      <span className="text-blue-500">
                        <Link href={`/post/${post.slug.current}`} passHref>
                          Read More
                        </Link>
                      </span>
                    </p>
                  </div>
                  <img
                    className="h-12 w-12 ml-2 rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt=""
                  />
                </div>
              </div>
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
