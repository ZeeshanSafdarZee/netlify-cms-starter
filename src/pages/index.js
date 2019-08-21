import React from "react"
import { graphql } from 'gatsby';

export default (props) => {
  console.log('props.data',props.data)
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <div>
      <div>Hello world!</div>
      <hr/>
      <h3>Following Data is coming from Netlify CMS</h3>
      <h1>{data.title}</h1>
      <p>{data.path}</p>
    </div>
  )
}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "blog"} name: {eq: "first-blog"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              path
              date
              title
          }
        }
      }
    }
  }
}`