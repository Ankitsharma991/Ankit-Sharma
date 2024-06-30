import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi There, my name is <b>Ankit Sharma</b> and I am from Nepal,
            currently living in Kerala, India. I'm a{" "}
            <b>MERN stack Web and React Native Mobile Developer </b> and a final
            year college student pursuing <b>BTech in CSE</b>. <br />
            <br />I am currently working as a Software Developer Intern at{" "}
            <b>QontenttAI</b>, USA based startup. I am passionate to build
            products from scratch and have a keen interest in learning new
            technologies. I have worked on various projects and have experience
            in building web applications using{" "}
            <b>MERN stack and mobile applications</b> using <b>React Native</b>.
            I have also worked on API integration, deployment, and testing. I am
            a quick learner and always ready to take on new challenges.
            <br />
            <br />
            Previously, I have worked as a <b>Software Developer Intern</b> at
            <b> DeepThought</b> Edutech Ventures, an Indian based startup
            located in Hyderabad, where I worked on building a company Web
            platform using MERN stack and also worked on React Native mobile app
            projects.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
