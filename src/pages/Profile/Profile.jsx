import React from "react";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src="http://placebeard.it/640/480" alt="Admin" className="rounded-circle" width="150" />
                        <div className="mt-3">
                            <h4>John Doe</h4>
                            <p className="text-secondary mb-1">Full Stack Developer</p>
                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                            <button className="btn btn-primary m-2">Follow</button>
                            <button className="btn btn-outline-primary m-2">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}