import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
const PublicationList = [
  {
    title: "1. Deep Learning Approach for Receipt Recognition.",
    description: (
      <span>
        Anh Duc Le,  <strong style={{background:"#f6e58d"}}>Dung Van Pham</strong>, Tuan Anh Nguyen
      </span>
    ),
  },
  {
    title: "2. License Plate Recognition base on Deep Neural Network.",
    description: (
      <span>
        Anh Duc Le,  <strong style={{background:"#f6e58d"}}>Dung Van Pham</strong>
      </span>
    ),
  },
  {
    title:
      "3. Facial Landmark Detection with Learnable Connectivity Graph Convolutional Network.",
    description: (
      <span>
       Le Quan Nguyen , <strong style={{background:"#f6e58d"}}>Dung Van Pham</strong>, Yanfen Li , Hanxiang Wang  , Lien Minh Dang, Hyoung-Kyu Song ,  Hyenjoon Moon
      </span>
    ),
  },
  {
    title:
      "4. Key Information Extraction from Mobile-Captured Vietnamese Receipt Images using Graph Neural Networks Approach.",
    description: (
      <span>
        <strong style={{background:"#f6e58d"}}>Dung Van Pham</strong>, Le Quan Nguyen,Nhat Truong Pham, Bao Hung Nguyen, Duc Ngoc Minh Dang, Sy Dzung Nguyen
      </span>
    ),
  },
  {
    title:
      "5. Vietnamese Scene Text Detection and Recognition using Deep Learning: An Empirical Study.",
    description: (
      <span>
       Nhat Truong Pham, <strong style={{background:"#f6e58d"}}>Dung Van Pham</strong>, Qui Nguyen Van, Bao Hung Nguyen, Duc Ngoc Minh Dang, Sy Dzung Nguyen
      </span>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div >
      <div className="text--left padding-horiz--md ">
        <h3 style={{marginBottom:"0"}}>{title}</h3>
        <p className={styles.publication}>{description}</p>
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Publications</h1>
        <div >
          {PublicationList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
