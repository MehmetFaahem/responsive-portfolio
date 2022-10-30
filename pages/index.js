import Head from 'next/head'
import Image from 'next/image'
import { jsPDF } from "jspdf";
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import React, { useState, useRef } from 'react'

export default function Home() {

  const [saving, setSaving] = useState(false)


  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.005]);

  function saveResume() {

    setSaving(true)
    var doc = new jsPDF('portrait', 'px', 'a4', false)
    doc.addImage('https://i.ibb.co/YTyMhCF/resume.png', 'PNG', 0, 0, 417, 653)
    doc.save('resume.pdf')
    setSaving(false)

  }

  return (
    <div className='flex flex-1 flex-col place-content-center'>
      <Head>
        <title>Mehmet Faahem</title>
        <meta name="description" content="MERN Stack Developer" />
        <link rel="icon" href="https://i.ibb.co/2hVHJFt/Covdffer.png" />
      </Head>
      <div className='flex mobile:flex-col-reverse laptop:flex-row justify-between place-content-center place-items-center p-16'>
        <div>
          <motion.h1
            initial={{ scale: 0, translateX: '-800px' }}
            animate={{ scale: 1, translateX: '0px' }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 10
            }}
            className='mobile:text-4xl laptop:text-8xl font-fav mobile:text-center laptop:text-left text-white font-bold'>Faahem Bro</motion.h1>
          <motion.h1
            initial={{ scale: 0, translateX: '-800px' }}
            animate={{ scale: 1, translateX: '0px' }}
            transition={{
              type: "spring",
              stiffness: 440,
              damping: 10
            }} className='laptop:text-3xl mobile:text-xl text-red-200 font-fav mobile:ml-4 laptop:ml-1 text-left font-thin'>MERN Stack Developer</motion.h1>
          {
            !saving ? <motion.button
              whileHover={{
                scale: 1.2,
                translateX: '30px'
              }}
              whileTap={{
                scale: 0.8,
                borderRadius: "100%"
              }}
              onClick={saveResume} className='p-4 rounded-xl mt-8 bg-white mobile:text-xl text-black laptop:text-2xl font-bold' >
              Download My Resume
            </motion.button> :
              <motion.button
                whileHover={{
                  scale: 1.2,
                  translateX: '30px'
                }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "100%"
                }}
                onClick={saveResume} className='p-4 rounded-xl mt-8 bg-white mobile:text-xl laptop:text-2xl font-bold' >
                Downloading
              </motion.button>
          }

        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15
          }}>
          <Image src='https://i.ibb.co/4PbPVhF/Covdffer.png' height='600' width='600' />
        </motion.div>
      </div>
      <motion.div
        className='p-10'>
        <h1 className='text-center font-bold mobile:text-4xl laptop:text-7xl text-white mb-12'>My Skills</h1>
        <motion.div
          className='bg-slate-200 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl'>
          <motion.div

            initial={{ translateX: '-1200px' }}
            animate={{ translateX: '0px' }}
            transition={{ duration: 2 }}

            className='h-full w-10/12 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
          <h1 className='mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10'>Next JS</h1>
          <h1 className='mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10'><span className='mobile:hidden laptop:flex mr-2'>Level:</span>Expert</h1>
        </motion.div>
        <motion.div
          className='bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl'>
          <motion.div

            initial={{ translateX: '-1200px' }}
            animate={{ translateX: '0px' }}
            transition={{ duration: 2 }}

            className='h-full w-3/4 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
          <h1 className='mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10'>React Native</h1>
          <h1 className='mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10'><span className='mobile:hidden laptop:flex mr-2'>Level:</span>Intermediate</h1>
        </motion.div>
        <div className='bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl'>
          <motion.div

            initial={{ translateX: '-1200px' }}
            animate={{ translateX: '0px' }}
            transition={{ duration: 2 }}

            className='h-full w-2/3 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
          <h1 className='mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10'>Node JS</h1>
          <h1 className='mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10'><span className='mobile:hidden laptop:flex mr-2'>Level:</span>Intermediate</h1>
        </div>
        <div className='bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl'>
          <motion.div

            initial={{ translateX: '-1200px' }}
            animate={{ translateX: '0px' }}
            transition={{ duration: 2 }}

            className='h-full w-2/5 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
          <h1 className='mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10'>Redux</h1>
          <h1 className='mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10'><span className='mobile:hidden laptop:flex mr-2'>Level:</span>Extending</h1>
        </div>
        <div className='bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl'>
          <motion.div

            initial={{ translateX: '-1200px' }}
            animate={{ translateX: '0px' }}
            transition={{ duration: 2 }}

            className='h-full w-10/12 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
          <h1 className='mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10'>MongoBD</h1>
          <h1 className='mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10'><span className='mobile:hidden laptop:flex mr-2'>Level:</span>Expert</h1>
        </div>
      </motion.div>

    </div>
  )
}
