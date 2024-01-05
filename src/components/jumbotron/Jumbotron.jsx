import React from 'react';

function Jumbotron() {
  return (
    <div className="container-fluid">
    <div className="p-5 mb-4 bg-body-tertiary rounded-3 jumbotron" id="about-me">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3"><img className="img-fluid" src="images/IMG_9590.jpg"
              alt="Headshot of Caroline Lane" /></div>
          <div className="col sm-12 col-md-6 col-lg-9 text-justify">
            <h1 id="jumbotron-header">Caroline Lane</h1>
            <p className="col-sm-12 col-md-8 fs-4">Hi! Great to meet you! My name is Caroline and I am a Junior
              Web Developer with experience in Teaching children of all ages. I have a 1st class honours degree in
              Biomedical Science and Human Biology. I have also worked as a singer/songwriter for over 15 years, and
              have experience in sales and hospitality.</p>
            <a className="btn btn-primary btn-lg" href="mailto:carolinelane@live.co.uk" role="button">Contact me</a>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Jumbotron;
