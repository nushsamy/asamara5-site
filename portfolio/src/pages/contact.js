import SEO from "../components/seo"
import React from "react"
import Header from "../components/header"
import LinkBar from "../components/links"
export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <SEO title="Contact" />
      <LinkBar />
      <Header headerText="Contact me!" />
      <p>It is okay if you do not want to</p>
    </div>
  )
}