import SEO from "../components/seo"
import React from "react"
import Header from "../components/header"
import LinkBar from "../components/links"
export default function Portfolio() {
  return (
    <div style={{ color: `teal` }}>
      <SEO title="Portfolio" />
      <LinkBar />
      <Header headerText="Check out my sick portfolio" />
      <p>Coming soon!</p>
    </div>
  )
}