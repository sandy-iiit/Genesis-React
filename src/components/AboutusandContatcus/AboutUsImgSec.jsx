import React from 'react';

const AboutUsImgSec = () => {
  return (
    <div>
      <div className="fullwidth-block">
        <div className="container">
          <h2 className="section-title">Our Team</h2>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src='photos\p1.jpeg' alt="p1" /></figure>
                <h2 className="team-name">Vikram Aditya</h2>
                <small className="team-title">CEO</small>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src='photos\p2.jpeg' alt="p2" /></figure>
                <h2 className="team-name">Taimu Kang</h2>
                <small className="team-title">Managing Director</small>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src='photos\p3.jpeg' alt="p3" /></figure>
                <h2 className="team-name">Sofia Bradley</h2>
                <small className="team-title">Public Relation</small>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team">
                <figure className="team-image"><img src='photos\p4.jpeg'alt="p4" /></figure>
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
