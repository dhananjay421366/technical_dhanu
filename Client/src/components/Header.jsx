import React from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className="sticky top-0 mt-0">
        <div className=" krpsTW ">
          <div className="flex justify-between items-center">
            <a className="flex justify-center items-center gap-2" href="/">
              <img
                alt="Thapa Technical Logo"
                width="47"
                height="47"
                className="site-logo hlogo"
                src="https://thapatechnical.shop/_next/image?url=%2Flogo.png&w=48&q=75"
              />
              <div className="">
                <span>Nimbalkar</span>
                <br />
                <span className="text-orange-400">Technical</span>
              </div>
            </a>
            <button className="sc-7b7f44a-3 dKObqI" aria-label="Toggle Navbar">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className="">
              <ul className="md:flex justify-center items-center hidden  gap-10">
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="" href="/source-code">
                    Source Code
                  </a>
                </li>
                <li>
                  <a className="" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="" href="/courses">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="" href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a className="" href="/signup">
                    Signup
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* hero section */}
      <section>
        <div class="container p-8 grid md:grid-cols-2 text-start gap-44">
          <div class="gFkwZD  flex justify-center items-start">
            <p class="text-orange-600 page-title">Hello and Welcome</p>
            <h1 class="text-4xl main-tagline">
              I am<span class="text-orange-400"> Dhananjay Dadasaheb Nimbalkar </span>aka
              Dhanu Technical
            </h1>
            <p class="main-description">
              <span>
                This website is all about Website Development, Technical, Tips
                and Tricks, Designs Principle, Source Code sales and Programming
                videos in the Hindi Language.
              </span>
            </p>
            <div class="sc-4b3fecda-1 flex justify-start items-center gap-5 mt-3 cppBpY">
              <a
                target="_blank"
                class="sc-3ea3d76-0 btn large primary "
                href="https://www.youtube.com/@ThapaTechnical"
              >
                See my works
              </a>
              <a
                target="_blank"
                class="sc-3ea3d76-0 btn "
                href="https://www.youtube.com/@ThapaTechnical"
              >
                Visit YouTube
              </a>
            </div>
          </div>
          {/* img section */}
          <div class="sc-4b3fecda-2 XQsAB">
            <div class="hero-image--div">
              <img
                alt="profile_photo"
                width="300"
                height="300"
                 src="/public/my-image.jpg"
                class="hero-image"
              
              />
            </div>
          </div>
        </div>
        <div class="sc-4b3fecda-3 ezmeoj container section__two-column even-column  ">
          <p>Keep Scrolling</p>
          <ul className="flex justify-center flex-col md:flex-row  items-center gap-6 md:gap-10  ">
            <li>
              <a
                target="_blank"
                className="text-orange-500"
                href="https://www.instagram.com/thapatechnical/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                  className="text-orange-500"
                href="https://www.instagram.com/thapatechnical/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank"
                className="text-orange-500"
              href="https://twitter.com/vb55thapa">
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" 
                className="text-orange-500"
              href="https://discord.gg/MdScmCsua6">
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
