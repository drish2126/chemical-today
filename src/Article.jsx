import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import './Article.css';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
const generateSingleParagraph = () => lorem.generateParagraphs(1);

const repeatText = (text, times) => {
  return Array(times).fill(text).join('\n\n');
};
const Article = () => {
  const paragraphText = generateSingleParagraph();
  const repeatedText = repeatText(paragraphText, 6);
  return (
    <article className="article">
      <button className="article-button">Industries</button>
      <h1 className="article-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <div className="article-meta">
      <span className="author">By Chemical Today.</span>
  <span className="article-date">19 December 2023</span>
  <div className="share-container">
    <span className="share-text">Share</span>
    <div className="circles">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
      </div>
  <div className="black-box"></div>
  <span className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
      <p className="article-content">
      {repeatedText}
      </p>
    </article>
  );
};

export default Article;
