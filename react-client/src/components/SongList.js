import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class SongList extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover style={tableStyling}>
                    <thead>
                        <tr>
                            <th />
                            <th>Song Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.albumSongs &&
                            this.props.albumSongs.map((song, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{song.track}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const tableStyling = {
    width: '25rem'
};

export default SongList;
