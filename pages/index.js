import React from "react";
import Head from "next/head";
import Image from "next/image";
import Mybutton from "../components/Mybutton";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>Dev.Vashu - A Front-End Web </title>
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
            <Link href={"#about-me"} scroll={true}>
              <Mybutton label={"Get Cv"} size={"large"} />
            </Link>
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
                I'm Vashu &
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
                <Mybutton label="Hire Me" />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Work Section */}
        <section
          className="latestWorkSection px-24 md:py-24 py-10 max-sm:px-4 max-lg:px-8 text-dark-gray font-roboto min-h-screen border-b border-dark-gray"
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
                Explore my freshest frontend work! I've woven together
                creativity and code to craft an immersive web app. Dive in now
                to witness innovation in action
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {/* Individual Work Items */}
              <div className="xl:w-1/4 md:w-1/2 p-4 mb-16">
                <div className="bg-transparent border border-dark-gray p-3  ">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/pexels.jpeg"
                    alt="content"
                    height={401}
                    width={701}
                  />
                  <h3 className="tracking-widest text-light-gray text-xs font-medium title-font">
                    Html
                  </h3>
                  <h2 className="text-lg text-purple-500 font-medium title-font mb-4">
                    Great Pyramid of Giza
                  </h2>
                  <p className="leading-relaxed text-base text-white">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  <div className="btngroup mt-2 space-x-4">
                    <Mybutton label={"View"} size={"small"} />
                    <Mybutton label={"Source Code"} size={"small"} />
                  </div>
                </div>
              </div>
              {/* Repeat the above structure for other work items */}
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
              <Mybutton label={"Explore More"} />
            </div>
          </div>
        </section>

        {/* Latest Blog Section */}
        <section
          className="latestBlogSection px-4 py-10 md:py-24 lg:px-24 text-dark-gray font-roboto border-b border-dark-gray"
          id="latest-blog"
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap w-full mb-12 items-center">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h3 className="text-2xl sm:text-5xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray">
                  My Latest Blog
                </h3>
              </div>
              <p className="w-full lg:w-1/2 leading-relaxed text-light-gray">
                Welcome to the Latest Blog section—a special spot where I
                explain frontend details, provide tips, and showcase what's new.
                Explore user-friendly design, discover fresh web development
                ideas, and stay up-to-date in the ever-changing digital world.
              </p>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap lg:gap-x-8 gap-y-8">
              <div className="p-3 md:flex-1 flex flex-col items-start border border-dark-gray">
                <span className="inline-block py-1 px-2 rounded text-light-gray text-xs font-medium tracking-widest">
                  Category
                </span>
                <h4 className="text-2xl sm:text-3xl font-semibold text-purple-500 my-4">
                  Roof party normcore before they sold out, cornhole vape
                </h4>
                <p className="leading-relaxed text-white">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug
                  you probably haven't heard of them hexagon kickstarter craft
                  beer pork chic.
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-dark-gray mt-8 w-full">
                  <Mybutton label="Read More" />
                </div>
                <a className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/104x104"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-purple-500">
                      Vashu Kashyap
                    </span>
                    <span className="text-light-gray text-xs tracking-widest mt-0.5">
                      UI DEVELOPER
                    </span>
                  </span>
                </a>
              </div>
              <div className="p-3 md:flex-1 flex flex-col items-start border border-dark-gray">
                <span className="inline-block py-1 px-2 rounded text-light-gray text-xs font-medium tracking-widest">
                  Category
                </span>
                <h4 className="text-2xl sm:text-3xl font-semibold text-purple-500 my-4">
                  Roof party normcore before they sold out, cornhole vape
                </h4>
                <p className="leading-relaxed text-white">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug
                  you probably haven't heard of them hexagon kickstarter craft
                  beer pork chic.
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-dark-gray mt-8 w-full">
                  <Mybutton label="Read More" />
                </div>
                <a className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/104x104"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-purple-500">
                      Vashu Kashyap
                    </span>
                    <span className="text-light-gray text-xs tracking-widest mt-0.5">
                      UI DEVELOPER
                    </span>
                  </span>
                </a>
              </div>
              {/* Repeat this structure for other blog entries */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
