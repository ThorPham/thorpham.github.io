import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const FeatureList = [
  {
    title: "Modern JavaScript: ES6 Basics",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/72Z63YQRXUSS",
  },
  {
    title: "Object Oriented Programming in JavaScript",
    organization: "Coursera",
    url: "https://coursera.org/share/2f1e73c471abb0ed87518fe8fd44a59a",
  },
  {
    title: "Linear Regression with NumPy and Python",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/LD9UVQNW62WR",
  },
  {
    title: " Principal Component Analysis with NumPy",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/ZRWF5Q9C89MQ",
  },
  {
    title: "Image Compression with K-Means Clustering",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/KYJXERE9Z5M6",
  },
  {
    title: "Named Entity Recognition using LSTMs with Keras",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/AWGL7JQYLFDC",
  },

  {
    title: "Neural Network Visualizer Web App with Python",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/9JCB6WVYKG2X",
  },
  {
    title: "Programming Fundamentals",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/7YMUKM56K6LY",
  },

  {
    title: "Project: Creating Your First C++ Application",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/L9QZEP8QXGHZ",
  },

  {
    title: "Capstone Project",
    organization: "GUVI Geek Networks, IITM Research Park Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=2j86528w6Gg519c396&course=dl_capstone_project",
  },
  {
    title: "Feedforward Neural Networks",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=j787lh5YH9d52x1658&course=dl_feedforward_neural_networks",
  },
  {
    title: "GIT",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=m96v1367615y2SXt1A&course=git",
  },

  {
    title: "Game development using PyGame",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=1K3h1Zoq96R556W5v6&course=pygame_english",
  },

  {
    title: "Introduction to Pytorch",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=oy7Z51G4550q7184sa&course=dl_introduction_to_pytorch",
  },

  {
    title: "JavaScript",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=91aDC6oLh563360r1k&course=javascript_en",
  },

  {
    title: "Primitive Neurons",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=6fZxTE55823l92Pw17&course=dl_primitive_neurons",
  },

  {
    title: "Sigmoid Neuron ",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=247myG2Y85ES116559&course=dl_sigmoid_neuron",
  },

  {
    title: "Training Feedforward Neural Networks ",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=82952872Q3V051Mw51&course=dl_training_feedforward_neural_networks",
  },

  {
    title: "Convolutional Neural Networks ",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=3bDQ2aj73S85081tv5&course=dl_convolutional_neural_networks",
  },

  {
    title: "Encoder Decoder Models",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=Yg78J5t72EG17A350T&course=dl_encoder_decoder_models",
  },

  {
    title: "Introduction to Object Detection",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=441L16591ke05En2o8&course=dl_introduction_to_object_detection",
  },

  {
    title: "Deep Convolutional Neural Networks",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=1Z7Y80Q257Gsi4r560&course=dl_deep_convolutional_neural_networks",
  },

  {
    title: "Optimization Algorithms",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=8y51557GEN2LU1F842&course=dl_optimization_algorithms",
  },
  {
    title: "Sequence Models",
    organization: "GUVI Geek Networks, IITM Research Park",
    url: "https://www.guvi.in/verify-certificate?id=154c983u745Z1Csf35&course=dl_sequence_models",
  },
  {
    title:
      "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/6DU3QR3YWXYE",
  },
  {
    title: "Convolutional Neural Networks",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/LCGRN6YXRJ9H",
  },
  {
    title:
      "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/65J8Y4G6G6QR",
  },
  {
    title:
      "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/65J8Y4G6G6QR",
  },
  {
    title: "Mathematics for Machine Learning: Linear Algebra",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/E6W4XJ7J266R",
  },
  {
    title: "Matrix Methods",
    organization: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/E6W4XJ7J266R",
  },
];

function Feature({ organization, title, url }) {
  return (
    <div className={clsx("col col--4 ")}>
      <div className="text--left padding-horiz--md">
        <ul
          className="text--center padding-horiz--md"
          style={{
            textAlign: "left",
            display: "inline-block",
            backgroundColor: "rgba(241, 242, 246,0.5)",
            borderRadius: "5px",
            listStyle: "none",
          }}
        >
          <li
            style={{
              fontWeight: "bold",
              borderBottom:"3px solid rgba(46, 213, 115,0.5)"
            }}
          >
            {title}
          </li>
          <span
            style={{
              fontStyle: "italic",
            }}
          >
            {organization} <span><Link style={{backgroundColor:"rgba(236, 204, 104,0.5)",color:"rgba(47, 53, 66,1.0)"}} to={url}>Link</Link></span>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 style={{ background: "#eb4d4b", display: "inline-block" }}>
          Certificates
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
