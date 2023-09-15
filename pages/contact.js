import Mybutton from "@/components/Mybutton";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [field, setField] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setField((prevFields) => ({ ...prevFields, [name]: value }));
  };


  const sendContactForm = async (e) => {
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
        phone: "",
        email: "",
        message: "",
      });

      // Handle success or show a success message to the user
      alert("Message sent successfully. Thank you!");
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <>
      <section className=" latestWorkSection px-24 md:py-24 py-10 max-sm:px-4 max-lg:px-8 text-dark-gray font-roboto  border-b border-dark-gray bg-dark-black">
        <div className="flex flex-wrap items-center w-full mb-14">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            {/* Latest Work Heading */}
            <h3 className="sm:text-5xl text-2xl font-semibold font-bellefair title-font mb-2 text-purple-500 border w-fit p-3 border-dark-gray ">
              Contact Me
            </h3>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-light-gray">
          Get in touch with us! Your thoughts matter. Whether you have a question, idea, or just want to say hello, we're all ears. Reach out through the contact form, drop us an email, or give us a call. We're here to make connections and help you out!
          </p>
        </div>
        <div className="container   mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-dark-black  overflow-hidden sm:mr-10 p-10 hidden items-end justify-start relative md:flex ">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13997.394903140885!2d77.27499585!3d28.709122549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692455354525!5m2!1sen!2sin"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-dark-black relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-light-gray tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-white text-base">
                  F-389, Street No.6 Ganga Vihar Delhi-110094 India
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-light-gray tracking-widest text-xs">
                  EMAIL
                </h2>
                <Link
                  href={"mailto:im.vashukashyap@gmail.com"}
                  className="text-white hover:text-purple-500 transition-colors duration-300 ease-in-out leading-relaxed text-base"
                >
                  im.vashukashyap@gmail.com
                </Link>
                <h2 className="title-font font-semibold text-light-gray tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-white text-base">
                  +918287651128
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-dark-black flex flex-col md:ml-auto w-full md:py-8  md:mt-0 border border-dark-gray p-3 ">
            <form onSubmit={sendContactForm}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7  text-white text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={field.name}
                  onChange={handleInputField}
                  required
                  minLength={3}
                  maxLength={20}
                  pattern="^[A-Za-z]{3,20}$"
                  placeholder="Doe"
                  title="Please enter a name between 3 and 20 characters containing only letters."
                  className="w-full bg-transparent rounded border border-dark-gray focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7  text-white text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={field.email}
                  onChange={handleInputField}
                  required
                  minLength={3}
                  maxLength={320}
                  pattern="^^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                  placeholder="example@example.com"
                  title="Please provide a valid email address in the correct format (e.g., example@example.com)."
                  className="w-full bg-transparent rounded border border-dark-gray focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7  text-white text-base"
                >
                  Phone No
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={field.phone}
                  onChange={handleInputField}
                  required
                  minLength={10}
                  maxLength={10}
                  placeholder="123-456-7890"
                  pattern="^(?:\+\d{1,4})?\d{10}$"
                  title="Please provide a valid phone number (e.g., +911234567890, 1234567890)."
                  className="w-full bg-transparent rounded border border-dark-gray focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7  text-white text-base"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={field.message}
                  onChange={handleInputField}
                  required
                  minLength={1}
                  maxLength={5000}
                  pattern="^[A-Za-z0-9\s]{1,5000}$"
                  title="Please enter a message between 1 and 5000 characters containing only letters."
                  placeholder="Feel free to ask us anything!"
                  className="w-full bg-transparent rounded border border-dark-gray focus:border-purple-500 focus:ring-2 focus:ring-purple-500 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <Mybutton label={"Send"} type={"Submit"} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
