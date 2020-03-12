import React, { useState } from 'react';
import {
  ReactiveList,
  ResultList,
} from '@appbaseio/reactivesearch';

import ArticleView from './ArticleView';
import SearchResult from './SearchResult';
import {
  subjectsDisplay,
  pubDateDisplay,
} from '../utils';

const SearchResultList = ({ results }) => {
  const { ResultListWrapper } = ReactiveList;
  const [itemsShowingArticleView, setItemsShowingArticleView] = useState([]);

  const toggleArticleView = id => {
    console.log("Click!", id)
    if (itemsShowingArticleView.includes(id)) {
      console.log("unsetting")
      //setItemsShowingArticleView(itemsShowingArticleView.filter(i => i !== id));
      setItemsShowingArticleView()
    }
    else {
      console.log("setting")
      setItemsShowingArticleView([...itemsShowingArticleView, id])
    }
  }

  const showArticleView = id => {
    return itemsShowingArticleView.includes(id);
  }

  const mySearchHandler = (search) => {
    console.log("handling search", search)
    //keywordSearchHandler(search)
  }

  return (
    <ResultListWrapper>
    {
      results.map(item => <SearchResult article={item} keywordSearchHandler={mySearchHandler} />)
    }
  </ResultListWrapper>
  );
}

export default SearchResultList;