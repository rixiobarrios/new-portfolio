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
                    {/* React Project 9 */}
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
                                    'url(../images/ctd.png) center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText style={{ background: '#ffff' }}>
                            An application assignment for Code The Dream:
                            Application built with React, Javascript and own API
                            under airtable.
                        </CardText>
                        <CardActions
                            style={{
                                textAlign: 'center',
                                background: '#ffff',
                            }}
                            border
                        >
                            <Button
                                href="https://github.com/rixiobarrios/ctd-react-albatross"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://ctd-react-albatross.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* React Project 8 */}
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
                                    'url(../images/ctd.png) center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText style={{ background: '#ffff' }}>
                            An application assignment for Code The Dream:
                            Fullstack application on React, Javascript, Node,
                            Express and MongoDB
                        </CardText>
                        <CardActions
                            style={{
                                textAlign: 'center',
                                background: '#ffff',
                            }}
                            border
                        >
                            <Button
                                href="https://github.com/rixiobarrios/ctd-fruitstand"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://ctd-fruitstand.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* React Project 7 */}
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
                                    'url(../images/hilton.png) center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText style={{ background: '#ffff' }}>
                            An assessment for The Hilton Hotels: Application on
                            React, Typescript, Jest, Next.js and Tailwindcss.
                        </CardText>
                        <CardActions
                            style={{
                                textAlign: 'center',
                                background: '#ffff',
                            }}
                            border
                        >
                            <Button
                                href="https://github.com/rixiobarrios/hilton-dev-assessment"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://s00gkp.sse.codesandbox.io/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* React Project 6 */}
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
                                    'url(../images/pocket.png) center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText style={{ background: '#ffff' }}>
                            A pre-interview assignment for Pocket RN: A
                            responsive menu on React, Javascript and CSS.
                        </CardText>
                        <CardActions
                            style={{
                                textAlign: 'center',
                                background: '#ffff',
                            }}
                            border
                        >
                            <Button
                                href="https://github.com/rixiobarrios/pocket-rn-mobile-desktop-navbar"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://pocket-rn-mobile-desktop-navbar.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* React Project 5 */}
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
                                    'url(../images/securitron.png) center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText style={{ background: '#ffff' }}>
                            A personal project: Authentication application on
                            React, Javascript, Auth0 and Material UI.
                        </CardText>
                        <CardActions
                            style={{
                                textAlign: 'center',
                                background: '#ffff',
                            }}
                            border
                        >
                            <Button
                                href="https://github.com/rixiobarrios/securitron"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://securitron.netlify.app/"
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
                            A collaboration: Application to prepare and respond
                            to the Covid-19 Pandemic.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/FightPandemics/FightPandemics"
                                target="_blank"
                                colored
                            >
                                Repo
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
                                    'url("../images/generalassembly.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            An assignment for General Assembly: Fullstack
                            application using React, Javascript, Node, Express
                            and Material UI.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/forfoodsake-frontend"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://forfoodsake.web.app/"
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
                                    'url("../images/generalassembly.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            An assignment for General Assembly: Application
                            fetching data from own API using React, Javascript
                            and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/console.love.frontend"
                                target="_blank"
                                colored
                            >
                                Repo
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
                                    'url(../images/generalassembly.png) center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText style={{ background: '#ffff' }}>
                            An assignment for General Assembly: Application
                            fetching data from an API, build on React,
                            Javascript and CSS.
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
                                Repo
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
                </Grid>
            );
        }
        if (this.state.activeTab === 1) {
            return (
                <Grid className="projects-grid-javascript">
                    {/* Javascript Project 7 */}
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
                                    'url("../images/ctd.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A knowledge demonstration for Code The Dream:
                            Application fetching data from an API using HTML,
                            Javascript and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/ctd-prework-swapi"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://ctd-prework-swapi.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* Javascript Project 6 */}
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
                                    'url("../images/ctd.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A knowledge demonstration for Code The Dream: Draw
                            an animated image using HTML, Javascript and
                            Processing.js.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/ctd-prework-demonstration"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://6wq0bz.csb.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* Javascript Project 5 */}
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
                                    'url("../images/tandem.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A trivia game assessment for Tandem: Application
                            built on Javascript, HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/tandem-trivia-questions"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://tandem-trivia-questions.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* Javascript Project 4 */}
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
                                    'url("../images/fetch.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A local service exercise for Fetch Rewards: Returns
                            a boolean for a pyramid word input.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/fetch-rewards-is-pyramid-word"
                                target="_blank"
                                colored
                            >
                                Repo
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
                            A personal project: Shopping cart application built
                            with Javascript, HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/shopping-cart-store"
                                target="_blank"
                                colored
                            >
                                Repo
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
                            A personal project: Age calculation application on
                            Javascript, HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/age-calculator"
                                target="_blank"
                                colored
                            >
                                Repo
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
                                    'url("../images/generalassembly.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            An assignment for General Assembly: Single player
                            game on Javascript, HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/rock-paper-scissors"
                                target="_blank"
                                colored
                            >
                                Repo
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
                </Grid>
            );
        }
        if (this.state.activeTab === 2) {
            return (
                <Grid className="projects-grid-html">
                    {/* HTML/CSS Project 8 */}
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
                                    'url("../images/freecodecamp.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            Built as an assignment for FreeCodeCamp.org: A
                            personal portfolio on HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/freecodecamp-personal-portfolio-webpage"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://freecodecamp-personal-portfolio-webpage.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* HTML/CSS Project 7 */}
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
                                    'url("../images/freecodecamp.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            Built as an assignment for FreeCodeCamp.org: A
                            technical documentation page on HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/freecodecamp-technical-documentation-page"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://freecodecamp-technical-documentation-page.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* HTML/CSS Project 6 */}
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
                                    'url("../images/freecodecamp.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            Built as an assignment for FreeCodeCamp.org: A
                            product landing page on HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/freecodecamp-product-landing-page"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://freecodecamp-product-landing-page.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* HTML/CSS Project 5 */}
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
                                    'url("../images/freecodecamp.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            Built as an assignment for FreeCodeCamp.org: A
                            survey form on HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/freecodecamp-survey-form"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://freecodecamp-survey-form1.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* HTML/CSS Project 4 */}
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
                                    'url("../images/freecodecamp.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            Built as an assignment for FreeCodeCamp.org: A
                            tribute page on HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/freecodecamp-tribute-page"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://freecodecamp-tribute-page1.netlify.app/"
                                target="_blank"
                                colored
                            >
                                Website
                            </Button>
                        </CardActions>
                    </Card>
                    {/* HTML/CSS Project 3 */}
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
                                    'url("../images/techtonic.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            A mockup exercise for Techtonic Technologies: An
                            about me page with layout requirements.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/techtonic-apprenticeship-initial-pre-work"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://mock-up-exercise.netlify.app/"
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
                            An assessment for GetUwired Internet Marketing:
                            Animated dropdown menu on HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/getuwired-css-drop-down"
                                target="_blank"
                                colored
                            >
                                Repo
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
                                    'url("../images/generalassembly.png") center / cover',
                            }}
                        >
                            .
                        </CardTitle>
                        <CardText>
                            An assignment for General Assembly: Built a
                            portfolio on HTML and CSS.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/rixiobarrios.github.io"
                                target="_blank"
                                colored
                            >
                                Repo
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
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Javascript</h1>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is HTML/CSS</h1>
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
                    <Tab>HTML/CSS</Tab>
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
