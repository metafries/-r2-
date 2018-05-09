import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YT_DATA_API_V3_KEY = 'AIzaSyBrudJvBV7uhwKnJ-gCiLiPskQiWXaR5Xk';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('ivanontech');
    }
    videoSearch(term) {
        YTSearch({key: YT_DATA_API_V3_KEY, term: term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
    render () {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );  
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));