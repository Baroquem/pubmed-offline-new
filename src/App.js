import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  SelectedFilters,
} from '@appbaseio/reactivesearch';

import './App.css';
import Bookbag from './components/bookbag/Bookbag';
import SearchTips from './components/SearchTips';
import SearchResultList from './components/SearchResultList';

function App() {

  const renderError = error => {
    console.log("ERROR", error);
  }

  const keywordSearchHandler = (search) => {
    console.log("handling search", search)
    // history.push(`/?query="${search.value}"`)
  }

  const mainComponent =
    <>
      <header>
        <div className="navlinks">
          <div id="bookbag"><Link to="/bookbag">Bookbag</Link></div>
          <div id="howto"><Link to="/howto">Search tips</Link></div>
        </div>
        <h1>CPEP - PubMed search</h1>
      </header>
      <SelectedFilters />
      <DataSearch
        componentId="query"
        className="search-bar"
        dataField={["title","abstract","subjects"]}
        searchOperators={true}
        queryFormat="and"
        placeholder="Search terms..."
        renderError={renderError}
        URLParams
        showClear
      />
      <ReactiveList
        componentId="results"
        react={{and: ['query']}}
        pagination={true}
        URLParams
      >
        {({ data, error, loading }) => (
          <SearchResultList results={data} searchHandler={keywordSearchHandler} />
        )}
      </ReactiveList>
    </>;

  return (
    <div className="App">
      <ReactiveBase app="articles" credentials="this doesn't really matter" url="http://localhost:9200">
        <BrowserRouter>
          <Route exact path="/" render={() => mainComponent} />
          <Route path="/bookbag" component={Bookbag} />
          <Route path="/howto" component={SearchTips} />
        </BrowserRouter>
      </ReactiveBase>
    </div>
  );
}

export default App;
