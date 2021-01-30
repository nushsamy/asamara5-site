import SEO from "../components/seo"
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import LinkBar from "../components/links"

import headshot from "../images/headshot.jpg"

export default function Home() {
  return (
    <div style={{ color: `teal` }}>
      <SEO title="Home" />
      <LinkBar />
      <Header headerText="Anusha Samarabandu" />
      <p>Kyle sucks</p>
      <img src={headshot} alt="Headshot" />
    </div>
  );
}
