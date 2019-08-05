import React, { Component } from 'react';
import Header from './Header';
import Content from "./Content";
import Features from "./Features";
import NextFeatures from "./NextFeatures";
import NextContent from "./NextContent";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Features />
        <NextFeatures />
        <NextContent />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
