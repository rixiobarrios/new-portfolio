import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, NavLink } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="header-content">
                <Layout>
                    <Header
                        className="header-color"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}
                    >
                        <Navigation
                            className="nav-menu"
                            style={{
                                position: 'relative',
                            }}
                        >
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/resume">Resume</NavLink>
                            <NavLink to="/aboutme">About Me</NavLink>
                            <NavLink to="/projects">Projects</NavLink>
                        </Navigation>
                    </Header>
                    <div className="sticky-nav"></div>
                    <Drawer
                        className="nav-drawer"
                        title={
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    color: '#919292',
                                }}
                                to="/"
                            >
                                Home
                            </Link>
                        }
                    >
                        <Navigation
                            className="nav-menu"
                            style={{
                                textTransform: 'uppercase',
                            }}
                        >
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>

                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
