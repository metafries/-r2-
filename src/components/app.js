import React from 'react';
import { Component } from 'react';

import ClubList from '../containers/club_list';

export default class App extends Component {
    render() {
        return(
            <div>
                <ClubList />
            </div>
        );
    }
}