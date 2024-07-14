import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Me from "../images/ketsebaot.png";
import Footer from "../component/Footer";
import Form from "../component/Form";
import {  Phone, WhatsApp } from "@mui/icons-material";
import ImageSlider from '../component/ImageSlider';


export default function Home (){

    return(
        <>
            <div className="bg-home text-white font-roboto">

                <Navbar />

                <div>

                    <div className="flex justify-between px-5 md:px-20 items-center pt-20">
                        <div className="md:pl-20 sm:pt-20">
                            <div className="pb-8">
                                <div className="pb-6">Hi there,</div>
                                <div className="text-3xl sm:text-4xl font-semibold">Ketsebaot Ertumo - Full-Stack Developer and Electrical & Computer Engineer</div>
                            </div>
                            <div>
                                I'm a highly skilled full-stack developer and electrical & computer engineer with expertise across a wide range of programming languages, frameworks & technologies, cybersecurity, networking & configurations. I have a proven track record of problem-solving, collaboration, and adaptability. My passion lies in creating innovative, user-friendly solutions that meet client needs. I would welcome the opportunity to discuss how I can contribute to the success of your project.
                            </div>
                            <Link to='/#contact-me'>
                                <div className="rounded-lg border border-white px-3 py-2 flex inline-block w-[118px] mt-5">
                                    <button>Get in Touch</button>
                                </div>
                            </Link>
                        </div>
                        <img className="h-[550px] hidden md:flex" src={Me} alt="Me"/>
                    </div>

                    <div id="skills" className="bg-black-400 pt-20 mt-5 pb-10 text-center">
                        <div className="text-4xl pb-10 font-bold">Skills</div>
                        <div className="md:mx-60 mx-5 text-justify text-align md:text-center">As a full-stack developer and electrical & computer engineer, I possess extensive expertise spanning a wide range of programming languages, frameworks, and technologies, including C++, Java, Tailwind CSS, React.js, React-Native, Flutter, Node.js, TypeScript, PostgreSQL, MariaDB, MongoDB, GraphQL and MySql. In addition to core software development, I also have experience in cybersecurity, networking, and system configurations. This diverse technical skillset enables me to tackle a variety of challenges and deliver innovative, user-friendly solutions tailored to my clients' evolving needs.</div>
                        <ImageSlider />
                    </div>

                    <div id="projects" className="bg-black-300 pt-20 pb-10 text-center">
                        <div className="text-4xl pb-10 font-semibold">Projects</div>
                        <div className="md:mx-60 mx-5 text-justify text-align md:text-center">The projects I've worked on demonstrate my diverse experience in web and application development. I've built a full-stack blog platform using the MERN stack, as well as a Data Hub System and my own personal portfolio website. I've also developed the TechEthio website, a Temperature Converter application, and various gaming applications. Additionally, I've created an architecture website for Lik, a mobile solution management website, a web scraping application, and an ERP Next system. This range of projects showcases my proficiency in front-end and back-end technologies, my ability to tackle complex challenges, and my adaptability to different development environments and requirements.</div>
                    </div>

                    <div id="#contact-me" className="bg-black-400 md:pt-20 pb-10 text-justify md:text-center">
                        {/* <div className="text-4xl pb-10 font-semibold">Contact Me</div> */}
                        <div className="md:flex gap-10 px-5 md:px-40">
                            <div className="md:w-[70%] px-5 md:px-0 pb-5 md:pb-0">
                                <div id='contact-me' className="text-4xl pt-10 font-semibold text-center">Get in Touch</div>
                                <div className="pt-10">I would welcome the opportunity to discuss how I can contribute my capabilities to the success of your project. Please feel free to reach out to me to schedule a time to connect. I look forward to the chance to further demonstrate my qualifications and explore how I can be a valuable asset to your team.</div>
                                <div className="pt-5">
                                    <div><Phone className="bg-green-600" /> : +251919765445</div>
                                    <div><WhatsApp className="bg-green-600" /> : +251919765445</div>
                                </div>
                            </div>
                            <Form />
                        </div>
                    </div>

                </div>
                
                <Footer />

            </div>
        </>
    )
}