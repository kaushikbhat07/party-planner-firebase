import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <h4>
                            Project Title - {id}
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, beatae ex. Ad voluptatem nostrum aliquam placeat dolor earum corporis. Quibusdam officiis explicabo non, quos dolor pariatur cum nobis unde dolores!</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>
                            Posted by the Net Ninja
                        </div>
                        <div>
                            2nd September, 2 AM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
