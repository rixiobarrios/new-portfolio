import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Volunteer from './volunteer';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <h2
                            style={{
                                paddingTop: '1.2em',
                                color: '#339999',
                                fontFamily: 'Bungee Hairline',
                            }}
                        >
                            Rixio Barrios
                        </h2>
                        <h4
                            style={{
                                color: '#919292',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            <hr></hr>
                            Software Engineer
                        </h4>
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                        <p>
                            Diplomat turned Software Engineer, driven by the
                            desire to change everything. My creative and
                            inquisitive nature is constantly evolving.
                            Passionate about making interactive products shaped
                            around human experience, diversity, and intuitive,
                            efficient functionality.
                        </p>
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                        <h4
                            style={{
                                color: '#919292',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            Projects
                        </h4>
                        <a
                            href="https://my-rock-paper-scissors.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>GA #1: Rock Paper Scissors</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <br></br>
                        <a
                            href="https://cocktail-recipe-app.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>GA #2: Elixir: Cocktail Recipe</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="react-router"
                            src="../images/react-router.png"
                            alt="react-router"
                        />
                        <a
                            href="http://consoledotlove.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>GA #3: Console.love</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="lodash"
                            src="../images/lodash.png"
                            alt="lodash"
                        />
                        <img
                            className="jest"
                            src="../images/jest.png"
                            alt="jest"
                        />
                        <img
                            className="enzyme"
                            src="../images/enzyme.png"
                            alt="enzyme"
                        />
                        <img
                            className="react-testing-library"
                            src="../images/react-testing-library.png"
                            alt="react-testing-library"
                        />
                        <img
                            className="mongodb"
                            src="../images/mongodb.png"
                            alt="mongodb"
                        />
                        <img
                            className="mongoose"
                            src="../images/mongoose.png"
                            alt="mongoose"
                        />
                        <a
                            href="https://forfoodsake.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>GA #4: For Food Sake</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="react-hooks"
                            src="../images/react-hooks.png"
                            alt="react-hooks"
                        />
                        <img
                            className="react-router"
                            src="../images/react-router.png"
                            alt="react-router"
                        />
                        <img
                            className="material-ui"
                            src="../images/material-ui.png"
                            alt="material-ui"
                        />
                        <img
                            className="jest"
                            src="../images/jest.png"
                            alt="jest"
                        />
                        <img
                            className="react-testing-library"
                            src="../images/react-testing-library.png"
                            alt="react-testing-library"
                        />
                        <img
                            className="nodejs"
                            src="../images/nodejs.png"
                            alt="nodejs"
                        />
                        <img
                            className="nodemon"
                            src="../images/nodemon.png"
                            alt="nodemon"
                        />
                        <img
                            className="becrypt"
                            src="../images/becrypt.png"
                            alt="becrypt"
                        />
                        <img
                            className="chai"
                            src="../images/chai.png"
                            alt="chai"
                        />
                        <img
                            className="cors"
                            src="../images/cors.png"
                            alt="cors"
                        />
                        <img
                            className="express"
                            src="../images/express.png"
                            alt="express"
                        />
                        <img
                            className="mocha"
                            src="../images/mocha.png"
                            alt="mocha"
                        />
                        <img
                            className="sequelize"
                            src="../images/sequelize.png"
                            alt="sequelize"
                        />
                        <a
                            href="https://www.rixiobarrios.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>GA #5: Personal Portfolio</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                        <h4
                            style={{
                                color: '#919292',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            Mini Projects
                        </h4>
                        <a
                            href="https://rixiobarrios.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Previous Portfolio</h6>
                        </a>
                        <a
                            href="https://mock-up-exercise.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Techtonic: Mockup Exercise</h6>
                        </a>
                        <a
                            href="https://getuwired-css-drop-down-menu.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>GetUWired: CSS Drop Down Menu</h6>
                        </a>
                        <a
                            href="https://freecodecamp-tribute-page1.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>FCC #1: Tribute Page</h6>
                        </a>
                        <a
                            href="https://freecodecamp-survey-form1.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>FCC #2: Survey Form</h6>
                        </a>
                        <a
                            href="https://freecodecamp-product-landing-page.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>FCC #3: Product Landing Page</h6>
                        </a>
                        <a
                            href="https://freecodecamp-technical-documentation-page.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>FCC #4: Technical Documentation Page</h6>
                        </a>
                        <a
                            href="https://freecodecamp-personal-portfolio-webpage.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>FCC #5: Personal Portfolio Webpage</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <a
                            href="https://my-age-calculator.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Age Calculator</h6>
                        </a>
                        <a
                            href="https://shopping-cart-store.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Shopping Cart</h6>
                        </a>
                        <a
                            href="https://tandem-trivia-questions.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Tandem: Trivia Game</h6>
                        </a>
                        <a
                            href="https://ctd-prework-swapi.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Code The Dream: My Star Wars API Call App</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <a
                            href="https://tandem-trivia-questions.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Code The Dream: Sleeping Cat</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="processing"
                            src="../images/processing.png"
                            alt="processing"
                        />
                        <a
                            href="https://882uol.csb.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Fetch Rewards: Is Pyramid Word</h6>
                        </a>
                        <img
                            className="express"
                            src="../images/express.png"
                            alt="express"
                        />
                        <img
                            className="cors"
                            src="../images/cors.png"
                            alt="cors"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <a
                            href="https://securitron.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Securitron</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="auth0"
                            src="../images/auth0.png"
                            alt="auth0"
                        />
                        <img
                            className="material-ui"
                            src="../images/material-ui.png"
                            alt="material-ui"
                        />
                        <a
                            href="https://pocket-rn-mobile-desktop-navbar.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Pocket RN: Responsive Menu </h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <a
                            href="https://s00gkp.sse.codesandbox.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Hilton: Weather App </h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="tailwindcss"
                            src="../images/tailwindcss.png"
                            alt="tailwindcss"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="typescript"
                            src="../images/typescript.png"
                            alt="typescript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="react-hooks"
                            src="../images/react-hooks.png"
                            alt="react-hooks"
                        />
                        <img
                            className="nextjs"
                            src="../images/nextjs.png"
                            alt="nextjs"
                        />
                        <img
                            className="nodejs"
                            src="../images/nodejs.png"
                            alt="nodejs"
                        />
                        <img
                            className="jest"
                            src="../images/jest.png"
                            alt="jest"
                        />
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                        <h4
                            style={{
                                color: '#919292',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            Collaborations
                        </h4>
                        <a
                            href="https://fightpandemics.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>FightPandemics</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="react-hooks"
                            src="../images/react-hooks.png"
                            alt="react-hooks"
                        />
                        <img
                            className="react-redux"
                            src="../images/react-redux.png"
                            alt="react-redux"
                        />
                        <img
                            className="react-testing-library"
                            src="../images/react-testing-library.png"
                            alt="react-testing-library"
                        />
                        <img
                            className="lodash"
                            src="../images/lodash.png"
                            alt="lodash"
                        />
                        <img
                            className="snyk"
                            src="../images/snyk.png"
                            alt="snyk"
                        />
                        <img
                            className="ant"
                            src="../images/ant.png"
                            alt="ant"
                        />
                        <img
                            className="gtm"
                            src="../images/google-tag-manager.png"
                            alt="ant"
                        />
                        <img
                            className="uuid"
                            src="../images/uuid.png"
                            alt="uuid"
                        />
                        <img
                            className="fastify"
                            src="../images/fastify.png"
                            alt="fastify"
                        />
                        <img
                            className="auth0"
                            src="../images/auth0.png"
                            alt="auth0"
                        />
                        <img
                            className="gmapi"
                            src="../images/gmapi.png"
                            alt="gmapi"
                        />
                        <img
                            className="mongodb"
                            src="../images/mongodb.png"
                            alt="mongodb"
                        />
                        <img
                            className="mongoose"
                            src="../images/mongoose.png"
                            alt="mongoose"
                        />
                        <a
                            href="https://antievictionmap.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Anti-Eviction Mapping Project</h6>
                        </a>

                        <br></br>
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2022}
                            endYear="Present"
                            jobCompany="Per Scholas"
                            jobName="Software Engineering Instructional Assistant"
                            jobDescription="Duties: 
                            Grade and/or review assessments, class projects, and other materials. Enter student grades into LMS software and grading templates.Update Salesforce data as necessary. Review curriculum materials and assessments weekly and report to instructor and curriculum development team any proofreading or subject-matter errors. Assist instructor with the preparation of daily agenda to students. Schedule time with instructor and students to discuss class challenges. Monitor learner attendance, certifications’ progress, etc."
                        />
                        <Experience
                            startYear={2021}
                            endYear={2021}
                            jobCompany="Atwater, Brian & Co"
                            jobName="Web Developer Intern"
                            jobDescription="Contributing to the creation of digital marketing products for various clients to enhance their online visibility. Creating custom websites and web products to build brand awareness."
                        />
                        <Experience
                            startYear={2020}
                            endYear={2020}
                            jobCompany="Boxless Media"
                            jobName="Software Engineer Intern"
                            jobDescription="Assisting in the creation of websites and web applications for marketing clients using various frameworks. "
                        />
                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobCompany="General Assembly"
                            jobName="Web Development Engineer Fellow"
                            jobDescription="Acquired competitive abilities in full stack web development. Created applications using the latest technologies in software engineering and development. "
                        />
                        <Experience
                            startYear={2008}
                            endYear={2019}
                            jobCompany="Consulate of Venezuela"
                            jobName="Deputy Consul"
                            jobDescription="Supervised consular services, special cases, immigration cases, incarcerations, deportations, difficult cases, complaints and grievances, public speaking, presentations, public events and communications. Deployed mobile consular services through our jurisdictions of 7 US states. Met with elected officials including a few city mayors and governors. Started two sister city programs and provided assistance with commercial and cultural trade."
                        />
                        <hr style={{ borderTop: '3px solid #339999' }} />
                        <h2>Education</h2>
                        <Education
                            startYear={2021}
                            endYear={2022}
                            schoolName="Freecodecamp.org"
                            schoolCourse="JavaScript Algorithms and Data Structures Certification"
                            schoolDescription="Three hundred-hour Self-guided course in algorithms and data structures, going through the fundamentals of Javascript including variables, arrays, objects, loops, functions object oriented programming (OOP) and functional programming(FP). "
                        />
                        <Education
                            startYear={2020}
                            endYear={2021}
                            schoolName="Freecodecamp.org"
                            schoolCourse="Responsive Web Design Certification"
                            schoolDescription="Three hundred-hour Self-guided course in responsive web design, going through responsive methods of website building using modern techniques and best practices for accessibility."
                        />
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="General Assembly"
                            schoolCourse="Software Engineer Immersive Certification"
                            schoolDescription="Three-months of learning and using numerous techniques and technologies for optimal Web-development 400+hour full-time of a full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies. Built several real-life projects individually and a few under paired programming."
                        />
                        <hr style={{ borderTop: '3px solid #339999' }} />
                        <h2>Volunteer Experience</h2>
                        <Volunteer
                            startYear={2020}
                            endYear="Present"
                            jobCompany="FightPandemics"
                            jobName="Software Engineer"
                            jobDescription="FightPandemics is an altruistic platform created in the wake of COVID-19 that connects people and organizations in need of help with those that can provide it. In fostering these vital connections, we empower communities to respond more quickly and effectively to the crisis. Our vision is to create a world where humans are more resilient to emergencies. We are a global group of volunteers that came together to make a difference and are actively looking for other highly-dedicated individuals to join us."
                        />
                        <Volunteer
                            startYear={2021}
                            endYear="Present"
                            jobCompany="Anti-Eviction Mapping Project"
                            jobName="Software Engineer"
                            jobDescription="The Anti-Eviction Mapping Project is a data-visualization, critical cartography, and multimedia storytelling collective documenting dispossession and resistance upon gentrifying landscapes."
                        />
                        <hr style={{ borderTop: '3px solid #339999' }} />
                        <h2>Skills</h2>
                        <img
                            className="aws"
                            src="../images/aws.png"
                            alt="aws"
                        />
                        <img
                            className="vscode"
                            src="../images/vscode.png"
                            alt="vscode"
                        />
                        <img
                            className="surge"
                            src="../images/surge.png"
                            alt="surge"
                        />
                        <img
                            className="npm"
                            src="../images/npm.png"
                            alt="npm"
                        />
                        <img
                            className="git"
                            src="../images/git.png"
                            alt="git"
                        />
                        <img
                            className="netlify"
                            src="../images/netlify.png"
                            alt="netlify"
                        />
                        <img
                            className="codepen"
                            src="../images/codepen.png"
                            alt="codepen"
                        />
                        <img
                            className="postman"
                            src="../images/postman.png"
                            alt="postman"
                        />
                        <img
                            className="firebase"
                            src="../images/firebase.png"
                            alt="firebase"
                        />
                        <img
                            className="heroku"
                            src="../images/heroku.png"
                            alt="heroku"
                        />
                        <img
                            className="github"
                            src="../images/github.png"
                            alt="github"
                        />
                        <img
                            className="docker"
                            src="../images/docker.png"
                            alt="docker"
                        />
                        <img
                            className="twilio"
                            src="../images/twilio.png"
                            alt="twilio"
                        />
                        <img
                            className="postgresql"
                            src="../images/postgresql.png"
                            alt="postgresql"
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
