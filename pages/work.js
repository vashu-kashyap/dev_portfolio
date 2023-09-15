import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Mybutton from "@/components/Mybutton";

const work = ({ projectData }) => {
  const handleCategory = (options) => {
    setCateValue(options);
  };

  const arrayofProject = projectData.data;
  return (
    <main className="bg-dark-black">
      <section className="workSection px-4 py-10 md:py-12 lg:px-24 text-dark-gray font-roboto border-b border-dark-gray min-h-screen">
        <div className="flex flex-wrap items-center w-full mb-8">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            {/* Latest Work Heading */}
            <h1 className="sm:text-5xl text-2xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray ">
              My All Work
            </h1>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-light-gray">
            Discover my world of creativity and hard work! Take a quick tour of
            My All Work to explore all the projects I've brought to life.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 mt-4 ">
          {arrayofProject.map((item) => {
            return (
              <div
                className="xl:w-1/4 md:w-1/2 p-4 mb-16"
                key={item.attributes.slug}
              >
                <div className="bg-transparent border border-dark-gray p-3  ">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.attributes.image.data[0].attributes.url}
                    alt="content"
                    height={401}
                    width={701}
                  />
                  <h3 className="tracking-widest text-light-gray text-xs font-medium title-font">
                    {item.attributes.category}
                  </h3>
                  <h2 className="text-lg text-purple-500 font-medium title-font mb-4">
                    {item.attributes.title}
                  </h2>
                  <p className="leading-relaxed text-base text-white">
                    {item.attributes.excerpt}
                  </p>
                  <div className="btngroup mt-2 space-x-4">
                    <Link href={`/project/${item.attributes.slug}`}>
                      <Mybutton label={"View"} size={"small"} />
                    </Link>
                    <Mybutton
                      onClick={() => {
                        window.open(item.attributes.githubUrl, "_blank");
                      }}
                      label={"Source Code"}
                      size={"small"}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default work;

export async function getServerSideProps() {
  // Define the API endpoints for projects and blog posts
  const projectApi = "http://127.0.0.1:1337/api/projects?populate=*";
  // Set the authorization header using the API token from environment variables
  const header = {
    Authorization: `Bearer ${process.env.PROJECT_API_TOKEN}`,
  };

  try {
    // Fetch project data from the project API using axios
    const response1 = await axios.get(projectApi, { headers: header });
    const projectData = response1.data;
    return {
      props: {
        projectData,
      },
    };
  } catch (error) {
    // Handle errors if data fetching fails
    console.error("Error fetching data:", error.message);

    // Return empty data as props in case of an error
    return {
      props: {
        projectData: [],
      },
    };
  }
}
