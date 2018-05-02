import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const YT_DATA_API_V3_KEY = 'AIzaSyBrudJvBV7uhwKnJ-gCiLiPskQiWXaR5Xk';
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));