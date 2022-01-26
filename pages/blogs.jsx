/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import profilePic from "../public/blog.jpg";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";

const Blogs = (props) => {
  console.log(props);
  return (
    <>
      <Navigation></Navigation>
      <Head>
        <title>Blogs | DevNotes</title>
      </Head>
      <div className="relative md:flex items-center justify-center bg-white overflow-hidden w-full md:max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-14">
                  <span className="block xl:inline font-header">
                    A Modern Blog by,
                  </span>{" "}
                  <span className="block text-indigo-600 xl:inline">
                    a Developer
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-normal">
                  Sometimes I think of blogging as finger exercises for a
                  violinist; sometimes I think of it as mulching a garden. It is
                  incredibly useful and helpful to my “real” writing.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="mr-auto">
          <Image
            className="w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl"
            src={profilePic}
            alt="a modern laptop setup"
          />
        </div>
      </div>
      )
      <hr className="w-full md:max-w-7xl mx-auto border-black" />
      <article className="mt-10 w-full md:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
        {props.posts.map((post) => (
          <>
            <Link key={post._id} passHref href={`/blog/${post.slug.current}`}>
              <div className="group cursor-pointer shadow-lg hover:shadow-xl border rounded-lg overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />
                <div className="flex justify-between items-center py-5 px-3 bg-white">
                  <div>
                    <h1 className="text-lg group-hover:text-blue-900 font-header leading-none font-bold ">
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
};

export default Blogs;

export const getServerSideProps = async () => {
  const query = `*[_type == "blogs"]{
      _id,
      title,
      mainImage,
      categories,
      publishedAt,
      time,
      slug,
      description,
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
