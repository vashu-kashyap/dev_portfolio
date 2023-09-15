import React from "react";
import axios from "axios";
import Link from "next/link";
import Mybutton from "@/components/Mybutton";
import Image from "next/image";

const blog = ({blogData}) => {
  const arrayofBlog = blogData.data;
  return (
      <main className="allBlog px-4 py-10 md:py-24 lg:px-24 text-dark-gray font-roboto border-b border-dark-gray bg-black" id="all-blogs">
        <div className="container mx-auto">
          <div className="flex flex-wrap w-full mb-12 items-center">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h3 className="text-2xl sm:text-5xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray">
                My All Blogs
              </h3>
            </div>
            <p className="w-full lg:w-1/2 leading-relaxed text-light-gray">
              Welcome to my collection of blogs! Here, I share insights, tips, and thoughts on various topics. Explore my writings and join me on a journey of discovery.
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:gap-x-8 gap-y-8">
            {arrayofBlog.map((item) => {
              return (
                <div
                  className="p-3 md:flex-1 flex flex-col items-start border border-dark-gray"
                  key={item.attributes.slug}
                >
                  <span className="inline-block py-1 px-2 rounded text-light-gray text-xs font-medium tracking-widest">
                    {item.attributes.category}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-semibold text-purple-500 my-4">
                    {item.attributes.title}
                  </h4>
                  <p className="leading-relaxed text-white first-letter ">
                    {item.attributes.excerpt}
                  </p>
                  <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-dark-gray mt-8 w-full">
                    <Link href={`/blog/${item.attributes.slug}`}>
                      <Mybutton label="Read More" />
                    </Link>
                  </div>
                  <a className="inline-flex items-center">
                    <Image
                      alt="blog"
                      src={item.attributes.authorImg.data.attributes.url}
                      width={500}
                      height={500}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-purple-500">
                        {item.attributes.author}
                      </span>
                      <span className="text-light-gray text-xs tracking-widest mt-0.5">
                        Front-End Developer
                      </span>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </main>
  
  );
};

export default blog;

export async function getServerSideProps() {
  // Define the API endpoints for projects and blog posts
  const projectApi = "http://127.0.0.1:1337/api/projects?populate=*";
  const blogpostApi = "http://127.0.0.1:1337/api/blog-posts/?populate=*";

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
