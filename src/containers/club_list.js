import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClubList extends Component {

    renderList() {
        return this.props.clubs.map((club) => {
            return (
                <li key={club.name} className="list-group-item">{club.name}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {

    // Whatever is returned will show up as props
    // inside of ClubList
    return {
        clubs: state.clubs
    };        
}

export default connect(mapStateToProps)(ClubList);

