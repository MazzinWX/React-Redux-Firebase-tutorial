import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sint in amet doloribus modi adipisci porro nesciunt a deserunt distinctio pariatur debitis nam, dolorum mollitia eius voluptates fuga voluptas fugiat!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Mario Bros</div>
                    <div>8th may 4.20 pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
