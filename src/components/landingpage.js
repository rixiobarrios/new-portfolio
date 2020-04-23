import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="../images/avatar.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Rixio Barrios</h1>

                            <hr />

                            <p>Software Engineer | Fullstack Web Developer</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/rixiobarrios/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-linkedin-square"
                                        aria-hidden="true"
                                    />
                                </a>

                                {/* Github */}
                                <a
                                    href="https://github.com/rixiobarrios"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-github-square"
                                        aria-hidden="true"
                                    />
                                </a>

                                {/* Freecodecamp */}
                                <a
                                    href="https://www.freecodecamp.org/rixiobarrios"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-free-code-camp"
                                        aria-hidden="true"
                                    />
                                </a>

                                {/* Codepen */}
                                <a
                                    href="https://codepen.io/rixiobarrios"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-codepen"
                                        aria-hidden="true"
                                    />
                                </a>
                                {/* Stackoverflow */}
                                <a
                                    href="https://stackoverflow.com/users/12817874/rixio-barrios"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-stack-overflow"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Landing;
