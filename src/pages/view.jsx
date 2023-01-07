import React, { Component } from 'react';
import Ratio from 'react-bootstrap/Ratio';
import PageHeader from "../components/pageHeader";
import thumbnail from "../images/thumbnails/Dragonborn.jpg"
import Pdf from '../images/pdf/Dragonborn.pdf';
import "../styles/sheetMusic.css"


class Contact extends Component {
    render() {
        return (
            <>
                <PageHeader showBackButton={true}>View Song</PageHeader>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-4 text-danger">Dragonborn</h1>
                            <h5 className="h5">Composed by Jeremy Soule</h5>
                            <hr className="mb-5"/>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <h4 className="h4 fw-bold">Difficulty:</h4>
                                    <h5 className="h5">Advanced Piano</h5>
                                </div>
                                <div className="col-md-8 mb-3">
                                    <h4 className="h4 fw-bold">Genre:</h4>
                                    <h5 className="h5">Movie Music</h5>
                                </div>
                            </div>
                            <Ratio aspectRatio="16x9" className="mb-5">
                                <embed type="image/svg+xml" src="https://www.youtube.com/embed/rnh8N79Ljms"/>
                            </Ratio>
                        </div>
                        <div className="col-md-5 order-md-first">
                            <a href={Pdf} className="view-song bg-image hover-zoom border border-5 border-danger mx-auto d-block mb-5 shadow">
                                <div className="border border-3 border-danger">
                                    <img src={thumbnail} className="w-100" alt=""/>
                                </div>
                            </a>
                            <a href={Pdf} className="text-decoration-none">
                                <button className="btn btn-lg btn-danger rounded-0 shadow-none mx-auto d-block">
                                    Download PDF <i className="fa fa-download"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Contact;
