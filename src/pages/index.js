import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Publications from "@site/src/components/Publications";
import Certificates from "@site/src/components/Certificates";
import Awards from "@site/src/components/Awards";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
        <div className="introduce" style={{ marginTop: "2rem" }}>
          <h3> Hi! I am ThorPham,</h3>
          <p>
            I started coding when I was 25. My major is banking and finance but I am passionate about IT, I taught myself everything related to programming. I love computer vision, image processing .
          </p>
          <h3>Tool and framework</h3>
          <ul>
            <li>Programming Language : Python, JavaScript</li>
            <li>Web development : Reactjs, Flask, FastAPI</li>
            <li>Database : Mongo, Firebase</li>
            <li>Devops : Git, Docker, Bash script Shell</li>
            <li>Deep learning Framework : Pytorch, Tensorflow</li>
            <li>Image processing : Numpy, OpenCV, Pillow</li>
            <li>Machine Learning : Scikit-learn</li>
          </ul>

          <h3>Interest Fields</h3>
          <ul>
            <li>Mathematics : Graph Theory, Graph Algorithm, Linear Algebra, Calculus, Optimization</li>
            <li>Computer Vision : Image Processing, Object Detection, Image Segmentation, OCR</li>
            <li>Image Processing : Traditional Image Processing Algorithm</li>
            <li>Computer science : Data Structure and Algorithm, Computer Graphics, Computer Architecture</li>
            <li>Natural language processing : Sequence to sequence, Word embbeding, Transfomer</li>
            <li>Statistic : Bayesian statistics, Graphical Models.</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <Publications />
        <HomepageFeatures />
        <Certificates/>
        <Awards />
      </main>
   
    </Layout>
  );
}
