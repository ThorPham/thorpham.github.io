import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/archive',
    component: ComponentCreator('/archive', 'e8f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'be8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/Drowsiness-detection',
    component: ComponentCreator('/blog/Drowsiness-detection', '909'),
    exact: true
  },
  {
    path: '/blog/Feature-extraction-trong-computer-vision',
    component: ComponentCreator('/blog/Feature-extraction-trong-computer-vision', '9be'),
    exact: true
  },
  {
    path: '/blog/Graph-convolution-network-cho-bài-toán-rút-trích-thông-tin',
    component: ComponentCreator('/blog/Graph-convolution-network-cho-bài-toán-rút-trích-thông-tin', '1d9'),
    exact: true
  },
  {
    path: '/blog/Nhận-dạng-chữ-số-viết-tay',
    component: ComponentCreator('/blog/Nhận-dạng-chữ-số-viết-tay', '184'),
    exact: true
  },
  {
    path: '/blog/Nhận-diện-pedestrian-với-window-search',
    component: ComponentCreator('/blog/Nhận-diện-pedestrian-với-window-search', '6d6'),
    exact: true
  },
  {
    path: '/blog/Object-detection-từ-R-CNN-đến-Faster-R-CNN',
    component: ComponentCreator('/blog/Object-detection-từ-R-CNN-đến-Faster-R-CNN', '51a'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '38c'),
    exact: true
  },
  {
    path: '/blog/Quá-trình-phát-triển-của-CNN-từ-LeNet-đến-DenseNet',
    component: ComponentCreator('/blog/Quá-trình-phát-triển-của-CNN-từ-LeNet-đến-DenseNet', '3e6'),
    exact: true
  },
  {
    path: '/blog/Sentiment-Analysis-sử-dụng-Tf-Idf',
    component: ComponentCreator('/blog/Sentiment-Analysis-sử-dụng-Tf-Idf', '029'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/cnn',
    component: ComponentCreator('/blog/tags/cnn', '4a6'),
    exact: true
  },
  {
    path: '/blog/tags/computer-vision',
    component: ComponentCreator('/blog/tags/computer-vision', '03d'),
    exact: true
  },
  {
    path: '/blog/tags/deep-learning',
    component: ComponentCreator('/blog/tags/deep-learning', '895'),
    exact: true
  },
  {
    path: '/blog/tags/dlib',
    component: ComponentCreator('/blog/tags/dlib', '366'),
    exact: true
  },
  {
    path: '/blog/tags/face-recognition',
    component: ComponentCreator('/blog/tags/face-recognition', '3f1'),
    exact: true
  },
  {
    path: '/blog/tags/feature-extraction',
    component: ComponentCreator('/blog/tags/feature-extraction', 'b93'),
    exact: true
  },
  {
    path: '/blog/tags/graph',
    component: ComponentCreator('/blog/tags/graph', 'f22'),
    exact: true
  },
  {
    path: '/blog/tags/keras',
    component: ComponentCreator('/blog/tags/keras', '78b'),
    exact: true
  },
  {
    path: '/blog/tags/nlp',
    component: ComponentCreator('/blog/tags/nlp', 'a41'),
    exact: true
  },
  {
    path: '/blog/tags/object-detection',
    component: ComponentCreator('/blog/tags/object-detection', '3c6'),
    exact: true
  },
  {
    path: '/blog/tags/opencv',
    component: ComponentCreator('/blog/tags/opencv', '360'),
    exact: true
  },
  {
    path: '/blog/tags/python',
    component: ComponentCreator('/blog/tags/python', '57f'),
    exact: true
  },
  {
    path: '/blog/tags/sklearn',
    component: ComponentCreator('/blog/tags/sklearn', '1e5'),
    exact: true
  },
  {
    path: '/blog/tags/word-2-vec',
    component: ComponentCreator('/blog/tags/word-2-vec', '6a9'),
    exact: true
  },
  {
    path: '/blog/Tìm-hiểu-eigenFace-trong-face-recognite',
    component: ComponentCreator('/blog/Tìm-hiểu-eigenFace-trong-face-recognite', '38b'),
    exact: true
  },
  {
    path: '/blog/Tìm-hiểu-regression-trong-object-detection',
    component: ComponentCreator('/blog/Tìm-hiểu-regression-trong-object-detection', '1c8'),
    exact: true
  },
  {
    path: '/blog/Tìm-hiểu-về-thư-viện-keras-trong-deep-learning',
    component: ComponentCreator('/blog/Tìm-hiểu-về-thư-viện-keras-trong-deep-learning', 'bd3'),
    exact: true
  },
  {
    path: '/blog/Tìm-hiểu-về-Word2Vec',
    component: ComponentCreator('/blog/Tìm-hiểu-về-Word2Vec', '719'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', '438'),
    exact: true
  },
  {
    path: '/cs',
    component: ComponentCreator('/cs', 'ce7'),
    routes: [
      {
        path: '/cs',
        component: ComponentCreator('/cs', 'b16'),
        routes: [
          {
            path: '/cs',
            component: ComponentCreator('/cs', '1f4'),
            routes: [
              {
                path: '/cs/basic-programming/create-a-blog-post',
                component: ComponentCreator('/cs/basic-programming/create-a-blog-post', '8e1'),
                exact: true,
                sidebar: "csSidebar"
              },
              {
                path: '/cs/basic-programming/Pointers',
                component: ComponentCreator('/cs/basic-programming/Pointers', 'c80'),
                exact: true,
                sidebar: "csSidebar"
              },
              {
                path: '/cs/basic-programming/Pointers/Pointers-Basic',
                component: ComponentCreator('/cs/basic-programming/Pointers/Pointers-Basic', 'bc6'),
                exact: true,
                sidebar: "csSidebar"
              },
              {
                path: '/cs/intro',
                component: ComponentCreator('/cs/intro', '5fb'),
                exact: true,
                sidebar: "csSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '113'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '033'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3ae'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
