import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

const Services = (props : any) => {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.map((d : any, i : any) => (
                            <div key={`${d.name}-${i}`} className="col-md-4">
                                {" "}
                                <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                                <div className="service-desc">
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};

export default Services;
