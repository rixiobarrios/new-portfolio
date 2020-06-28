import React, { Component } from 'react';
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Grid className="projects-grid">
                    {/* React Project 1 */}
                    <Card
                        shadow={0}
                        style={{
                            minWidth: '450',
                            margin: '20px auto',
                            borderRadius: '15px',
                        }}
                    >
                        <CardTitle
                            style={{
                                color: '#ffff',
                                height: '176px',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                                background:
                                    'url(../images/elixir.png) center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText style={{ background: '#ffff' }}>
                            A cocktail recipe page made using a third party API.
                            There is a search bar option that will bring you to
                            your favorite drink.
                        </CardText>
                        <CardActions
                            style={{
                                textAlign: 'center',
                                background: '#ffff',
                            }}
                            border
                        >
                            <Button
                                href="https://github.com/rixiobarrios/cocktail-recipe"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="http://cocktail-recipe-app.herokuapp.com/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>

                    {/* React Project 2 */}
                    <Card
                        shadow={0}
                        style={{
                            minWidth: '450',
                            margin: '20px auto',
                            borderRadius: '15px',
                        }}
                    >
                        <CardTitle
                            style={{
                                color: '#ffff',
                                height: '176px',
                                textTransform: 'uppercase',
                                background:
                                    'url("../images/console.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A friendship and dating app, user can create
                            profile, matches are based on programming languages
                            in common.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/console.love.frontend"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="http://consoledotlove.herokuapp.com/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* React Project 3 */}
                    <Card
                        shadow={0}
                        style={{
                            minWidth: '450',
                            margin: '20px auto',
                            borderRadius: '15px',
                        }}
                    >
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                textTransform: 'uppercase',
                                background:
                                    'url("../images/food.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            An application to reduce food waste, allows user to
                            create account and add available food items.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/mmarmol88/forfoodsake-frontend"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://forfoodsake.herokuapp.com/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        }
        if (this.state.activeTab === 1) {
            return (
                <Grid className="projects-grid-javascript">
                    {/* Javascript Project 1 */}
                    <Card
                        shadow={0}
                        style={{
                            minWidth: '450',
                            margin: '20px auto',
                            borderRadius: '15px',
                        }}
                    >
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                textTransform: 'uppercase',
                                background:
                                    'url("../images/rock.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A game written in vanilla javascript: animated
                            interface, single player feature, score keeping,
                            score reset.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/rock-paper-scissors"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://rock-paper-scissors-88fbb0.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        }
        if (this.state.activeTab === 2) {
            return (
                <Grid className="projects-grid-wordpress">
                    {/* Wordpress Project 1 */}
                    <Card
                        shadow={0}
                        style={{
                            minWidth: '450',
                            margin: '20px auto',
                            borderRadius: '15px',
                        }}
                    >
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                textTransform: 'uppercase',
                                background:
                                    'url("../images/orinoco.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            An alternative news outlet, daily updates, opinion
                            pieces, Telegram chat available. <br></br>This is a
                            collaboration project.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://orinocotribune.com/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        }
        if (this.state.activeTab === 3) {
            return (
                <Grid className="projects-grid-html">
                    {/* HTML/CSS Project 1 */}
                    <Card
                        shadow={0}
                        style={{
                            minWidth: '450',
                            margin: '20px auto',
                            borderRadius: '15px',
                        }}
                    >
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                textTransform: 'uppercase',
                                background:
                                    'url("../images/portfolio.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A previous version of this portfolio done as a place
                            holder. This portfolio served as the basis for the
                            current one.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/rixiobarrios.github.io"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://rixiobarrios.github.io/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        }
        if (this.state.activeTab === 4) {
            return (
                <Grid className="projects-grid-html">
                    {/* Angular Project 4 */}
                    <Card
                        shadow={0}
                        style={{
                            minWidth: '450',
                            margin: '20px auto',
                            borderRadius: '15px',
                        }}
                    >
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                textTransform: 'uppercase',
                                background:
                                    'url("../images/latin.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A passion project that displays the art and music of
                            a professional Latin Percussionist around the world.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/ronaldbarrios"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://www.ronaldbarrios.com"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Javascript</h1>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is Wordpress</h1>
                </div>
            );
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h1>This is HTML/CSS</h1>
                </div>
            );
        } else if (this.state.activeTab === 4) {
            return (
                <div>
                    <h1>This is Angular</h1>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="projects-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Wordpress</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Angular</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;
