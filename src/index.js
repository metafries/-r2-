import React from 'react'
import ReactDOM from 'react-dom'

const YT_DATA_API_V3_KEY = 'AIzaSyBrudJvBV7uhwKnJ-gCiLiPskQiWXaR5Xk';
const HelloWorld = function() {
    return <div>Hello World!</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector('.container'));