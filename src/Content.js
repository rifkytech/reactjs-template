import React from 'react';

function Content() {
  let styles = {
   backgroundImage:'url(./imgs/shapes/8.svg)'
 };

  return (
    <section className="fdb-block" style={styles}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5">
            <img alt="image" className="fdb-icon" src="./imgs/icons/github.svg"></img>
            <h1>Design Blocks</h1>
            <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
            <img alt="image" className="img-fluid rounded-0" src="./imgs/draws/chat.svg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
