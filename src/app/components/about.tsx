import React from "react";

const About = (props : any) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>
                            <h3>Why Choose Us?</h3>
                            <div className="list-about">
                                <ul>
                                    {props.data
                                        ? props.data.Why.map((d : any, i: number) => (
                                            <li key={`${d}-${i}`}>{d}</li>
                                        ))
                                        : "loading"}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
