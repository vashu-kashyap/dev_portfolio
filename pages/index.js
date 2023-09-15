import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Mybutton from "../components/Mybutton";
import Link from "next/link";
import axios from "axios";

const Index = ({ projectData, blogData }) => {
  const arrayofProject = projectData.data;
  const arrayofBlog = blogData.data;
  const whatsappNumber = "8287651128";
  const message = "Hi, I'm interested in hiring you!";

  // Create a WhatsApp message link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  // function for download cvfile when user click on Get Cv Button

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cvFile.pdf"; // Updated path without '../public/'
    link.download = "cvFile.pdf"; // Specify only the desired file name
    link.click();
  };

  const [field, setField] = useState({
    name: "",
    email: "",
  });

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setField((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the email sending API
      const response = await axios.post(
        "http://localhost:3000/api/sendContact",
        field,
        {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        }
      );
      // Reset form fields after successful submission
      setField({
        name: "",
        email: "",
      });

      // Handle success or show a success message to the user
      alert("Request sent successfully. Thank you! We Will Contact with you");
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <>
      <Head>
        <title>Dev.Vashu - A Front-End Web Developer </title>
        <meta name="description" content="" />
      </Head>
      <main className="bg-dark-black text-white">
        {/* Hero Section */}
        <section className="px-24 max-lg:px-8 max-sm:px-2 heroSection min-h-[95vh] flex flex-col justify-center items-center gap-y-5 border-b border-dark-gray">
          {/* Hero Heading */}
          <h1 className="heroHeading text-8xl max-sm:text-7xl max-lg:text-center m text-purple-500 font-bellefair font-semibold tracking-wide leading-snug max-lg:leading-none">
            Welcome <br className="hidden max-lg:block" /> to{" "}
            <br className="hidden max-lg:block" /> Dev.Vashu
          </h1>
          {/* Subheading */}
          <h2 className="subHeading text-3xl max-sm:text-2xl text-center text-white font-roboto font-semibold leading-snug max-sm:leading-relaxed tracking-wider">
            HEY! I’m Vashu <br /> A FRONT-END DEVELOPER Based in INDIA
          </h2>
          {/* Hero Paragraph */}
          <p className="heroParagraph text-normal max-sm:text-sm max-sm:text-center text-light-gray font-roboto font-light tracking-wider leading-relaxed">
            Embark on a Journey of Learning Amazing Coding Concepts with
            Dev.Vashu
          </p>
          {/* Buttons */}
          <div className="btn-group space-x-8">
            <Mybutton
              label={"Get Cv"}
              size={"large"}
              onClick={handleDownload}
            />

            <Link href={"#latest-work"}>
              <Mybutton label={"Latest Work"} size={"large"} />
            </Link>
          </div>
        </section>

        {/* About Me Section */}
        <section
          className="aboutMeSection px-4 py-10 md:py-24 lg:px-24 text-dark-gray font-roboto border-b border-dark-gray"
          id="about-me"
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap w-full mb-12 items-center">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h3 className="text-2xl sm:text-5xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray">
                  About Me
                </h3>
              </div>
              <p className="w-full lg:w-1/2 leading-relaxed text-light-gray">
                Get to Know Me Better: A Brief Introduction
              </p>
            </div>
          </div>
          <div className="container mx-auto flex  md:flex-row flex-col lg:items-center items-left lg:gap-x-12">
            <div className="w-full lg:w-1/2 mb-8 md:w-1/2 bg-white">
              <Image
                className="object-cover object-center"
                alt="hero"
                src={"/vashu.jpg"}
                width={720}
                height={600}
              />
            </div>
            <div className="flex flex-col items-start md:w-1/2 lg:pl-24 md:pl-16 lg:flex-grow text-left font-roboto">
              <h4 className="text-3xl sm:text-4xl mb-4 text-purple-500 font-semibold title-font">
                I`&#39;`m Vashu &
                <br className="hidden lg:inline-block" />
                Front-End Web Developer
              </h4>
              <p className="mb-8 leading-relaxed text-base text-white">
                I live in Delhi (India). I describe myself as a passionate Web
                Developer who loves coding and using the open-source library. In
                my free time, I watch coding tutorial videos on YouTube and
                engage in online surfing about coding. This helps me learn new
                skills (like HTML, CSS, JavaScript,Tailwind CSS,React and Next
                Js) and grow as a Web Developer. My aspiration is to become a
                proficient Full Stack Developer.
              </p>
              <div className="btnGroup space-x-4">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Mybutton label="Hire Me" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Work Section */}
        <section
          className="latestWorkSection px-24 md:py-24 py-10 max-sm:px-4 max-lg:px-8 text-dark-gray font-roboto  border-b border-dark-gray"
          id="latest-work"
        >
          <div className="container  mx-auto">
            <div className="flex flex-wrap items-center w-full mb-14">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                {/* Latest Work Heading */}
                <h3 className="sm:text-5xl text-2xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray ">
                  My Latest Work
                </h3>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-light-gray">
                Explore my freshest frontend work! I`&#39;`ve woven together
                creativity and code to craft an immersive web app. Dive in now
                to witness innovation in action
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {arrayofProject.map((item) => {
                return (
                  <div
                    className="xl:w-1/4  md:w-1/2 p-4 mb-16"
                    key={item.attributes.title}
                  >
                    <div className="bg-transparent border h-[480px] border-dark-gray p-3  ">
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
                      <p className="leading-relaxed text-base text-white ">
                        {item.attributes.excerpt}
                      </p>
                      <div className="btngroup mt-2 space-x-4 ">
                        <Link
                          href={`${item.attributes.liveUrl}`}
                          target="_blank"
                        >
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
          </div>

          {/* Banner */}
          <div className="banner flex max-sm:flex-col justify-center items-center gap-x-16 max-sm:gap-y-8 border border-dark-gray rounded-lg py-12 font-roboto">
            <div className="bannerContent space-y-4">
              {/* Banner Heading */}
              <h4 className="bannerHeading text-3xl max-sm:text-2xl max-sm:text-center text-white font-semibold">
                Explore More of My Work
              </h4>
              {/* Banner Paragraph */}
              <p className="bannerPara max-sm:text-sm max-sm:text-center text-base text-light-gray">
                See my projects that showcase creativity and innovation.
              </p>
            </div>
            {/* "Explore More" Button */}
            <div className="ctcButton">
              <Link href={"/work"}>
                <Mybutton label={"Explore More"} />
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Blog Section */}
        <section
          className="latestBlogSection px-4 py-10 md:py-24 lg:px-24 text-dark-gray font-roboto border-b border-dark-gray"
          id="latest-blog"
        >
          <div className="container mx-auto ">
            <div className="flex flex-wrap w-full mb-12 items-center ">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h3 className="text-2xl sm:text-5xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray">
                  My Latest Blog
                </h3>
              </div>
              <p className="w-full lg:w-1/2 leading-relaxed text-light-gray">
                Welcome to the Latest Blog section—a special spot where I
                explain frontend details, provide tips, and showcase what`&#39;`s new.
                Explore user-friendly design, discover fresh web development
                ideas, and stay up-to-date in the ever-changing digital world.
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
                    <p className="leading-relaxed text-white">
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
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        width={48}
                        height={48}
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

          {/* Explore Blogs Banner */}
          <div className="banner flex max-sm:flex-col justify-center items-center gap-x-16 max-sm:gap-y-8 border border-dark-gray rounded-lg py-12 font-roboto mt-14">
            <div className="bannerContent space-y-4">
              {/* Banner Heading */}
              <h4 className="bannerHeading text-3xl max-sm:text-2xl max-sm:text-center text-white font-semibold">
                Explore My All Blogs
              </h4>
              {/* Banner Paragraph */}
              <p className="bannerPara max-sm:text-sm max-sm:text-center text-base text-light-gray">
                Dive into my collection of blog posts covering various topics.
              </p>
            </div>
            {/* "Explore More" Button */}
            <div className="ctcButton">
              <Link href={"/blog"}>
                <Mybutton label={"Explore More"} />
              </Link>
            </div>
          </div>
        </section>

        {/* Collaborate Section */}
        <section
          className="collaborateSection px-4 py-10 md:py-24 lg:px-24 text-dark-gray font-roboto border-b border-dark-gray overf"
          id="collaborate"
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap w-full mb-12 items-center">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                {/* Section Heading */}
                <h3 className="text-2xl sm:text-5xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray">
                  Join My Collaborative Team
                </h3>
              </div>
              <p className="w-full lg:w-1/2 leading-relaxed text-light-gray">
                {/* Section Description */}
                Are you a passionate frontend developer, backend engineer, UI/UX
                designer, or someone with other relevant skills? I`&#39;`m a solo
                member looking to form a collaborative team to bring innovative
                projects to life. If you`&#39;`re enthusiastic about creating
                exceptional web experiences and want to be part of a dynamic
                team, let`&#39;`s join forces and make a positive impact in the
                digital world together.
              </p>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap lg:gap-x-8 gap-y-8">
              <div className="p-3 md:flex-1 flex flex-col items-start border border-dark-gray">
                {/* Contact Form */}
                <div className="container py-8 mx-auto font-roboto">
                  <div className="flex flex-col text-center w-full">
                    {/* Form Heading */}
                    <h4 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-500">
                      Join My Team
                    </h4>
                  </div>
                  <form onSubmit={sendForm}>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                      {/* Full Name Input */}
                      <div className="relative flex-grow w-full">
                        <label
                          htmlFor="name"
                          className="leading-7 text-base font-semibold text-white"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={field.name}
                          onChange={handleInputField}
                          className="w-full bg-transparent  rounded border border-dark-gray focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-500 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      {/* Email Input */}
                      <div className="relative flex-grow w-full">
                        <label
                          htmlFor="email"
                          className="leading-7 text-base font-semibold text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={field.email}
                          onChange={handleInputField}
                          className="w-full bg-transparent  rounded border border-dark-gray focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-purple-500 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      {/* Submit Button */}
                      <Mybutton label={"Send"} size={"large"} type={"Submit"} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  // Define the API endpoints for projects and blog posts
  const projectApi = "http://127.0.0.1:1337/api/projects?populate=*";
  const blogpostApi = "http://127.0.0.1:1337/api/blog-posts/?populate=*";

  // Set the authorization header using the API token from environment variables
  const header = {
    Authorization: `Bearer ${process.env.PROJECT_API_TOKEN}`,
  };

  try {
    // Fetch project data from the project API using axios
    const response1 = await axios.get(projectApi, { headers: header });
    const projectData = response1.data;

    // Fetch blog post data from the blog post API using axios
    const response2 = await axios.get(blogpostApi, { headers: header });
    const blogData = response2.data;

    // Return the fetched data as props to be used in the component
    return {
      props: {
        projectData,
        blogData,
      },
    };
  } catch (error) {
    // Handle errors if data fetching fails
    console.error("Error fetching data:", error.message);

    // Return empty data as props in case of an error
    return {
      props: {
        projectData: [],
        blogData: [],
      },
    };
  }
}
