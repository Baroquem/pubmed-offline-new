import React from 'react';
import { ReactiveList } from '@appbaseio/reactivesearch';

import SearchResult from './SearchResult';

const SearchResultList = ({ results, searchHandler }) => {
  const { ResultListWrapper } = ReactiveList;

  return (
    <ResultListWrapper>
    {
      results.map(item => <SearchResult article={item} keywordSearchHandler={searchHandler} />)
    }
    </ResultListWrapper>
  );
}

export default SearchResultList;