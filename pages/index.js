// import dynamic from 'next/dynamic'
// import Head from 'next/head'
// import { Fragment } from 'react'

// import About from '@/sections/about'
// import Education from '@/sections/education'
// import Experience from '@/sections/experience'
// const Navbar = dynamic(() => import('@/layout/navbar/Navbar'))
// const Footer = dynamic(() => import('@/layout/footer/Footer'))
// const Intro = dynamic(() => import('@/sections/Intro'))
// const Skills = dynamic(() => import('@/sections/Skills'))
// const Projects = dynamic(() => import('@/sections/Projects'))
// const Apps = dynamic(() => import('@/sections/Apps'))
// const SendMail = dynamic(() => import('@/utils/SendMail'))
// const SocialMedia = dynamic(() => import('@/utils/SocialMedia')) 
// const ChatSystem = dynamic(() => import('@/utils/ChatSystem'))
// import elias from "../public/images/elias1.jpg"

// const Home = () => {
//   return (
//     <Fragment>
//       <Head>
//         <title>Elias Portfolio</title>
//         {/* <!-- Primary Meta Tags --> */}
//         <meta content="Elias Portfolio" name="title" />
//         <meta
//           content="Explore the best Next.js and React.js portfolio . Featuring simple, dark and light theme designs and mobile responsiveness."
//           name="description"
//         />

//         {/* <!-- Open Graph / Facebook --> */}
//         <meta content="website" property="og:type" />
      
//         <meta content="elias Portfolio" property="og:title" />
//         <meta
//           content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."
//           property="og:description"
//         />
//         <meta
//           content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
//           property="og:image"
//         />

//         {/* <!-- Twitter --> */}
//         <meta
//           content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
//           property="twitter:card"
//         />
//         <meta
//           content="https://shiv-s-portfolio.vercel.app"
//           property="twitter:url"
//         />
//         <meta content="Elias Chane - Portfolio" property="twitter:title" />
//         <meta
//           content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."
//           property="twitter:description"
//         />
//         <meta
//           content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
//           property="twitter:image"
//         />

//         {/* <!-- Other Meta Tags --> */}
//         <meta
//           content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan"
//           name="keywords"
//         />
//         <meta content="Elias Chane" name="author" />
//         <meta content="width=device-width, initial-scale=1.0" name="viewport" />

//         {/* <!-- Favicon --> */}
//         <link
//           href={elias}
//           rel="icon"
//           type="image/x-icon"
//         />
//       </Head>
//       <div>
//         <div>
//           {/* Desktop Navbar */}
//           <Navbar />
//           {/* Welcome Page */}
//           <Intro />
//           {/* About */}
//           <About />
//           {/* Skills  */}
//           <Skills />
//           {/* Education */}
//           <Education />
//           {/* Experience */}
//           <Experience />
//           {/* Projects */}
//           <Projects />
//           {/* SocialMedia */}
//           <SocialMedia />
//           {/* Apps */}
//           <Apps />
//           {/* Send Mail */}
//           <SendMail />
//           {/* Footer */}
//           <Footer />
//           <div className="z-40">
//             {/* tawk.to Chat System */}
//             <ChatSystem />
//           </div>
  
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// export default Home




import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Fragment } from 'react';

import About from '@/sections/about';
import Education from '@/sections/education';
import Experience from '@/sections/experience';
const Navbar = dynamic(() => import('@/layout/navbar/Navbar'));
const Footer = dynamic(() => import('@/layout/footer/Footer'));
const Intro = dynamic(() => import('@/sections/Intro'));
const Skills = dynamic(() => import('@/sections/Skills'));
const Projects = dynamic(() => import('@/sections/Projects'));
const Apps = dynamic(() => import('@/sections/Apps'));
const SendMail = dynamic(() => import('@/utils/SendMail'));
const SocialMedia = dynamic(() => import('@/utils/SocialMedia'));
const ChatSystem = dynamic(() => import('@/utils/ChatSystem'));
const Feedback = dynamic(() => import('@/utils/Feedback'));
import elias from "../public/images/elias1.jpg";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Elias Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Elias Portfolio" name="title" />
        <meta
          content="Explore the best Next.js and React.js portfolio . Featuring simple, dark and light theme designs and mobile responsiveness."
          name="description"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="elias Portfolio" property="og:title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."
          property="og:description"
        />
        <meta
          content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
          property="og:image"
        />

        {/* <!-- Twitter --> */}
        <meta
          content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
          property="twitter:card"
        />
        <meta
          content="https://shiv-s-portfolio.vercel.app"
          property="twitter:url"
        />
        <meta content="Elias Chane - Portfolio" property="twitter:title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."
          property="twitter:description"
        />
        <meta
          content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"
          property="twitter:image"
        />

        {/* <!-- Other Meta Tags --> */}
        <meta
          content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan"
          name="keywords"
        />
        <meta content="Elias Chane" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        <link href={elias} rel="icon" type="image/x-icon" />
      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />
          {/* Apps */}
          <Apps />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
          {/* Feedback Modal */}
          {/* <Feedback />
         
          <ShoveeModal /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;