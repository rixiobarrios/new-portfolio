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
                    {/* React Project 4 */}
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
                                    'url("../images/fightpandemics.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            An application to help communities around the world
                            prepare and respond to the current Covid-19 Pandemic
                            crisis.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/FightPandemics/FightPandemics"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://fightpandemics.com/"
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
                            score reset and sound.
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
                                href="https://my-rock-paper-scissors.netlify.app"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* Javascript Project 2 */}
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
                                    'url("../images/age.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A mini app written in vanilla javascript: Enter your
                            date of birth and a future date to find out how old
                            you would be then.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/age-calculator"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://my-age-calculator.netlify.app"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* Javascript Project 3 */}
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
                                    'url("../images/cart.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            This is a e-commerce project in javascript: Add and
                            remove items in your shopping cart. See price and
                            quantity change. Hit checkout!
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/shopping-cart-store"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://shopping-cart-store.netlify.app"
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
                            An alternative news media outlet with daily updates
                            and opinion pieces. Please support us! Donate now!
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
                    {/* HTML/CSS Project 2 */}
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
                                    'url("../images/getuwired.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A splash page and dropdown menu created out of pure
                            CSS and HTML. This single file was design for
                            GetUwired Internet Marketing.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/getuwired-css-drop-down"
                                target="_blank"
                                colored
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://getuwired-css-drop-down-menu.netlify.app/"
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
                    {/* Vue Project 4 */}
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
                            a professional Latin Percussionist around on tour
                            around the world.
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
                                href="https://ronaldbarrios.netlify.app"
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
