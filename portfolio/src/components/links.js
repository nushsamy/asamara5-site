import React from "react"
import { Link } from "gatsby"

export default function LinkBar(props) {
  return (
    <div>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/about/">About</Link> &nbsp;
        <Link to="/skills/">Skills</Link> &nbsp;
        <Link to="/portfolio/">Portfolio</Link> &nbsp;
        <Link to="/contact/">Contact</Link> &nbsp;
    </div>
    
  )
}