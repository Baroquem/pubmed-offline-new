import React, { useState } from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';

import SearchResult from './SearchResult';

const SearchResultList = ({ results }) => {
  const { ResultListWrapper } = ReactiveList;

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