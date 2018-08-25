import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClubDetail extends Component {
    render() {
        if(!this.props.club) {
            return <div>Select a club to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Name: {this.props.club.name}</div>
                <div>Founded: {this.props.club.founded}</div>
            </div>            
        );
    }
}

function mapStateToProps(state) {
    return {
        club: state.activeClub
    };
}

export default connect(mapStateToProps)(ClubDetail);