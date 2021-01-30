import SEO from "../components/seo"
import React from "react"
import Header from "../components/header"
import LinkBar from "../components/links"
export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <SEO title="About" />
      <LinkBar />
      <Header headerText="About me" />
      <p>I like strawberries :D</p>
    </div>
  )
}