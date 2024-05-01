import React from 'react';
import img1 from './p1.jpeg'
import img2 from './p2.jpeg'
import img3 from './p3.jpeg'
import img4 from './p4.jpeg'
const AboutUsImgSec = () => {
  return (
    <div>
      <div className="fullwidth-block">
        <div className="container">
          <h2 className="section-title">Our Team</h2>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src={img1} alt="p1" /></figure>
                <h2 className="team-name">Vikram Aditya</h2>
                <small className="team-title">CEO</small>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src={img2} alt="p2" /></figure>
                <h2 className="team-name">Taimu Kang</h2>
                <small className="team-title">Managing Director</small>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src={img3} alt="p3" /></figure>
                <h2 className="team-name">Sofia Bradley</h2>
                <small className="team-title">Public Relation</small>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src={img4} alt="p4" /></figure>
                <h2 className="team-name">Thomas Andre</h2>
                <small className="team-title">Consultant</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsImgSec;
