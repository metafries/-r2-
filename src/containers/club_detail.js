import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClubDetail extends Component {
    render() {
        return (
            <div>Club Detail!</div>            
        );
    }
}

function mapStateToProps(state) {
    return {
        club: state.activeClub
    };
}

export default connect(mapStateToProps)(ClubDetail);