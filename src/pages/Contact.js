import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 min-h-screen flex items-center relative overflow-hidden space-background">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Contact</h2>
        <div className="flex flex-col md:flex-col gap-12">
          <div className="w-full bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-6 text-white">Get in Touch</h3>
            <form
              action="https://formspree.io/f/xzzdznan" // Replace with your Formspree endpoint
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-gray-700 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm h-32 resize-none bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-full bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-xl mb-6 text-white">Connect</h3>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/chittaranjan-t-03tc27/"
                className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 font-medium text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/CRCHINTU03"
                className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300 font-medium text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;