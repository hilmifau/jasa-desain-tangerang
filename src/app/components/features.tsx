import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";

const Features = (props: any) => {
    return (
        <div id="features" className="text-center">
            <div className="container  section-title">
                <div>
                    <h2>Client kami</h2>
                </div>
                <p>Sudah banyak usaha besar yang menggunakan jasa kami</p>
                <Container>
                    <Row>
                        {props.data
                            ? props.data.map((d: any, i: number) => (
                                <div className="col-3 p-1" key={i}>
                                    <Image src="../img/portfolio/09-small.jpg" fluid />
                                </div>
                            ))
                            : "Loading..."}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Features;
