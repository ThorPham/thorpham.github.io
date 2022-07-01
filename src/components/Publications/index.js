import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const PublicationList = [
  {
    title: "Deep Learning Approach for Receipt Recognition (2019)",
    description: (
      <span>
        Anh Duc Le,  <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Tuan Anh Nguyen
      </span>
    ),
    link : require('@site/static/file/1905.12817.pdf').default
  },
  {
    title: "License Plate Recognition base on Deep Neural Network (2019)",
    description: (
      <span>
        Anh Duc Le,  <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>
      </span>
    ),
    link : ""
  },
  {
    title:
      "Facial Landmark Detection with Learnable Connectivity Graph Convolutional Network (2022)",
    description: (
      <span>
       Le Quan Nguyen , <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Yanfen Li , Hanxiang Wang  , Lien Minh Dang, Hyoung-Kyu Song ,  Hyenjoon Moon
      </span>
    ),
    link : require('@site/static/file/IEEE_ACCESS.pdf').default
  },
  {
    title:
      "Key Information Extraction from Mobile-Captured Vietnamese Receipt Images using Graph Neural Networks Approach (2022)",
    description: (
      <span>
        <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Le Quan Nguyen,Nhat Truong Pham, Bao Hung Nguyen, Duc Ngoc Minh Dang, Sy Dzung Nguyen
      </span>
    ),
    link : require('@site/static/file/GTSD_2022_paper_106_final.pdf').default
  },
  {
    title:
      "Vietnamese Scene Text Detection and Recognition using Deep Learning: An Empirical Study (2022)",
    description: (
      <span>
       Nhat Truong Pham, <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Qui Nguyen Van, Bao Hung Nguyen, Duc Ngoc Minh Dang, Sy Dzung Nguyen
      </span>
    ),
    link : require('@site/static/file/GTSD_2022_paper_90_final.pdf').default
  },
];

function Feature({ title, description ,link}) {
  return (
    <div >
      <li className="text--left padding-horiz--md ">
        <h3 style={{marginBottom:"0"}}>
        {title}
        <Link style={{background:"rgba(246, 229, 141,1.0)", color:"rgba(34, 47, 62,1.0)"}} to={link} target="_blank" download><span>[Link]</span></Link>
        </h3>
        
        <p className={styles.publication}>{description}</p>
      </li>
    </div>
  );
}

export default function Publications() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 style={{background:"#eb4d4b",display:"inline-block"}}>Publications</h1>
        <ol >
          {PublicationList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ol>
      </div>
    </section>
  );
}
