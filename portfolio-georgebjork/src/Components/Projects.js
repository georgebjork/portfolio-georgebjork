import React from 'react';
import Project from './Project';
import { CardGroup, Row} from 'react-bootstrap'

function Projects() {

    const projectsData = [
        {
            name : "ForeScore",
            body: "ForeScore is a mobile app designed for golfers to easily track payouts for on the course game. ForeScore was created for an internship for 3 golfers at Kalispel Golf and Country Club who wanted this exact app. The front-end was made with Flutter/Dart. The API was made using C#. The database was created with an Azure SQL database.",
            technologies: "Flutter, Dart, C#, SQL",
            github: "https://github.com/georgebjork/app-ForeScore",
            image: "./Images/Screenshot 2022-07-12 203444.png"
        },

        {
            name : "WhitTasks",
            body: "WhitTasks is a mobile To-Do app created to help Whitworth Students easily plan out their day. This app was created in a class called 'How to Build Darn Near Anything'. The front-end was made with Flutter/Dart. The API was made using C#. The database was created with an Azure SQL database.",
            technologies: "Flutter, Dart, C#, SQL",
            github: "https://github.com/georgebjork/app-whitTasks",
            image: "./Images/Screenshot 2022-07-12 203444.png"
        },

        {
            name : "WhitTasks (API)",
            body: "WhitTasks API was created simultaneously with the WhitTasks app. The API was needed in order to allow our flutter application to have a direct link to the SQL database. Via stored procedures, it would pull data and return it in JSON format as pictured above. ",
            technologies: "C#",
            github: "https://github.com/georgebjork/api-whitTasks",
            image: "./Images/Screenshot 2022-07-12 203444.png"
        },

        {
            name : "Elevator Simulator",
            body: "Elevator Simulator was created for a final project in my Data Structures Class. Its purpose was to utilize data structures and algorithmic thinking in order to created the most optimized elevator given various situations. ",
            technologies: "C++",
            github: "https://github.com/georgebjork/Elevator-Simulator-",
            image: "./Images/Screenshot 2022-07-12 203444.png"
        },
    
        {
            name : "MSAM Kaleidoscope",
            body: "This Project was created as a final for my Assembly class. The purpose of this project is to give a continiously random Kaleidoscope using only 12 differnt colors. An example demo and an explationation of the alogorithim is found on my github.",
            technologies: "Assembly",
            github: "https://github.com/georgebjork/MSAM-Kaleidoscope",
            image: "./Images/Screenshot 2022-07-12 203444.png"
        },
    ];

    const projectList = projectsData.map(project => <Project project={project}/>);

    return(
        <> 
            <CardGroup>
                <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                    {projectList}
                </Row>
            </CardGroup>
            
        </>
    );

}

export default Projects;