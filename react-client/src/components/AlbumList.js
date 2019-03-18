import React, { Component } from 'react';
import Album from './Album';
import AlbumSong from './AlbumSong';
import SongList from './SongList';
import { Jumbotron, Button, Modal, Form } from 'react-bootstrap';

class AlbumList extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDeleteClose = this.handleDeleteClose.bind(this);
        this.handleDeleteShow = this.handleDeleteShow.bind(this);
        this.handleAlbumEditClose = this.handleAlbumEditClose.bind(this);
        this.handleAlbumEditShow = this.handleAlbumEditShow.bind(this);
        this.handleArtistEditClose = this.handleArtistEditClose.bind(this);
        this.handleArtistEditShow = this.handleArtistEditShow.bind(this);

        this.state = {
            selectedAlbum: [],
            active: false,
            showDeleteArtist: false,
            showAddAlbum: false,
            showEditArtist: false,
            clicked: false,
            clickedStatus: props.location.state.artistAlbums.map(
                element => false
            )
        };
    }

    handleClick(index, album) {
        const newClickStatus = [...this.state.clickedStatus];
        newClickStatus[index] = !this.state.clickedStatus[index];
        this.setState({ clickStatus: newClickStatus, selectedAlbum: album });
    }

    handleAlbumEditClose() {
        this.setState({ showAddAlbum: false });
    }
    handleAlbumEditShow() {
        this.setState({ showAddAlbum: true });
    }

    handleDeleteClose() {
        this.setState({ showDeleteArtist: false });
    }
    handleDeleteShow() {
        this.setState({ showDeleteArtist: true });
    }

    handleArtistEditClose() {
        this.setState({ showEditArtist: false });
    }
    handleArtistEditShow() {
        this.setState({ showEditArtist: true });
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>{this.props.location.state.artistName}'s Collection</h1>
                    <Button
                        style={btn}
                        variant="primary"
                        onClick={this.handleAlbumEditShow}>
                        Add New Album
                    </Button>
                    <Button
                        style={btn}
                        variant="info"
                        onClick={this.handleArtistEditShow}>
                        Edit Artist
                    </Button>
                </Jumbotron>
                <div style={albumList}>
                    <div style={albumColumn}>
                        <h3>Click to View Tracks</h3>
                        {this.props.location.state.artistAlbums.map(
                            (album, index) => {
                                return (
                                    <Album
                                        albumName={album.title}
                                        active={this.state.active}
                                        index={index}
                                        handleClick={this.handleClick.bind(
                                            this
                                        )}
                                        condition={this.state.clicked}
                                        clicked={
                                            this.state.clickedStatus[index]
                                        }
                                        album={album}
                                    />
                                );
                            }
                        )}
                    </div>
                    <div style={songColumn}>
                        <h3>.....</h3>
                        <AlbumSong
                            artist={this.props.location.state.artistName}
                            album={this.state.selectedAlbum}
                        />
                    </div>
                    <div style={songListColumn}>
                        <h3>Tracks</h3>
                        <SongList albumSongs={this.state.selectedAlbum.songs} />
                    </div>
                </div>
                <Modal
                    show={this.state.showDeleteArtist}
                    onHide={this.handleDeleteClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Album</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.handleDeleteClose}>
                            Close
                        </Button>
                        <Button
                            variant="danger"
                            onClick={this.handleDeleteClose}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.showAddAlbum}
                    onHide={this.handleAlbumEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Album</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Add Album</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter new album name"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.handleAlbumEditClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.handleAlbumEditClose}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.showEditArtist}
                    onHide={this.handleArtistEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Artist</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Change Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter new artist name"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.handleArtistEditClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.handleArtistEditClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const albumList = {
    display: 'flex',
    justifyContent: 'center'
};

const albumColumn = {
    margin: '10px'
};

const songColumn = {
    margin: '10px'
};

const songListColumn = {
    margin: '10px'
};

const btn = {
    margin: '3px',
    fontSize: '0.7rem'
};

export default AlbumList;
