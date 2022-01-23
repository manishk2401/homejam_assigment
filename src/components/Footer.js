import React, { useState } from 'react';
import Slider from "react-slick";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import "./Header.css"

export default function Footer() {
    console.log(Slider);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return <div className='my-5'>
        {/* Upcoming List */}
        <div className='row'>
            <div className="col-lg-6 text-light"><h1 className='mb-1'>Upcoming Shows</h1></div>
            <div className="col-lg-6 text-warning text-end" style={{ cursor: "pointer" }}><h5 className='mt-2'>Show All</h5></div>
            <div className="col-lg-12 mb-3"> <div style={{ height: "5px", width: "50px", backgroundColor: "blue" }}>
            </div></div>
            {/* Card Start */}
            <div className='col-lg-3'>
                <div style={{ position: 'relative' }}>
                    <MDBCard className='singer-card'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                        <MDBCardBody>
                            <div>
                                <p className='m-0 bg-warning px-2 d-inline' style={{
                                    background: "#E5C558", color: "#682F26"
                                }}>Falk</p>
                            </div>
                            <MDBCardTitle className='text-light my-3'>
                                Benny Dayal
                            </MDBCardTitle>
                            <div className="row">
                                <div className="col-sm-9"><a href="">More info <MDBIcon fas icon="arrow-right" /></a></div>
                                <div className="col-sm-3 border-start text-center"><a href=""><MDBIcon fas icon="ticket-alt" /></a></div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <div className="gd-box"></div>
                </div>
            </div>
            {/* Card End */}
        </div>

        {/* Review Section */}
        <div className='mt-5'>
            <div className="row mt-3">
                <div className="col-lg-6 text-light"><h1 className='mb-1'>Reviews</h1></div>
                <div className="col-lg-6 text-warning text-end" style={{ cursor: "pointer" }}>
                    {/* <button type="button" class="slick-next">Next</button> */}
                    <a href="" className='slick-next'><MDBIcon fas icon="arrow-left" /></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href=""><MDBIcon fas icon="arrow-right" /></a>
                </div>
                <div className="col-lg-12 mb-3"> <div style={{ height: "5px", width: "50px", backgroundColor: "blue" }}></div></div>
            </div>
            <Slider {...settings}>
                <div className='review-card'>
                    <div className='mb-2'>
                        <div>
                            <img style={{ height: "50px", width: "50px", borderRadius: "50%", border: "solid 1px gray" }} src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt="" />
                        </div>
                        <div>
                            <h5 className='m-0'>Name Lastname</h5>
                            <p className='text-warning m-0'><MDBIcon fas icon="flag-checkered" /> Name Lastname</p>
                        </div>
                    </div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptate perferendis neque nobis dicta explicabo ex consequatur, hic repellat alias odit suscipit dolore error magnam ipsa est voluptatem debitis quas..</div>
                </div>
                <div className='review-card'>
                    <div className='mb-2'>
                        <div>
                            <img style={{ height: "50px", width: "50px", borderRadius: "50%", border: "solid 1px gray" }} src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt="" />
                        </div>
                        <div>
                            <h5 className='m-0'>Name Lastname</h5>
                            <p className='text-warning m-0'><MDBIcon fas icon="flag-checkered" /> Name Lastname</p>
                        </div>
                    </div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptate perferendis neque nobis dicta explicabo ex consequatur, hic repellat alias odit suscipit dolore error magnam ipsa est voluptatem debitis quas..</div>
                </div>
                <div className='review-card'>
                    <div className='mb-2'>
                        <div>
                            <img style={{ height: "50px", width: "50px", borderRadius: "50%", border: "solid 1px gray" }} src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt="" />
                        </div>
                        <div>
                            <h5 className='m-0'>Name Lastname</h5>
                            <p className='text-warning m-0'><MDBIcon fas icon="flag-checkered" /> Name Lastname</p>
                        </div>
                    </div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptate perferendis neque nobis dicta explicabo ex consequatur, hic repellat alias odit suscipit dolore error magnam ipsa est voluptatem debitis quas..</div>
                </div>
                <div className='review-card'>
                    <div className='mb-2'>
                        <div>
                            <img style={{ height: "50px", width: "50px", borderRadius: "50%", border: "solid 1px gray" }} src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt="" />
                        </div>
                        <div>
                            <h5 className='m-0'>Name Lastname</h5>
                            <p className='text-warning m-0'><MDBIcon fas icon="flag-checkered" /> Name Lastname</p>
                        </div>
                    </div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptate perferendis neque nobis dicta explicabo ex consequatur, hic repellat alias odit suscipit dolore error magnam ipsa est voluptatem debitis quas..</div>
                </div>

            </Slider>
        </div>
    </div>
}
