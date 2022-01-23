import React from 'react';
import './Header.css';
import {
    MDBTypography,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function Header() {
    return <div style={{ height: "90vh" }}>
        <div className='p-5 text-light banner' style={{ height: "70%" }}>
            <MDBTypography tag='div' className='display-1 banner-title'>
                Cari Cari
            </MDBTypography>
            <p className='mb-3 fs-3 text-muted'>Live from theri sofa to yours. Get closer to your favorite artists and never miss out.</p>
        </div>

        <div className='row' style={{ height: "30%" }}>
            <div className="col-md-3">
                <div className='labels-circle'>
                    <p className='fs-4 text-primary'><MDBIcon far icon="heart" /></p>
                    <h4>0</h4>
                    <p>Label</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className='labels-circle'>
                    <p className='fs-4'><MDBIcon far icon="calendar-check" /></p>
                    <h4>0</h4>
                    <p>Label</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className='labels-circle'>
                    <p className='fs-4'><MDBIcon far icon="calendar-check" /></p>
                    <h4>0</h4>
                    <p>Label</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className='labels-circle'>
                    <p className='fs-4'><MDBIcon far icon="calendar-check" /></p>
                    <h4>0</h4>
                    <p>Label</p>
                </div>
            </div>
        </div>

    </div>
}
