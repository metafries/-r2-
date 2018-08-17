import React, { Component } from 'react';

export default class ClubList extends Component {

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