import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={10}>
                        <h1>About Me</h1>
                        <hr></hr>
                        <p>
                            Ever since I was a kid, technology has been my
                            passion. I remember the time my brother brought home
                            an IBM 286; our very first computer. Making and
                            playing little DOS based games was amazing! Then,
                            our school became the first school in the country to
                            have a computer lab. After that I knew computers
                            would be in my life forever and I will master them
                            as I have mastered walking.
                        </p>
                        <p>
                            This passion carried me through my education and
                            later through the many roles I had within companies
                            and projects. My early private contractor days took
                            me from installing and updating servers in
                            department stores and offices, to testing the first
                            digital data network for the first generation Apple
                            smart-phones. My experience taught me that there is
                            no end to human ingenuity and there is no final
                            frontier for technology.
                        </p>
                        <p>
                            I understand now that my learning process will have
                            no end and my natural progression brings me to
                            coding and software engineering. I am a problem
                            solver, an explorer, and most importantly an agent
                            of change. I believe we must change the current
                            paradigm of misused technologies that is serving the
                            wrong purpose. This is why I am driven to become a
                            software engineer. I have found the perfect quote to
                            illustrate my sentiment;
                        </p>
                        <div className="about-quote">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                            Humanity is acquiring all the right technology for
                            all the wrong reasons.
                            <i class="fa fa-quote-right" aria-hidden="true"></i>
                            <br></br>
                            <h4>--R. Buckmister Fuller</h4>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;
