import React from 'react';
     function NextFeatures() {
       let styles = {
        backgroundImage:'url(imgs/hero/purple.svg)'
      };
         return (
           <section className="fdb-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-7 col-lg-5 ml-md-auto">
                <h1>Design Blocks</h1>
                <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>

                <p className="mt-5">
                  <img alt="image" height="25" className="mr-4" src="./imgs/customers/samsung.svg"></img>
                  <img alt="image" height="25" className="mr-4" src="./imgs/customers/adobe.svg"></img>
                  <img alt="image" height="25" src="./imgs/customers/amazon.svg"></img>
                </p>
              </div>

              <div className="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pt-5 pt-md-0">
                <img alt="image" className="img-fluid rounded-0" src="./imgs/draws/customer-survey.svg"></img>
              </div>
            </div>
          </div>
        </section>

         );
       }

       export default NextFeatures;
