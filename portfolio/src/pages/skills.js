import SEO from "../components/seo"
import React from "react"
import Header from "../components/header"
import LinkBar from "../components/links"
export default function Portfolio() {
  return (
    <div style={{ color: `teal` }}>
      <SEO title="Skills" />
      <LinkBar />
      <Header headerText="What skills do I have?" />
      <p>uh good question</p>
    </div>
  )
}