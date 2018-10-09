import React, { Component } from 'react';
import { connect } from 'react';
import { fetchPosts } from '../actions/blog_index';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                Posts Index                
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex);