import React from "react";
import { sanityClient } from "../sanity";

const Articles = (props) => {
  return (
    <>
      <div>
        {props.posts.map((post) => (
          <>
            <div key={post.title}>{post.featured && <h1>{post.title}</h1>}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default Articles;

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
        _id,
        title,
        description,
        mainImage,
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
