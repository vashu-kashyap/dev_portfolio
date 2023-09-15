import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const Slug = ({blogData}) => {
  const blogPost = blogData.data[0].attributes
  console.log(blogPost.authorImg.data.attributes.url)
  return (
    <main
      className="bg-dark-black px-4 py-10 md:py-12   font-roboto border-b border-dark-gray min-h-screen lg:px-48
    "
    >
      <h1 className="blog-title heroHeading text-5xl max-sm:text-3xl max-lg:text-center m text-purple-500 font-bellefair font-semibold tracking-wide leading-snug max-lg:leading-none text-center">
        {blogPost.title}
      </h1>

      <Image
        src={blogPost.images.data[0].attributes.url}
        alt={""}
        width={1600}
        height={620}
        className="mx-auto mt-8 lg:w-[1600px] lg:h-[420px] object-cover w-full h-full border border-dark-gray mb-5 "
      />
      <div className="blog-tags space-x-4">
        <span className="tag text-purple-500 text-base px-4 py-2 border-2 border-dark-gray rounded">
          #React
        </span>
        <span className="tag text-purple-500 text-base px-4 py-2 border-2 border-dark-gray rounded">
          #React
        </span>
        <span className="tag text-purple-500 text-base px-4 py-2 border-2 border-dark-gray rounded">
          #React
        </span>
      </div>

      <div className="blog-post-info lg:flex justify-between items-center">
        <div className="author-info">
          <div className="inline-flex items-center mt-4">
            <Image
              alt="blog"
              src={blogPost.authorImg.data.attributes.url}
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              width={1080}
              height={1080}
            />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium font-roboto text-lg text-purple-500">
                {blogPost.author}
              </span>
              <span className="text-light-gray text-sm tracking-widest mt-0.5">
                Front-End Developer
              </span>
            </span>
          </div>
        </div>
        <div className="date text-light-gray text-base font-roboto">
          12 Aug 2023
        </div>
      </div>
      <article className="blog-content text-white" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

    </main>
  );
};

export default Slug;


export async function getServerSideProps(context) {

  const {slug} = context.query;
  // Define the API endpoints for projects and blog posts
  const blogpostApi = `http://127.0.0.1:1337/api/blog-posts?filters[slug]=${slug}&populate=*`;

  // Set the authorization header using the API token from environment variables
  const header = {
    Authorization: `Bearer ${process.env.PROJECT_API_TOKEN}`,
  };

  try {
    // Fetch blog post data from the blog post API using axios
    const response2 = await axios.get(blogpostApi, { headers: header });
    const blogData = response2.data;
    // Return the fetched data as props to be used in the component
    return {
      props: {
        blogData,
      },
    };
  } catch (error) {
    // Handle errors if data fetching fails
    console.error("Error fetching data:", error.message);

    // Return empty data as props in case of an error
    return {
      props: {
        blogData: [],
      },
    };
  }
}
