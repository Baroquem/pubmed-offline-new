import React, { useState } from 'react';

import ArticleView from './ArticleView';
import { subjectsDisplay, pubDateDisplay } from '../utils';

const SearchResult = ({article, keywordSearchHandler}) => {
  const [showArticleView, setArticleView] = useState(false);

  const toggleArticleView = () => {
    setArticleView(!showArticleView)
  }

  const articleSummary = (
    <div key={article._id} className="searchResult" onClick={toggleArticleView}>
    <span className="clickForDetail">Click for details</span>
    <span><strong>{article.title}</strong>  {pubDateDisplay(article.pubDate)}</span>
    <br/><br/>
    <span><i>Subjects</i>: {subjectsDisplay(article.subjects, keywordSearchHandler, article._id)}</span>
  </div>
  );

  return showArticleView ? 
    <ArticleView article={article} toggle={toggleArticleView} keywordSearchHandler={keywordSearchHandler} /> :
    articleSummary;
}

export default SearchResult;
