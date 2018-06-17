import React, { Component } from "react";
import Helmet from "react-helmet";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";
import "./Home.scss";
import config from "../../../data/SiteConfig";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { mobile } = this.state;
    const expanded = !mobile;
    const homeOverlapClass = mobile ? "home-overlap-mobile" : "home-overlap";
    let cover = config.homeCover;
    cover = cover.startsWith("/") ? __PATH_PREFIX__ + cover : cover; // eslint-disable-line no-undef
    const coverHeight = mobile ? 180 : 350;
    return (
      <div className="home-page md-grid md-grid--no-spacing">
        <Helmet>
          <title>{`Title | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/`} />
        </Helmet>
        <div
          style={{ backgroundImage: `url(${cover})`, height: `${coverHeight}px` }}
          className="md-grid md-cell--9 post-cover"
        />
        <div
          className={`md-grid md-cell--9 home-page-contents mobile-fix ${homeOverlapClass}`}
        >
          <Card className="md-grid md-cell md-cell--12 home">
            <CardText className="home-body">
              <h1 className="md-display-2 post-header">Home</h1>
              <div dangerouslySetInnerHTML={{ __html: "" }} />
            </CardText>
            <div className="home-meta"></div>
          </Card>
          {/* <Disqus postNode={postNode} expanded={expanded} /> */}
        </div>
      </div>
    );
  }
}

export default Home;
