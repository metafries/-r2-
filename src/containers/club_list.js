import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectClub } from '../actions/index';
import { bindActionCreators } from 'redux';

class ClubList extends Component {

    renderList() {
        return this.props.clubs.map((club) => {
            return (
                <li 
                key={club.name}
                onClick={() => this.props.selectClub(club)}
                className="list-group-item">
                {club.name}
                </li>
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

// Anything returned from this function will end of as props
// on the ClubList container
function mapDispatchToProps(dispatch) {
    // Whenever selectClub is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectClub: selectClub }, dispatch);
}

// Promote ClubList from a component to a container - it needs to know
// about this new dispatch method, selectClub. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ClubList);

