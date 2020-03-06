import React from "react";

// In case you dont want to use styled component move it to stylesheets
// and reference it from there
import styled, { keyframes } from "styled-components";

/**
 * Is the parent container that encapsulates loaders
 */
const loaderContainer = {
  padding: "8px",
  borderRadius: "16px"
};
const loaderContainer01 = {
  padding: "8px",
  display: "flex"
};

const padding = {
  padding: "8px"
};
/**
 * Animation keyframes
 */
const keyFrames = keyframes`
  0%{
      background-position: -400px 0
  }
  100%{
      background-position: 400px 0
  }
`;
// Create the keyframes
const shine = keyframes`
   0%{
      background-position: -400px 0
  }
  100%{
      background-position: 400px 0
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Shine = styled.div`
  display: inline-block;
  animation: ${shine} 4s linear infinite forwards;
  border-radius: 8px;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(110deg, #eeeeee 31%, #f1f1f1 46%, #eeeeee 50%);
`;

/**
 * Re-usable style components withing loader elements
 */
const loaderConstants = {
  backgroundColor: "#f6f7f8",
  borderRadius: "4px",
  marginTop: "5px",
  width: "300px"
};

/**
 * Stub for images of given width and height
 */
const loaderImage = {
  ...loaderConstants,
  width: "100%",
  height: "120px",
  borderRadius: "16px"
};

/**
 * Stub for small texts
 */
const loaderSmall = {
  ...loaderConstants,
  width: "100px",
  height: "12px",
  borderRadius: "16px"
};

/**
 * Stub for large texts
 */
const loaderLarge = {
  ...loaderConstants,
  height: "12px",
  borderRadius: "16px"
};

/**
 * Stub for images
 */

const loaderThumbnail = {
  ...loaderConstants,
  width: "60px",
  height: "60px",
  borderRadius: "4px"
};

export const LoaderImage = props => (
  <div style={props.style}>{props.children}</div>
);

/**
 * Stub for small text
 */
export const LoaderTextSmall = props => (
  <div style={props.style}> {props.children}</div>
);

/**
 * Stub for small text
 */
export const LoaderTextLarge = props => (
  <div style={props.style}> {props.children}</div>
);

/**
 * Loader compoent
 * @return {Loader} Loader with Image and variable length texts
 */
export const Loader = () => (
  <div style={loaderContainer}>
    <LoaderImage style={loaderImage}>
      <Shine> </Shine>
    </LoaderImage>
    <LoaderImage style={loaderSmall}>
      <Shine />
    </LoaderImage>
    <div style={padding}>
      <LoaderTextLarge style={loaderLarge}>
        <Shine />
      </LoaderTextLarge>
      <LoaderTextLarge style={loaderLarge} />
    </div>
  </div>
);

export const Loader01 = () => (
  <div style={loaderContainer01}>
    <LoaderImage style={loaderThumbnail}>
      <Shine />
    </LoaderImage>
    <div style={loaderContainer}>
      <LoaderImage style={loaderLarge}>
        <Shine />
      </LoaderImage>
      <LoaderTextLarge style={loaderLarge}>
        <Shine />
      </LoaderTextLarge>
    </div>
  </div>
);

export const Loader02 = () => (
  <div style={loaderContainer}>
    <LoaderImage style={loaderSmall}>
      <Shine />
    </LoaderImage>
    <LoaderImage style={loaderThumbnail}>
      <Shine />
    </LoaderImage>

    <LoaderImage style={loaderLarge}>
      <Shine />
    </LoaderImage>
    <LoaderTextLarge style={loaderLarge}>
      <Shine />
    </LoaderTextLarge>
  </div>
);

export const Loader03 = () => (
  <div style={loaderContainer}>
    <LoaderImage style={loaderImage}>
      <Shine />
    </LoaderImage>
    <div style={padding}>
      <LoaderImage style={loaderLarge}>
        <Shine />
      </LoaderImage>
      <LoaderTextLarge style={loaderLarge}>
        <Shine />
      </LoaderTextLarge>
    </div>
  </div>
);
