import React, { Component } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { MarkGithubIcon } from '@primer/octicons-react'; //https://primer.style/octicons/
import { BsLinkedin } from 'react-icons/bs'; //https://react-icons.github.io/react-icons
import Projects from './Projects';

class Home extends Component {

    render() {
        return (
            <>
                <Container id="home-background" fluid>
                    <Container>
                        <Row>
                            <Col align="center" className='p-5'> <h1 className='text-white'>Hi, I'm George.</h1> </Col>
                        </Row>

                        <Row>
                            <Col align="center" className='pb-5 pl-5 pr-5'> <h4 className='text-white'> I am a Senior at Whitworth Univeristy and I am currently seeking a fulltime software engineering job starting summer 2023. </h4></Col>
                        </Row>

                        <Row className="justify-content-center pb-5 ">
                            <Col className="pb-3" align="center" md="auto" xs="auto">
                                <Button size="lg" href="https://github.com/georgebjork" target="_blank"> <MarkGithubIcon  verticalAlign="middle" /> Github</Button>
                            </Col>
                            
                            <Col className="pb-3" align="center" md="auto"  xs="auto">
                                <Button size="lg" variant="outline-primary" href='https://www.linkedin.com/in/georgebjork/' target="_blank"> <BsLinkedin verticalAlign="middle" /> Linkedin</Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container id='projects' className='projects' fluid>
                    <Container  className="p-3">
                        <Row>
                            <Col align="center"> <h1> My Projects </h1></Col>
                        </Row>
                    </Container>
                    
                    <Projects/>
                    
                </Container>

                <Container id='about-me' fluid>
                    <Container  className="p-3">
                        <Row>
                            <Col align="center"> <h1 className='text-white'> About Me </h1></Col>
                        </Row>

                        <Row> 
                            <Col className='p-5' sm={12} md={12} lg={6}>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./Images/George/younglife.jpg"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    {/* <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./Images/George/george-chambers.png"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item> */}
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./Images/George/friends.jpg"
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./Images/George/wedding.jpg"
                                        alt="Fourth slide"
                                        />
                                    </Carousel.Item>
                                    {/* <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="./Images/George/senior-picture.jpg"
                                        alt="Fifth slide"
                                        />
                                    </Carousel.Item> */}
                                    </Carousel>
                            </Col>
                            <Col className='p-5' sm={12} md={12} lg={6}>
                                <h5 className='text-white lead'>
                                    Before I continue, I want to introduce myself a little bit...
                                    <br/><br/>
                                    My name is George Bjork and I am a Senior at Whitworth Univeristy. I am currently pursing a B.A. in Computer Science with a focus in Buisness and a minor
                                    in Leadership. Writing code has become a passion of mine and since my decsion to major in CS, and I haven't looked back. 
                                    <br/><br/>
                                    If I'm not writing code, you might find me playing golf (a lot), serving at my local Young Life ministry at Lewis and Clark highschool, hanging out with friends, or playing some guitar. 

                                </h5> 
                            </Col>
                        </Row>
                    </Container>                   
                </Container>

                <Container id='resume' className='resume' fluid>
                    <Container  className="p-3">
                        <Row>
                            <Col align="center"> <h1> Resume </h1></Col>
                        </Row>
                    </Container>
                    
                    
                </Container>
            </>
        );
    }
}

export default Home; 