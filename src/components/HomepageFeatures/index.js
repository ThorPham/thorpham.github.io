import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const FeatureList = [
  {
    title: "Simple OCR",
    img: require("@site/static/img/ocr.jpeg").default,
    description: (
      <>
        <ul style={{ listStyle: "square", textAlign: "left" }}>
          <li style={{backgroundColor:'rgba(85, 239, 196,0.5)'}}>
            <strong>Feature and Information</strong>: Detect and recognition for vietnamese and english
            language. It extracts text accurately even in images with severe
            distortion or complexity. Model OCR trained on 5M dataset with 1M real and 4M synthetic.
          </li>
          <li> <strong>FrontEnd</strong> : Reactjs, Pure Css, Canvas</li>
          <li>
           <strong> UX/UI</strong> : Clone and follow by
            <Link to="https://clova.line.me/ocr_demo/en">Clova AI</Link>
          </li>
          <li><strong>Backend</strong> : Pytorch, FastAPI</li>
          <li>
            <strong> Web Demo </strong> : 
            <Link to="https://thorpham.github.io/simple-ocr-website/">
              demo
            </Link>
          </li>
          <li>
            <strong> Video Demo</strong> : 
            <Link to="https://www.youtube.com/watch?v=s15i_0Ifh0Y&ab_channel=DungPham">
              demo
            </Link>
          </li>
          <li>
            <strong> Source code</strong> : 
            <Link to="https://github.com/ThorPham/simple-ocr-website">
              code
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Remove Background",
    img: require("@site/static/img/removebg.jpeg").default,
    description: (
      <>
        <ul style={{ listStyle: "square", textAlign: "left" }}>
          <li style={{backgroundColor:'rgba(85, 239, 196,0.5)'}}>
          <strong>Feature and Information</strong> : Automatic remove background. It works 100% automatically: 
          You don't have to manually select the background/foreground layers to separate them.
          You can login with google and save
            data in firebase store
          </li>
          <li><strong>FrontEnd</strong> : Reactjs, Pure Css</li>
          <li>
            <strong>UX/UI</strong> : Clone and follow by{" "}
            <Link to="https://www.remove.bg/">remove.bg</Link>
          </li>
          <li><strong>Backend</strong> : Pytorch, FastAPI</li>
          <li><strong>Database</strong> : FireBase</li>
          <li>
            <strong>Web Demo</strong> :
            <Link to="https://thorpham.github.io/removebg/">demo</Link>{" "}
          </li>
          <li>
            <strong>Video Demo</strong> :
            <Link to="https://www.youtube.com/watch?v=wdtd87Yl3wA&ab_channel=DungPham">
              demo
            </Link>
          </li>
          <li>
            <strong>Source code</strong> :
            <Link to="https://github.com/ThorPham/simple-ocr-website">
              code
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "ALPR",
    img: require("@site/static/img/alpr.jpg").default,
    description: (
      <>
        <ul style={{ listStyle: "square", textAlign: "left" }}>
          <li style={{backgroundColor:'rgba(85, 239, 196,0.5)'}}>
            <strong>Feature and Information</strong> : Automatic License Plate Recognition system that works in all environments,
             optimized for your location. Can work with plate vietnamese with 1 line or 2 line and run only CPU with hight accuracy.
          </li>
          <li><strong>FrontEnd</strong> : Reactjs, Pure Css</li>
          <li>
            <strong>UX/UI</strong> : Clone and follow by
            <Link to="https://platerecognizer.com">platerecognizer.com</Link>
          </li>
          <li><strong>Backend</strong> : Pytorch, FastAPI</li>
          <li>
            <strong>Web Demo</strong> : <Link to="https://thorpham.github.io/ALPR/">demo</Link>
          </li>
          <li>
            <strong>Video Demo</strong> :
            <Link to="https://www.youtube.com/watch?v=wdtd87Yl3wA&ab_channel=DungPham">
              demo
            </Link>
          </li>
          <li>
           <strong>Source code</strong> :
            <Link to="https://github.com/ThorPham/ALPR/tree/master">code</Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Invoice OCR",
    img: require("@site/static/img/digitalization.jpg").default,
    description: (
      <>
        <ul style={{ listStyle: "square", textAlign: "left" }}>
          <li style={{backgroundColor:'rgba(85, 239, 196,0.5)'}}> 
          <strong>Feature and Information</strong>  : Automating Receipt Digitization with OCR .
          The system can extract information  from receipt image, 
          with customizable fields, and extensible with national identity card ,
          business cards or financial statements.
          </li>
          <li><strong>FrontEnd</strong> : Reactjs, pure Css</li>
          <li>
            <strong>UX/UI</strong> : Clone and follow by
            <Link to="https://nanonets.com/invoice-ocr">nanonets.com</Link>
          </li>
          <li><strong>Backend</strong> : Pytorch, FastAPI</li>
          <li>
            <strong>Web Demo</strong> : <Link to="https://thorpham.github.io/KIE">demo</Link>
          </li>
          <li>
            <strong>Video Demo</strong> :
            <Link to="https://www.youtube.com/watch?v=wdtd87Yl3wA&ab_channel=DungPham">
              demo
            </Link>
          </li>
          <li>
            <strong>Source code</strong> : <Link to="https://github.com/ThorPham/KIE">code</Link>
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--6 ")}>
      <div className="text--center" >
        <img src={img} className={styles.featureSvg} role="img" alt="#" />
      </div>
      <div className="text--center padding-horiz--md" >
        <h2
          style={{
            backgroundColor: "rgba(162, 155, 254,0.6)",
            display: "inline-block",
          }}
        >
          {title}
        </h2>
        <div style={{ width: "60%", margin: "auto" }}>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 style={{ background: "#eb4d4b", display: "inline-block" }}>
          Personal Projects
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
