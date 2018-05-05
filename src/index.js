import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'

const YT_DATA_API_V3_KEY = 'AIzaSyBrudJvBV7uhwKnJ-gCiLiPskQiWXaR5Xk';
YTSearch({key: YT_DATA_API_V3_KEY, term: 'surfboards'}, function(data) {
    console.log(data)
});
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));