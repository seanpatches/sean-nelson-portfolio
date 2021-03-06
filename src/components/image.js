import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = ({ filename, alt, test }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if(!image) { return null; }
      
      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <div onClick={test}>
          <Img
            alt={alt}
            sizes={imageSizes}
            onclick={test}
          />
        </div>
      );
    }}
  />
);
