import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";
const FeatureList = [
  {
    title: 'Simple OCR',
    img: require('@site/static/img/ocr.jpeg').default,
    description: (
      <>
      <ul style={{listStyle:"square", textAlign:"left"}}>
        <li>Feature : Detect and recognition for vietnamese and english language</li>
        <li>FrontEnd : Reactjs, pure Css</li>
        <li>Backend : Pytorch, FastAPI</li>
        <li>Database : FireBase</li>
        <li>Web Demo : <Link to="https://thorpham.github.io/simple-ocr-website/">demo</Link> </li>
        <li>Video Demo : <Link to="https://www.youtube.com/watch?v=wdtd87Yl3wA&ab_channel=DungPham">demo</Link></li> 
        <li>Source code : <Link to="https://github.com/ThorPham/simple-ocr-website">code</Link></li>
      </ul>
      </>
    ),
  },
  {
    title: 'Remove Background',
    img: require('@site/static/img/removebg.jpeg').default,
    description: (
      <>
        <ul style={{listStyle:"square", textAlign:"left"}}>
        <li>Feature : Detect and recognition for vietnamese and english language</li>
        <li>FrontEnd : Reactjs, pure Css</li>
        <li>Backend : Pytorch, FastAPI</li>
        <li>Database : FireBase</li>
        <li>Web Demo : <Link to="https://thorpham.github.io/simple-ocr-website/">demo</Link> </li>
        <li>Video Demo : <Link to="https://www.youtube.com/watch?v=wdtd87Yl3wA&ab_channel=DungPham">demo</Link></li> 
        <li>Source code : <Link to="https://github.com/ThorPham/simple-ocr-website">code</Link></li>
      </ul>
      </>
    ),
  },
  {
    title: 'ALPR',
    img: require('@site/static/img/alpr.jpg').default,
    description: (
      <>
       <ul style={{listStyle:"square", textAlign:"left"}}>
        <li>Feature : Detect and recognition for vietnamese and english language</li>
        <li>FrontEnd : Reactjs, pure Css</li>
        <li>Backend : Pytorch, FastAPI</li>
        <li>Database : FireBase</li>
        <li>Web Demo : <Link to="https://thorpham.github.io/simple-ocr-website/">demo</Link> </li>
        <li>Video Demo : <Link to="https://www.youtube.com/watch?v=wdtd87Yl3wA&ab_channel=DungPham">demo</Link></li> 
        <li>Source code : <Link to="https://github.com/ThorPham/simple-ocr-website">code</Link></li>
      </ul>
      </>
    ),
  },
  {
    title: 'ALPR',
    img: require('@site/static/img/alpr.jpg').default,
    description: (
      <>
        <ul style={{listStyle:"square", textAlign:"left"}}>
        <li>Feature : Detect and recognition for vietnamese and english language</li>
        <li>FrontEnd : Reactjs, pure Css</li>
        <li>Backend : Pytorch, FastAPI</li>
        <li>Database : FireBase</li>
        <li>Web Demo : <Link to="https://thorpham.github.io/simple-ocr-website/">demo</Link> </li>
        <li>Video Demo : <Link to="https://www.youtube.com/watch?v=wdtd87Yl3wA&ab_channel=DungPham">demo</Link></li> 
        <li>Source code : <Link to="https://github.com/ThorPham/simple-ocr-website">code</Link></li>
      </ul>
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--6 ')} >
      <div className="text--center" >
        <img src={img} className={styles.featureSvg} role="img" alt="#" />
      </div>
      <div className="text--center padding-horiz--md" >
        <h3 style={{backgroundColor:"rgba(85, 239, 196,0.6)",display:"inline-block"}}>{title}</h3>
        <div style={{ width:"60%",margin:"auto"}}>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 style={{background:"#eb4d4b",display:"inline-block"}}>Personal Projects</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
