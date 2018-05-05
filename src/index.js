import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'

const YT_DATA_API_V3_KEY = 'AIzaSyBrudJvBV7uhwKnJ-gCiLiPskQiWXaR5Xk';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: YT_DATA_API_V3_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }
    render () {
        return (
            <div>
                <SearchBar />
            </div>
        );  
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));