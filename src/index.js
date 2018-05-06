import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YT_DATA_API_V3_KEY = 'AIzaSyBrudJvBV7uhwKnJ-gCiLiPskQiWXaR5Xk';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: YT_DATA_API_V3_KEY, term: 'ivanontech'}, (videos) => {
            this.setState({videos});
        });
    }
    render () {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );  
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));