import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

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
            I started coding when I was 25. Writing basic macros in VBA led to
            my neverending curiosity about software development. I went through
            languages like Basic, C/C++ (and Assembly language), Java, PHP and
            lastly JavaScript / Typescript. It is sad 😔 that I don't have
            access to my old codes although the code would not be good. I built
            my own Excel (with very limited funcitonality), program which was in
            shape of a heart ❤️ , "virus" which deleted everything from desktop
            or utility which allowed user to have virtual desktops on old
            Windows.
          </p>
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
