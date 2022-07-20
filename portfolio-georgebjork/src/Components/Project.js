import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { MarkGithubIcon } from '@primer/octicons-react'; //https://primer.style/octicons/


function Project({project}) {
    return (
        <>
            <Col className='p-4'>
                <Card>
                    <Card.Img  className="img-fluid rounded-start" variant="top" src= {project.image} />
                    <Card.Body>
                        <Card.Title >{project.name}</Card.Title>
                        <Card.Subtitle className='text-secondary'>{project.technologies}</Card.Subtitle>
                        <Card.Text>
                            {project.body}
                        </Card.Text>
                        <Button variant="dark" href={project.github} target="_blank"> <MarkGithubIcon  verticalAlign="middle" /> View Code </Button>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
}

export default Project;