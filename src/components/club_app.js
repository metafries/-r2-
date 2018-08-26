import React from 'react';
import { Component } from 'react';

import ClubList from '../containers/club_list';
import ClubDetail from '../containers/club_detail';

export default class App extends Component {
    render() {
        return(
            <div>
                <ClubList />
                <ClubDetail />
            </div>
        );
    }
}