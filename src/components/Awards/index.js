import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const AwardsList = [
   {
      title: "Top 5 ZALO hackathon (2019)",
      description: (
        <span>
          Topic : Illegal Nine-dash Line Detector
        </span>
      ),
      link : ""
    },
    {
      title: "Incentive award in AI4VN challenge (2020)",
      description: (
        <span>
          Topic : Smart Citizens for Smart Cities
        </span>
      ),
      link : ""
    },
  {
    title: "Incentive award in AI challenge HCM (2020)",
    description: (
      <span>
        Topic : Multi-Class Multi-Movement Vehicle Counting 
      </span>
    ),
    link : require('@site/static/img/award-1.png').default
  },
  {
    title: "Incentive award in AI challenge HCM (2021)",
    description: (
      <span>
       Topic : Vietnamese Scene Text Recognition
      </span>
    ),
    link : require('@site/static/img/Award-2.jpeg').default
  },
  
];

function Feature({ title, description ,link}) {
  return (
    <div >
      <li className="text--left padding-horiz--md ">
        <h4 style={{marginBottom:"0"}}>
        {title}
        {link ? <Link style={{background:"rgba(246, 229, 141,1.0)", color:"rgba(34, 47, 62,1.0)"}} to={link} target="_blank" download><span>[Link]</span></Link> :""}
        </h4>
        
        <p className={styles.award}>{description}</p>
      </li>
    </div>
  );
}

export default function Awards() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 style={{background:"#eb4d4b",display:"inline-block"}}>Awards and Honors</h1>
        <ol >
          {AwardsList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ol>
      </div>
    </section>
  );
}
