/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState } from "react";
import PortableText from "react-portable-text";
import Navigation from "../../components/Navigation";
import { sanityClient, urlFor } from "../../sanity";
import { useForm, SubmitHandler } from "react-hook-form";

const Post = ({ post }) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        // console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <>
      <Navigation />
      <main className="w-full md:max-w-5xl mx-auto mt-10">
        <Head>
          <title>{post.title} | DevNotes</title>
        </Head>

        {/* Main section of the post */}

        <article className="max-w-3xl mx-auto p-5">
          <h3 className="font-links font-bold uppercase underline underline-offset-4 text-base">
            {post.categories}
          </h3>
          <h1 className="hover:underline underline-offset-2 title text-5xl leading-10 font-header font-black mt-4 cursor-pointer">
            {post.title}
          </h1>
          <h2 className="text-xl font-normal font-base text-black mt-4 mb-3">
            {post.description}
          </h2>

          <div className="flex items-center space-x-2">
            <p className="font-base font-normal text-sm">
              By{" "}
              <span className="text-black font-bold">{post.author.name}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              {new Date(post.publishedAt.slice(0, 10)).toDateString()}
              &nbsp;&nbsp;&bull;&nbsp;&nbsp;{post.time} minute read
            </p>
          </div>

          <img
            className="w-full object-cover mt-4"
            src={urlFor(post.mainImage).url()}
            alt=""
          />

          <div className="mt-10">
            <PortableText
              className="text-lg"
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                h1: (props) => (
                  <h1 className="text-3xl font-bold my-5" {...props} />
                ),
                h2: (props) => (
                  <h2 className="text-3xl font-bold my-5" {...props} />
                ),
                li: ({ children }) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-600 hover:underline underline-offset-2"
                  >
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>
        <hr className="max-w-lg my-5 mx-auto border border-slate-900" />

        {submitted ? (
          <div
            style={{ backgroundColor: "#0A2540" }}
            className="flex flex-col p-10 my-10 text-white max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-2">
              Thank your for submitting your comment!
            </h3>
            <p>Once it has been approved, it will appear bellow!</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
          >
            <h3 className="text-sm text-black">Enjoyed this article?</h3>
            <h4 className="text-3xl font-bold">Leave a comment bellow!</h4>
            <hr className="py-3 mt-2" />

            <input
              type="hidden"
              {...register("_id")}
              name="_id"
              value={post._id}
            />

            <label className="block mb-5" htmlFor="">
              <span className="text-black">Name</span>
              <input
                {...register("name", { required: true })}
                className="shadhow border rounded py-2 px-3 form-input mt-1 block w-full ring-black focus:ring-2 outline-none"
                placeholder="Your Name"
                type="text"
              />
            </label>

            <label className="block mb-5" htmlFor="">
              <span className="text-black">Email</span>
              <input
                {...register("email", { required: true })}
                className="shadhow border rounded py-2 px-3 form-input mt-1 block w-full ring-black focus:ring-2 outline-none"
                placeholder="Your email"
                type="email"
              />
            </label>
            <label className="block mb-5" htmlFor="">
              <span className="text-black">Comment</span>
              <textarea
                {...register("comment", { required: true })}
                className="shadhow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-black focus:ring-2 outline-none"
                placeholder="Type your comment"
                name="comment"
                id=""
                rows={5}
              ></textarea>
            </label>
            <div className="flex flex-col p-5">
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
              {errors.comment && (
                <span className="text-red-600">Comment is required</span>
              )}
            </div>
            <input
              className="text-white bg-slate-900 hover:bg-gray-700 shadow-2xl font-bold py-3 px-4 rounded cursor-pointer focus:bg-white focus:text-black focus:border border-black"
              type="submit"
              value="Submit"
            />
          </form>
        )}

        <div className="flex flex-col p-10 max-w-2xl mx-auto shadow-black shadow space-y-2 mb-20">
          <h3 className="text-3xl text-black font-title font-bold">Comments</h3>
          <hr className="pb-2" />
          {post.comments.map((comment) => (
            <div className="hover:shadow-2xl" key={comment._id}>
              <p className="font-normal text-xl">
                <span className="text-black font-extrabold">
                  {comment.name}{" "}
                </span>
                says: &nbsp;
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "blogs"]{
        _id,
        slug {
            current
        }
    }`;
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "blogs" && slug.current == $slug][0]{
    _id,
    title,
    description,
    categories,
    mainImage,
    publishedAt,
    time,
    slug,
    body,
    featured,
    author -> {
    name,
    image
    },
    "comments": *[_type == "comment" && post._ref == ^._id && approved == true]
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // 1 minute after, cache will be updated
  };
};
