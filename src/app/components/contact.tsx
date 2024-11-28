"use client"
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPhone, faVoicemail, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const initialState = {
    name: "",
    email: "",
    message: "",
};
export const Contact = (props : any) => {
    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(name, email, message);
        const serviceId = "service_i9bzxmp";
        const templateId = "template_7htnuc9";
        const publicKey = "dwKWYD2N0wJXk4X0K";

        emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
            (result) => {
                console.log(result.text);
                clearState();
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="">
                                <h2>Get In Touch</h2>
                                <p>
                                    Please fill out the form below to send us an email and we will
                                    get back to you as soon as possible.
                                </p>
                            </div>
                            <form name="sentMessage" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows={4}
                                        placeholder="Message"
                                        required
                                        onChange={handleChange}
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-custom btn-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="col-md-6 px-5">
                            <h2>Contact Info</h2>
                            <div className="contact-item">
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faAddressCard} />  |  Address
                                    </span>
                                    {props.data ? props.data.address : "loading"}
                                </p>
                            </div>
                            <div className="contact-item">
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faPhone} />  |  Phone
                                    </span>{" "}
                                    {props.data ? props.data.phone : "loading"}
                                </p>
                            </div>
                            <div className="contact-item">
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faVoicemail} />  |  Email
                                    </span>{" "}
                                    {props.data ? props.data.email : "loading"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href={props.data ? props.data.instagram : "/"}>
                                            <FontAwesomeIcon className="icon-contact" icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.facebook : "/"}>
                                            <FontAwesomeIcon className="icon-contact" icon={faFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.twitter : "/"}>
                                            <FontAwesomeIcon className="icon-contact" icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.youtube : "/"}>
                                            <FontAwesomeIcon className="icon-contact" icon={faYoutube} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;