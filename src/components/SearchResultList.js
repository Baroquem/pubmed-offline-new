import React, { useState } from 'react';
import {
  ReactiveList,
  ResultList,
} from '@appbaseio/reactivesearch';

import ArticleView from './ArticleView';
//import SearchResult from './SearchResult';
import {
  subjectsDisplay,
  pubDateDisplay,
} from '../utils';

const SearchResultList = ({ results }) => {
  const { ResultListWrapper } = ReactiveList;
  const [showArticleView, setArticleView] = useState(false);

  const toggleArticleView = () => {
    setArticleView(!showArticleView)
  }

  const mySearchHandler = (search) => {
    console.log("handling search", search)
    //keywordSearchHandler(search)
  }

  return (
    <ResultListWrapper>
    {
      results.map(item => 
        showArticleView ?
          <ArticleView article={item} toggle={toggleArticleView} /> :
        (
          <ResultList.Content>
            <div key={item._id} className="searchResult" onClick={toggleArticleView}>
              <span className="clickForDetail">Click for details</span>
              <ResultList.Title
                  dangerouslySetInnerHTML={{
                      __html: `${item.title} (${pubDateDisplay(item.pubDate)})`
                  }}
              />
              <ResultList.Description>
                <div>
                  {/* <div>by {item.authors.join('; ')}</div> */}
                  {/* <br/><br/> */}
                  <span><i>Subjects</i>: {subjectsDisplay(item.subjects, mySearchHandler)}</span> 
                </div>
              </ResultList.Description>
            </div>
          </ResultList.Content>
        )
      )
    }
  </ResultListWrapper>
  );
}

export default SearchResultList;