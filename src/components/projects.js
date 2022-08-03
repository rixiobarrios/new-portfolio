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
                            An application assignment for Code The Dream: This
                            full-stack inventory app sends you an email when
                            items reach 0.
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
                            A test driven weather app with Jest, Next.js and
                            Tailwindcss. This is an assessment for The Hilton
                            Hotels.
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
                            A responsive dropdown menu with a mobile option.
                            This react app was design as an assignment for
                            Pocket RN.
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
                            Securitron is an app using Auth0 as an
                            authenticating platform. Create a user and try it
                            out.
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
                            A knowledge demonstration for Code The Dream: This
                            application shows data from a public Star Wars API
                            using javascript
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
                            A knowledge demonstration for Code The Dream: This
                            drawing and animation projects is created with
                            Processing.js and javascript
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
                            A trivia game assessment project in javascript for
                            Tandem: Guess the correct answer and collect 1 point
                            for each question. Guess all 10!
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
                            A web service exercise assessment for Fetch Rewards:
                            Returns a boolean to indicate whether a word is a
                            pyramid word.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button
                                href="https://github.com/rixiobarrios/fetch-rewards-is-pyramid-word"
                                target="_blank"
                                colored
                            >
                                Repo
                            </Button>
                            <Button
                                href="https://is-pyramid-word.herokuapp.com/"
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
                            An e-commerce project in javascript: Add and remove
                            items in your shopping cart. See price and quantity
                            change. Hit checkout!
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
                            This personal portfolio webpage is a responsive web
                            design project built as an assignment for
                            Freecodecamp.org.
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
                            This technical documentation page is a responsive
                            web design project built as an assignment for
                            Freecodecamp.org.
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
                            This product landing page is a responsive web design
                            project built as an assignment for Freecodecamp.org.
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
                            This survey form page is a responsive web design
                            project built as an assignment for Freecodecamp.org.
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
                            This tribute page is a responsive web design project
                            built as an assignment for Freecodecamp.org.
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
                            A mockup assessment created out of pure CSS and
                            HTML. This was an assessment for Techtonic
                            Technologies.
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
                            A splash page and dropdown menu created out of pure
                            CSS and HTML. This was an assessment for GetUwired
                            Internet Marketing.
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
