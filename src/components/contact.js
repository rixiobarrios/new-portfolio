import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Rixio Barrios</h2>
                        <img
                            src="../images/contact.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p
                            style={{
                                width: '75%',
                                margin: 'auto',
                                paddingTop: '1em',
                            }}
                        >
                            I am looking forward to speaking with you about a
                            career opportunity, a business plan for a startup, a
                            chance to collaborate on a project, or to network.
                            <br></br> I love participating in community events
                            and professional gatherings. So, don't be shy! Let's
                            Connect!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Reach out!</h2>
                        <hr /> <div style={{ textAlign: 'center' }}></div>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                        style={{
                                            TextAlign: 'center',
                                            fontSize: '25px',
                                            fontFamily: 'Montserrat',
                                            color: '#919292',
                                        }}
                                    >
                                        <p className="contact-details">
                                            <form
                                                name="contact"
                                                method="POST"
                                                data-netlify="true"
                                            >
                                                <p>
                                                    <label>
                                                        Your Name:{' '}
                                                        <input
                                                            type="text"
                                                            name="name"
                                                        />
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        Your Email:{' '}
                                                        <input
                                                            type="email"
                                                            name="email"
                                                        />
                                                    </label>
                                                </p>
                                                <p>
                                                    <label>
                                                        Message:{' '}
                                                        <textarea name="message"></textarea>
                                                    </label>
                                                </p>
                                                <p>
                                                    <button type="submit">
                                                        Send
                                                    </button>
                                                </p>
                                            </form>
                                        </p>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
