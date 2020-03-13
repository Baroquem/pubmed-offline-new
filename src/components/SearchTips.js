import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SearchTips = () => {
  return (
    <Fragment>
      <header>
        <div class="navlinks">
          <Link to="/">Back to search</Link>
        </div>
        <h1>CPEP - PubMed search</h1>
      </header>
      <h4>How to search</h4>
      <ol>
        <li>By default, words entered into the search box are treated as an AND boolean search. For example, typing <span className="example">aspirin tylenol</span> will return a list of all article citations that include the term "aspirin" <i>and</i> the term "tylenol."
        </li>
        <li>To perform a boolean OR search, place a pipe (|) between the search terms. Typing <span className="example">aspirin | tylenol</span>will return a list of all article citations that include the term "aspirin" <i>or</i> the term "tylenol."</li>
        <li>You can search for a phrase by entering a set of words in quotation marks. E.g., typing <span className="example">"patient care"</span> will result in a search for the words <i>patient</i> and <i>care</i> together (adjacent to one another), not separately in the text.</li>
        <li>You can exclude terms from your search by prefacing them with a hypen (-). If you wanted to modify the previous search so that you only saw articles about patient care that did not involve cancer, you could type <span className="example">"patient care" -cancer</span>.</li>
        <li>Clicking one of the highlighted keywords in an article citation from a previous search result will immediately perform a keyword search for that term. This type of search returns a list of article citations that include that term <i>only</i> as a subject keyword.</li>
      </ol>
      <h4>Notes on search</h4>
      <ol>
        <li>Searches are case-insensitive. Regular text searches (i.e., non-keyword searches) look for query terms in a citation's title, abstract, and keywords, and are ranked by relevance.</li>
        <li>The search engine uses a stemmer. Thus, for example, a search for "puppies" will include results for "puppy" as well.</li>
      </ol>
      <h4>Advanced use</h4>
      <p>For more complex searches, the following syntax may be added to the above:</p>
      <ol>
        <li>Parentheses may be used to group words or phrases for precedence.</li>
        <li>A tilde (~) and number after a word can be used to specify "fuzziness" (edit distance), which is the number of character changes that can be made to a word and still show up in search results. For example, <span className="example">cats~1</span> will return results for not only "cats", but also "bats", "rats", "bath", "cars", etc. A higher number means that more character changes are allowed, adding even more disparate results. <span className="example">cats~2</span>, besides all the prior examples, would also bring in results for "labs", "bits", "oats", and so forth.</li>
        <li>A similar technique can be applied to <em>phrases</em>. When applied to a phrase, the number following the tilde determines how many intervening words are allowed between the search query phrase to be included in results. For example, <span className="example">"regulatory controls"~1</span> will also match phrases like "regulatory complex controls" and "regulatory circuit controls."</li>
      </ol>
    </Fragment>
  );
}

export default SearchTips;