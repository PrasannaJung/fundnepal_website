import NavBar from "@/components/custom/NavBar";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.svg";
import phoneImg from "../assets/phone.png";
import { motion } from "framer-motion";
import "../styles/timeline.css";

function HomePage() {
  return (
    <main className=' bg-heroLrGradient'>
      <NavBar />
      <section className=' grid medium:grid-cols-2 pt-36 items-center px-16 '>
        <div className=' text-center items-center relative z-50'>
          <motion.div
            className='absolute h-48 w-48 bg-blue-100 rounded-[50%] -z-10 -bottom-24'
            animate={{
              scale: [1, 1.25, 1.25, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["50%", "0%", "50%", "0%", "50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // times: [0, 0.2, 0.5, 0.8, 1],
            }}
          />
          <div className='absolute h-48 w-48 bg-blue-100 rounded-[50%] -z-20 right-6 -top-24'></div>
          <h1 className='text-5xl font-bold leading-normal'>
            <span className='text-blue-400'>Empower</span> Dreams, Fund Futures:
            <span className='text-blue-400'> Join Our Crowd!</span>
          </h1>
          <p className='text-lg mt-4'>
            Be a part of the breakthrough and make someone’s dream come true.
          </p>
          <div>
            <button className='bg-blue-400 text-white px-4 py-2 rounded-md mt-4 shadow-2xl shadow-blue-900'>
              <Link to={"/projects/create"}>Start a project</Link>
            </button>
            <Link
              to='/projects/all'
              className='border border-black px-4 py-2 rounded-md ml-4 mt-4'
            >
              Discover Projects
            </Link>
          </div>
        </div>
        <div className='hidden medium:block bg-blue-200 text-center rounded-bl-[200px] rounded-tr-[200px]'>
          <img src={heroImg} className='w-1/2 mx-auto' alt='IMAGE' />
        </div>
      </section>
      <section className='py-36 pt-64 px-16 '>
        <span className='uppercase text-gray-400 font-semibold'>
          modern crowdfunding platform
        </span>
        <h2 className='text-4xl font-semibold'>
          Invest and support <span className='text-blue-400'>easily</span>,{" "}
          <span className='text-blue-400'>quickly</span>, and{" "}
          <span className='text-blue-400'>transparently</span>.
        </h2>
        <div className='flex justify-between mt-16 items-center'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            viewport={{
              amount: "some",
            }}
          >
            <img src={phoneImg} className=' h-[500px]' alt='' />
          </motion.div>
          <div></div>
        </div>
      </section>
      <section className='py-36 pt-64 px-16'>
        <div className='timeline'>
          <div className='timeline__component'>
            <div className='timeline__date timeline__date--right'>
              August 30, 2017
            </div>
          </div>
          <div className='timeline__middle'>
            <div className='timeline__point'></div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            transition={{ ease: "linear", duration: 0.75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              amount: "some",
            }}
            className='timeline__component timeline__component--bg'
          >
            <h2 className='timeline__title'> Project One</h2>
            <p className='timeline__paragraph'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              itaque odit, voluptates architecto doloribus eaque!
            </p>
            <p>Investment: 4000</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            transition={{ ease: "linear", duration: 0.75, delay: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              amount: "some",
            }}
            className='timeline__component timeline__component--bg'
          >
            <h2 className='timeline__title'>Project Two</h2>
            <p className='timeline__paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              non, eveniet incidunt voluptas eligendi qui, minus atque ipsa sed
              itaque suscipit
            </p>
            <p>Investment: 4000</p>
          </motion.div>
          <div className='timeline__middle'>
            <div className='timeline__point'></div>
          </div>
          <div className='timeline__component'>
            <div className='timeline__date'>February 25, 2019</div>
          </div>
          <div className='timeline__component'>
            <div className='timeline__date timeline__date--right'>
              June 3, 2020
            </div>
          </div>
          <div className='timeline__middle'>
            <div className='timeline__point'></div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            transition={{ ease: "linear", duration: 0.75, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              amount: "some",
            }}
            className='timeline__component timeline__component--bg'
          >
            <h2 className='timeline__title'>Project Three</h2>
            <p className='timeline__paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim
              deserunt laborum quisquam. Culpa dolores facilis ad.
            </p>
            <p>Investment: 4000</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            transition={{ ease: "linear", duration: 0.75, delay: 0.75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              amount: "some",
            }}
            className='timeline__component timeline__component--bottom timeline__component--bg'
          >
            <h2 className='timeline__title'>Project Four</h2>
            <p className='timeline__paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate laboriosam mollitia, ex velit aperiam sequi suscipit
              fugiat.
            </p>
            <p>Investment: 4000</p>
          </motion.div>
          <div className='timeline__middle'>
            <div className='timeline__point'></div>
            <div className='timeline__point timeline__point--bottom'></div>
          </div>
          <div className='timeline__component timeline__component--bottom'>
            <div className='timeline__date'>June 28, 2021</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
