import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
const PublicationList = [
  {
    title: "Deep Learning Approach for Receipt Recognition.",
    description: (
      <span>
        Anh Duc Le,  <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Tuan Anh Nguyen
      </span>
    ),
  },
  {
    title: "License Plate Recognition base on Deep Neural Network.",
    description: (
      <span>
        Anh Duc Le,  <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>
      </span>
    ),
  },
  {
    title:
      "Facial Landmark Detection with Learnable Connectivity Graph Convolutional Network.",
    description: (
      <span>
       Le Quan Nguyen , <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Yanfen Li , Hanxiang Wang  , Lien Minh Dang, Hyoung-Kyu Song ,  Hyenjoon Moon
      </span>
    ),
  },
  {
    title:
      "Key Information Extraction from Mobile-Captured Vietnamese Receipt Images using Graph Neural Networks Approach.",
    description: (
      <span>
        <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Le Quan Nguyen,Nhat Truong Pham, Bao Hung Nguyen, Duc Ngoc Minh Dang, Sy Dzung Nguyen
      </span>
    ),
  },
  {
    title:
      "Vietnamese Scene Text Detection and Recognition using Deep Learning: An Empirical Study.",
    description: (
      <span>
       Nhat Truong Pham, <strong style={{background:"rgba(50, 255, 126,0.6)"}}>Dung Van Pham</strong>, Qui Nguyen Van, Bao Hung Nguyen, Duc Ngoc Minh Dang, Sy Dzung Nguyen
      </span>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div >
      <li className="text--left padding-horiz--md ">
        <h3 style={{marginBottom:"0"}}>{title}</h3>
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
