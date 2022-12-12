import { FaLinkedin, FaGithub, FaHackerrank, FaBook, FaReact, FaNodeJs, FaJs, FaFigma } from "react-icons/fa";
import { DiMongodb, DiMysql } from 'react-icons/di'


const App = () => (
  <div>
    <div className="bg-computer bg-no-repeat bg-cover bg-center bg-fixed w-full flex flex-col h-80vh">
      <div className="h-20vh flex justify-center items-start">
        <svg width="70" className="mt-3" height="70" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.732 12.024C4.652 12.104 4.552 12.152 4.432 12.168C3.944 12.232 3.2 12.264 2.2 12.264L0.796 12.24C0.676 12.232 0.616 12.176 0.616 12.072L0.64 11.952C0.752 11.68 0.912 11.308 1.12 10.836C1.336 10.364 1.784 9.496 2.464 8.232C3.144 6.96 3.84 5.8 4.552 4.752C5.28 3.696 5.756 3.08 5.98 2.904C6.084 2.816 6.18 2.772 6.268 2.772C6.332 2.772 6.364 2.808 6.364 2.88C6.364 3.008 6.256 3.292 6.04 3.732C5.824 4.172 5.636 4.528 5.476 4.8C3.612 8.16 2.452 10.44 1.996 11.64C1.988 11.664 1.984 11.688 1.984 11.712C1.984 11.848 2.124 11.916 2.404 11.916C2.948 11.916 3.452 11.74 3.916 11.388C4.604 10.836 5.22 10.208 5.764 9.504C5.828 9.44 5.892 9.408 5.956 9.408C6.02 9.408 6.052 9.448 6.052 9.528C6.052 9.608 6.008 9.748 5.92 9.948C5.4 11.076 5.004 11.768 4.732 12.024Z" fill="white" />
          <path d="M8.22 12.324C7.78 12.324 7.448 12.216 7.224 12C7 11.784 6.888 11.484 6.888 11.1L6.912 10.836C6.912 10.772 6.896 10.74 6.864 10.74L6.792 10.788C6.6 11.108 6.4 11.404 6.192 11.676C5.984 11.94 5.824 12.128 5.712 12.24L5.544 12.396C5.432 12.5 5.348 12.552 5.292 12.552C5.236 12.552 5.208 12.504 5.208 12.408C5.208 12.28 5.248 12.124 5.328 11.94C5.448 11.676 5.616 11.324 5.832 10.884C6.04 10.436 6.46 9.648 7.092 8.52C7.732 7.384 8.352 6.384 8.952 5.52C9.56 4.64 10.032 4.04 10.368 3.72C10.488 3.6 10.58 3.54 10.644 3.54C10.684 3.54 10.704 3.572 10.704 3.636C10.704 3.652 10.696 3.708 10.68 3.804C10.608 4.124 10.324 4.712 9.828 5.568C8.836 7.184 8.116 8.496 7.668 9.504C7.372 10.072 7.224 10.596 7.224 11.076C7.224 11.348 7.296 11.572 7.44 11.748C7.584 11.916 7.784 12 8.04 12C8.408 12 8.764 11.852 9.108 11.556C9.46 11.26 9.752 10.904 9.984 10.488C10.216 10.072 10.404 9.648 10.548 9.216C10.692 8.784 10.764 8.42 10.764 8.124C10.764 7.412 10.436 6.98 9.78 6.828C9.772 6.796 9.768 6.764 9.768 6.732C9.768 6.636 9.824 6.58 9.936 6.564C10.552 6.564 11.1 6.336 11.58 5.88C12.06 5.416 12.3 4.884 12.3 4.284C12.3 3.948 12.176 3.652 11.928 3.396C11.68 3.132 11.22 3 10.548 3C9.82 3 9.232 3.2 8.784 3.6C8.336 4 8.112 4.456 8.112 4.968C8.112 5.112 8.14 5.244 8.196 5.364C8.228 5.428 8.244 5.48 8.244 5.52C8.244 5.568 8.22 5.592 8.172 5.592C8.132 5.592 8.096 5.584 8.064 5.568C8.008 5.544 7.94 5.512 7.86 5.472C7.78 5.432 7.672 5.332 7.536 5.172C7.408 5.012 7.344 4.836 7.344 4.644C7.344 4.116 7.668 3.664 8.316 3.288C8.964 2.904 9.748 2.712 10.668 2.712C10.764 2.712 10.872 2.716 10.992 2.724C11.12 2.732 11.324 2.768 11.604 2.832C11.884 2.896 12.128 2.984 12.336 3.096C12.552 3.2 12.744 3.368 12.912 3.6C13.08 3.832 13.164 4.104 13.164 4.416C13.164 4.744 13.084 5.048 12.924 5.328C12.772 5.6 12.564 5.832 12.3 6.024C12.044 6.208 11.772 6.36 11.484 6.48C11.204 6.6 10.912 6.692 10.608 6.756C10.552 6.78 10.524 6.804 10.524 6.828C10.524 6.844 10.548 6.864 10.596 6.888C10.62 6.904 10.656 6.924 10.704 6.948C10.752 6.972 10.832 7.036 10.944 7.14C11.064 7.244 11.168 7.36 11.256 7.488C11.352 7.608 11.436 7.776 11.508 7.992C11.58 8.208 11.616 8.436 11.616 8.676C11.616 9.596 11.272 10.436 10.584 11.196C9.904 11.948 9.116 12.324 8.22 12.324Z" fill="white" />
        </svg>

      </div>
      <div className="flex flex-col content-center items-center">
        <h1 className="text-red-50 text-6xl	font-roboto font-medium">LUCAS BARBOZA</h1>
        <span className="text-red-50">DEVELOPER, DESIGNER, FULLSTACK</span>
      </div>
      <div className="h-20vh flex text-primary self-center w-64 justify-between items-center">
        <FaLinkedin size={42} /><FaGithub size={42} /><FaHackerrank size={42} />
      </div>
      <div className="flex justify-center">
        <div className="w-64 h-64 bg-black rounded-full border-4 border-white translate-y-20	">

        </div>
      </div>

    </div>
    <div className="bg-sectionBackground pb-10">
      <div className="h-28 w-full"></div>
      <div className="flex items-center flex-col justify-center">
        <div className="flex flex-col items-center w-5/6">
          <h1 className="text-red-50 text-4xl	font-roboto font-medium mb-10">A BIT ABOUT ME</h1>
          <span className="text-center text-primary mb-5">I am a Fullstack developer, my main tecnologies are REACT, NODE, MONGO but i have experience with PHP, Angular and C#</span>

          <span className="text-red-50 text-center">Hello, My name is Lucas Barboza, i am a Developer, actually i use the MERN stack but i can work with any languages you need, since i was 16 years old i've been in contact with the tech world doing, for example, little games and some storage applications, today i have 2 years of experience with REACTJS, NODEJS, MONGO, and a lot of tools and frameworks, a good programmer must handle any task that he receives independent of programming language, i believe those are the programmers which make the great applications we see around the world, and i going to be one of them.</span>
        </div>
        <div className="w-full flex justify-around mt-10">
          <article className="mb-4 break-inside p-6 rounded-xl flex items-center flex-col bg-clip-border w-80">
            <div className="rounded-full border-2 mb-4 border-primary p-7">
              <FaBook className="text-primary" size={32} />
            </div>
            <span className="text-3xl text-red-50 mb-2 mt-2">LEARNING</span>
            <span className="text-red-50 text-center">A Programmer must always be learning, in the tech world everything evolves very fast, so it's important learn new things</span>
          </article>
          <article className="mb-4 break-inside p-6 rounded-xl flex items-center flex-col bg-clip-border w-80">
            <div className="rounded-full border-2 mb-4 border-primary p-7">
              <FaBook className="text-primary" size={32} />
            </div>
            <span className="text-3xl text-red-50 mb-2 mt-2">CODING</span>
            <span className="text-red-50 text-center">A Programmer must always be learning, in the tech world everything evolves very fast, so it's important learn new things</span>
          </article>
          <article className="mb-4 break-inside p-6 rounded-xl flex items-center flex-col bg-clip-border w-80">
            <div className="rounded-full border-2 mb-4 border-primary p-7">
              <FaBook className="text-primary" size={32} />
            </div>
            <span className="text-3xl text-red-50 mb-2 mt-2">LEARNING</span>
            <span className="text-red-50 text-center">A Programmer must always be learning, in the tech world everything evolves very fast, so it's important learn new things</span>
          </article>
        </div>
      </div>
    </div>
    <div className="bg-programming bg-no-repeat bg-cover bg-center w-full ">
      <div className="flex justify-center items-center flex-col p-10">
        <h1 className="text-red-50 text-4xl	font-roboto font-medium">MY SKILLS</h1>
        <span className="text-center text-red-50">Those bellow are my skills acquired in years of development</span>
      </div>
      <div className="flex justify-around flex-wrap">
        <div className="w-2/4 p-10 flex flex-col">
          <div className="flex items-center mb-3">
            <FaReact className="text-white text-3xl mr-2" />
            <span className="text-white text-3xl ">REACTJS</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
            <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
          </div>
        </div>
        <div className="w-2/4 p-10 flex flex-col">
          <div className="flex items-center mb-3">
            <FaNodeJs className="text-white text-3xl mr-2" />
            <span className="text-white text-3xl ">NODEJS</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
            <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
          </div>
        </div>
        <div className="w-2/4 p-10 flex flex-col">
          <div className="flex items-center mb-3">
            <FaJs className="text-white text-3xl mr-2" />
            <span className="text-white text-3xl ">JAVASCRIPT/TYPESCRIPT</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
            <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
          </div>
        </div>
        <div className="w-2/4 p-10 flex flex-col">
          <div className="flex items-center mb-3">
            <DiMongodb className="text-white text-3xl mr-2" />
            <span className="text-white text-3xl ">MONGODB</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
            <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
          </div>
        </div>
        <div className="w-2/4 p-10 flex flex-col">
          <div className="flex items-center mb-3">
            <DiMysql className="text-white text-3xl mr-2" />
            <span className="text-white text-3xl ">MYSQL</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
            <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
          </div>
        </div>
        <div className="w-2/4 p-10 flex flex-col">
          <div className="flex items-center mb-3">
            <FaFigma className="text-white text-3xl mr-2" />
            <span className="text-white text-3xl ">FIGMA</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-7">
            <div className="bg-primary text-xs font-bold text-white h-full flex justify-center items-center text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-sectionBackground bg-no-repeat bg-cover bg-center w-full ">
      <div className="flex justify-center items-center flex-col pt-10">
        <h1 className="text-red-50 text-4xl	font-roboto font-medium">MY JOB TRAGETORY</h1>
        <span className="text-center text-red-50">Those bellow are my skills acquired with years of development</span>
      </div>
      <div className="w-2/4 p-14 flex flex-col">
        <div>
          <p className="text-red-50">COLLEGE</p>
        </div>
      </div>
    </div>
  </div>
);

export default App;
