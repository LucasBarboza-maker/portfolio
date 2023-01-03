import { FaLinkedin, FaGithub, FaHackerrank, FaBook } from "react-icons/fa";
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai'

import eng from './data/langs/eng.json';
import port from './data/langs/port.json';
import { useState } from "react";


function App() {

  const [lang, setLang] = useState(port);

  function goTo(link: string){
    window.open(link, '_blank');
  }

  return (
    <div>
      <div className="flex flex-row absolute right-0">
        <img
          width={32}
          style={{cursor:"pointer"}}
          onClick={() => {setLang(eng)}}
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" />
        <img
          style={{cursor:"pointer"}}
          onClick={() => {setLang(port)}}
          width={32}
          alt="Brasil"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" />
      </div>

      <div className="bg-computer bg-no-repeat bg-cover bg-center bg-fixed w-full flex flex-col h-80vh">
        <div className="h-20vh flex justify-center items-start">
          <svg width="70" className="mt-3" height="70" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.732 12.024C4.652 12.104 4.552 12.152 4.432 12.168C3.944 12.232 3.2 12.264 2.2 12.264L0.796 12.24C0.676 12.232 0.616 12.176 0.616 12.072L0.64 11.952C0.752 11.68 0.912 11.308 1.12 10.836C1.336 10.364 1.784 9.496 2.464 8.232C3.144 6.96 3.84 5.8 4.552 4.752C5.28 3.696 5.756 3.08 5.98 2.904C6.084 2.816 6.18 2.772 6.268 2.772C6.332 2.772 6.364 2.808 6.364 2.88C6.364 3.008 6.256 3.292 6.04 3.732C5.824 4.172 5.636 4.528 5.476 4.8C3.612 8.16 2.452 10.44 1.996 11.64C1.988 11.664 1.984 11.688 1.984 11.712C1.984 11.848 2.124 11.916 2.404 11.916C2.948 11.916 3.452 11.74 3.916 11.388C4.604 10.836 5.22 10.208 5.764 9.504C5.828 9.44 5.892 9.408 5.956 9.408C6.02 9.408 6.052 9.448 6.052 9.528C6.052 9.608 6.008 9.748 5.92 9.948C5.4 11.076 5.004 11.768 4.732 12.024Z" fill="white"></path>
            <path d="M8.22 12.324C7.78 12.324 7.448 12.216 7.224 12C7 11.784 6.888 11.484 6.888 11.1L6.912 10.836C6.912 10.772 6.896 10.74 6.864 10.74L6.792 10.788C6.6 11.108 6.4 11.404 6.192 11.676C5.984 11.94 5.824 12.128 5.712 12.24L5.544 12.396C5.432 12.5 5.348 12.552 5.292 12.552C5.236 12.552 5.208 12.504 5.208 12.408C5.208 12.28 5.248 12.124 5.328 11.94C5.448 11.676 5.616 11.324 5.832 10.884C6.04 10.436 6.46 9.648 7.092 8.52C7.732 7.384 8.352 6.384 8.952 5.52C9.56 4.64 10.032 4.04 10.368 3.72C10.488 3.6 10.58 3.54 10.644 3.54C10.684 3.54 10.704 3.572 10.704 3.636C10.704 3.652 10.696 3.708 10.68 3.804C10.608 4.124 10.324 4.712 9.828 5.568C8.836 7.184 8.116 8.496 7.668 9.504C7.372 10.072 7.224 10.596 7.224 11.076C7.224 11.348 7.296 11.572 7.44 11.748C7.584 11.916 7.784 12 8.04 12C8.408 12 8.764 11.852 9.108 11.556C9.46 11.26 9.752 10.904 9.984 10.488C10.216 10.072 10.404 9.648 10.548 9.216C10.692 8.784 10.764 8.42 10.764 8.124C10.764 7.412 10.436 6.98 9.78 6.828C9.772 6.796 9.768 6.764 9.768 6.732C9.768 6.636 9.824 6.58 9.936 6.564C10.552 6.564 11.1 6.336 11.58 5.88C12.06 5.416 12.3 4.884 12.3 4.284C12.3 3.948 12.176 3.652 11.928 3.396C11.68 3.132 11.22 3 10.548 3C9.82 3 9.232 3.2 8.784 3.6C8.336 4 8.112 4.456 8.112 4.968C8.112 5.112 8.14 5.244 8.196 5.364C8.228 5.428 8.244 5.48 8.244 5.52C8.244 5.568 8.22 5.592 8.172 5.592C8.132 5.592 8.096 5.584 8.064 5.568C8.008 5.544 7.94 5.512 7.86 5.472C7.78 5.432 7.672 5.332 7.536 5.172C7.408 5.012 7.344 4.836 7.344 4.644C7.344 4.116 7.668 3.664 8.316 3.288C8.964 2.904 9.748 2.712 10.668 2.712C10.764 2.712 10.872 2.716 10.992 2.724C11.12 2.732 11.324 2.768 11.604 2.832C11.884 2.896 12.128 2.984 12.336 3.096C12.552 3.2 12.744 3.368 12.912 3.6C13.08 3.832 13.164 4.104 13.164 4.416C13.164 4.744 13.084 5.048 12.924 5.328C12.772 5.6 12.564 5.832 12.3 6.024C12.044 6.208 11.772 6.36 11.484 6.48C11.204 6.6 10.912 6.692 10.608 6.756C10.552 6.78 10.524 6.804 10.524 6.828C10.524 6.844 10.548 6.864 10.596 6.888C10.62 6.904 10.656 6.924 10.704 6.948C10.752 6.972 10.832 7.036 10.944 7.14C11.064 7.244 11.168 7.36 11.256 7.488C11.352 7.608 11.436 7.776 11.508 7.992C11.58 8.208 11.616 8.436 11.616 8.676C11.616 9.596 11.272 10.436 10.584 11.196C9.904 11.948 9.116 12.324 8.22 12.324Z" fill="white"></path>
          </svg>
        </div>
        <div className="flex flex-col content-center items-center">
          <h1 className="text-red-50 text-6xl	font-roboto font-medium text-center">LUCAS BARBOZA</h1>
          <span className="text-red-50">DEVELOPER, DESIGNER, FULLSTACK</span>
        </div>
        <div className="h-20vh flex text-primary self-center w-64 justify-between items-center">
          <button>
            <FaLinkedin onClick={() => goTo("https://www.linkedin.com/in/lucas-barboza-7a23551a5/")} size={42} style={{ cursor: 'pointer' }} />
          </button>
          <button onClick={() => goTo("https://github.com/LucasBarboza-maker")}>
            <FaGithub size={42} style={{ cursor: 'pointer' }} />
          </button>
          <button>
            <FaHackerrank size={42} onClick={() => goTo("https://www.hackerrank.com/LucasBarboza")} style={{ cursor: 'pointer' }} />
          </button>
          <button>
            <MdEmail size={42} onClick={() => goTo("mailto:lucasrb18@gmail.com")} style={{ cursor: 'pointer' }} />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-profile bg-no-repeat bg-cover rounded-full border-4 border-white translate-y-20	"></div>
        </div>
      </div>
      <div className="bg-sectionBackground pb-10">
        <div className="h-28 w-full"></div>
        <div className="flex items-center flex-col justify-center">
          <div className="flex flex-col items-center w-5/6">
            <h1 className="text-red-50 text-4xl	font-roboto font-medium mb-10">{lang.aBit}</h1>
            <span className="text-center text-primary mb-5">{lang.iama}</span>
            <span className="text-red-50 text-center">{lang.hello}
            </span>
          </div>
          <div className="w-full flex flex-col items-center justify-around mt-10 sm:flex-row">
            <article className=" p-6 flex items-center flex-col w-80">
              <div className="rounded-full border-2 mb-4 border-primary p-7">
                <FaBook size={32} className="text-primary" />
              </div>
              <div className="h-40 flex flex-col items-center"><span className="text-3xl text-red-50 mb-2 mt-2">{lang.learning}</span><span className="text-red-50 text-center">{lang.learning_Text}</span></div>
            </article>
            <article className="break-inside p-6 rounded-xl flex items-center flex-col bg-clip-border w-80">
              <div className="rounded-full border-2 mb-4 border-primary p-7">
                <AiFillCode size={32} className="text-primary" />
              </div>
              <div className="h-40 flex flex-col items-center"><span className="text-3xl text-red-50 mb-2 mt-2">{lang.coding}</span><span className="text-red-50 text-center">{lang.coding_Text}</span></div>
            </article>
            <article className="break-inside p-6 rounded-xl flex items-center flex-col bg-clip-border w-80">
              <div className="rounded-full border-2 mb-4 border-primary p-7">
                <BsFillArrowUpRightSquareFill size={32} className="text-primary" />
              </div>
              <div className="h-40 flex flex-col items-center"><span className="text-3xl text-red-50 mb-2 mt-2">{lang.improving}</span><span className="text-red-50 text-center">{lang.improving_text}</span></div>
            </article>
          </div>
        </div>
      </div>
      <div className="bg-programming bg-no-repeat bg-cover bg-center w-full ">
        <div className="flex justify-center items-center flex-col p-10">
          <h1 className="text-red-50 text-4xl	font-roboto font-medium">{lang.mySkills}</h1>
          <span className="text-center text-red-50">{lang.mySkills_subtitle}</span>
        </div>
        <div className="flex justify-around flex-wrap">
          <div className="w-full p-10 flex flex-col sm:w-2/4">
            <div className="flex items-center mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-white text-3xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
              </svg>
              <span className="text-white text-3xl ">REACTJS</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
              <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>
          <div className="w-full p-10 flex flex-col sm:w-2/4">
            <div className="flex items-center mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-white text-3xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
              </svg>
              <span className="text-white text-3xl ">NODEJS</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
              <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>
          <div className="w-full p-10 flex flex-col sm:w-2/4">
            <div className="flex items-center mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-white text-3xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
              </svg>
              <span className="text-white text-3xl ">JS/TS</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
              <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '85%' }}>85%</div>
            </div>
          </div>
          <div className="w-full p-10 flex flex-col sm:w-2/4">
            <div className="flex items-center mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" className="text-white text-3xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path>
              </svg>
              <span className="text-white text-3xl ">MONGODB</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
              <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '75%' }}> 75%</div>
            </div>
          </div>
          <div className="w-full p-10 flex flex-col sm:w-2/4">
            <div className="flex items-center mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" className="text-white text-3xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.082 5.593c-0.564 0.564-0.423 1.213 0.564 2.679 0.508 0.761 1.1 1.946 1.326 2.623 0.226 0.705 0.677 1.664 0.987 2.143 0.564 0.79 0.564 0.959 0.197 2.397-0.226 0.902-0.31 2.031-0.197 2.736 0.169 1.185 1.128 2.905 1.72 3.102 0.508 0.169 1.241-0.733 1.269-1.551 0-0.705 0.028-0.733 0.338-0.226 0.536 0.874 2.228 2.735 2.369 2.594 0.056-0.056-0.31-0.79-0.846-1.607-0.508-0.846-1.1-1.946-1.325-2.454-0.31-0.846-0.423-0.902-0.79-0.508-0.226 0.226-0.508 0.874-0.592 1.466-0.226 1.354-0.733 1.523-1.128 0.367s-0.395-3.131 0-4.484c0.282-0.931 0.254-1.184-0.226-1.89-0.31-0.423-0.79-1.438-1.044-2.256-0.254-0.79-0.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115 0.056-1.89 0.479 0.085 1.213 0.423 1.664 0.733 0.423 0.31 1.156 0.564 1.607 0.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241 0.423 3.835 2.002 3.835 2.341 0 0.113-0.649 0.282-1.438 0.338-2.115 0.226-2.313 0.62-0.931 1.861 0.649 0.564 1.862 1.438 2.736 1.918l1.579 0.902-0.733-0.931c-0.423-0.508-1.297-1.297-1.974-1.72s-1.213-0.874-1.213-0.987c0-0.113 0.479-0.31 1.072-0.395 1.579-0.282 2.030-0.423 2.030-0.705 0-0.423-2.848-2.566-4.202-3.159-1.156-0.536-1.297-0.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-0.649-0.113-1.551-0.451-1.946-0.733-0.931-0.705-2.82-0.959-3.272-0.479z"></path>
              </svg>
              <span className="text-white text-3xl ">MYSQL</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
              <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>
          <div className="w-full p-10 flex flex-col sm:w-2/4">
            <div className="flex items-center mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" className="text-white text-3xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"></path>
              </svg>
              <span className="text-white text-3xl ">FIGMA</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
              <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '70%' }}> 70%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sectionBackground bg-no-repeat bg-cover bg-center w-full ">
        <div className="flex justify-center items-center flex-col pt-10">
          <h1 className="text-red-50 text-4xl	font-roboto font-medium">{lang.myTragetory}</h1>
          <span className="text-center text-red-50">{lang.myTragetory_subtitle}</span>
        </div>
        <div className="w-full p-14 flex justify-between">
          <div className="w-full flex flex-wrap">
            <div className=" border-r-2 border-zinc-700 w-full md:w-1/4">
              <div><span className="text-primary border-primary text-2xl border-2 p-2">{lang.college}</span></div>
              <div className="mt-10 border-b-2  border-zinc-700 pb-2 pr-2">
                <p className="text-zinc-100 text-1xl ">FAETERJ</p>
                <p className="text-zinc-100 text-md text-justify">{lang.college_subtitle}</p>
              </div>
              <div className="pt-2 pb-2 flex justify-start">
                <div className="flex flex-col items-start">
                  <span className="text-zinc-100 text-md ">{lang.from}</span>
                  <p className="text-zinc-100 text-2xl">2017-</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-zinc-100 text-md ">{lang.to}</p>
                  <p className="text-zinc-100 text-2xl ">2023</p>
                </div>
              </div>
            </div>
            <div className=" p-1 w-full md:w-1/4 md:p-10">
              <p className="text-zinc-100 text-md text-justify">{lang.college_description}</p>
            </div>
            <div className=" border-r-2 mt-10 border-zinc-700 w-full md:w-1/4 md:mt-0">
              <div><span className="text-primary border-primary text-2xl border-2 p-2">HACKERRANK</span></div>
              <div className="pt-10 border-b-2 pb-2 pr-2 border-zinc-700">
                <p className="text-zinc-100 text-1xl ">{lang.hackerrank_certificate_name}</p>
                <p className="text-zinc-100 text-md  text-left sm:text-justify">{lang.hackerrank_subtitle}</p>
              </div>
              <div className="pt-2 pb-2 flex justify-start">
                <div className="flex flex-col items-start">
                  <span className="text-zinc-100 text-md ">{lang.from}</span>
                  <p className="text-zinc-100 text-2xl">2022-</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-zinc-100 text-md ">{lang.to}</p>
                  <p className="text-zinc-100 text-2xl ">{lang.now}</p>
                </div>
              </div>
            </div>
            <div className=" p-1 w-full md:w-1/4 md:p-10">
              <p className="text-zinc-100 text-md text-justify">{lang.hackerrank_description}</p>
            </div>
          </div>
        </div>
        <div className="w-full p-14 pt-5 flex justify-between">
          <div className="w-full flex flex-wrap">
            <div className=" border-r-2 border-zinc-700 w-full md:w-1/4">
              <div><span className="text-primary border-primary text-2xl border-2 p-2">{lang.fullstack_1}</span></div>
              <div className="mt-10 border-b-2  border-zinc-700  pb-2 pr-2">
                <p className="text-zinc-100 text-1xl ">{lang.fullstack_1_job_title}</p>
                <p className="text-zinc-100 text-md text-justify">{lang.fullstack_1_job_subtitle}</p>
              </div>
              <div className="pt-2 pb-2 flex justify-start">
                <div className="flex flex-col items-start">
                  <span className="text-zinc-100 text-md ">{lang.from}</span>
                  <p className="text-zinc-100 text-2xl">2021-</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-zinc-100 text-md ">{lang.to}</p>
                  <p className="text-zinc-100 text-2xl ">2022</p>
                </div>
              </div>
            </div>
            <div className=" p-1 w-full md:w-1/4 md:p-10">
              <p className="text-zinc-100 text-md text-justify">{lang.fullstack_1_description}</p>
            </div>
            <div className=" border-r-2 mt-10 border-zinc-700 w-full md:w-1/4 md:mt-0">
              <div><span className="text-primary border-primary text-2xl border-2 p-2">{lang.fullstack_2}</span></div>
              <div className="pt-10 border-b-2 pb-2 pr-2 border-zinc-700">
                <p className="text-zinc-100 text-1xl ">{lang.fullstack_2_job_title}</p>
                <p className="text-zinc-100 text-md text-justify">{lang.fullstack_2_job_subtitle}</p>
              </div>
              <div className="pt-2 pb-2 flex justify-start">
                <div className="flex flex-col items-start">
                  <span className="text-zinc-100 text-md ">{lang.from}</span>
                  <p className="text-zinc-100 text-2xl">JUL 2022-</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-zinc-100 text-md ">{lang.to}</p>
                  <p className="text-zinc-100 text-2xl ">{lang.now}</p>
                </div>
              </div>
            </div>
            <div className=" p-1 w-full md:w-1/4 md:p-10">
              <p className="text-zinc-100 text-md text-justify">{lang.fullstack_2_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
