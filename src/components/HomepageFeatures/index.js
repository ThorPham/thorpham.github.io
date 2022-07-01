import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple OCR',
    img: require('@site/static/img/ocr.jpeg').default,
    description: (
      <>
       Detect and recognition for vietnamese and english language
      <ul style={{listStyle:"none",textAlign:"left",width:"60%",margin:"auto"}}>
        <li> FrontEnd : Reactjs, pure Css</li>
        <li>Backend : Pytorch, FastAPI</li>
        <li>Database : FireBase</li>
        <li>Web Demo : </li>
        <li>Video Demo :</li> 
      </ul>
      </>
    ),
  },
  {
    title: 'Remove Background',
    img: require('@site/static/img/removebg.jpeg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'ALPR',
    img: require('@site/static/img/alpr.jpg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'ALPR',
    img: require('@site/static/img/alpr.jpg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" alt="#" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <>{description}</>
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
