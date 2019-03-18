import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Album extends Component {
    render() {
        return (
            <div
                style={albumCard}
                className={
                    this.props.condition ? 'albumCard-active' : 'albumCard'
                }
                onClick={() =>
                    this.props.handleClick(this.props.index, this.props.album)
                }>
                <Image
                    src="https://i.ibb.co/tD03Hsm/album.png"
                    thumbnail
                    style={albumImage}
                />
                <p>{this.props.albumName}</p>
            </div>
        );
    }
}

const albumCard = {
    display: 'flex',
    width: '18rem',
    height: '5rem',
    margin: '5px',
    padding: '3px',
    alignItems: 'center',
    borderRadius: '5px'
};

const albumImage = {
    maxHeight: '100%',
    maxWidth: '100%',
    marginRight: '10px'
};

export default Album;
