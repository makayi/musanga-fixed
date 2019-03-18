import React, { Component } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';

class AlbumSong extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleAlbumClose = this.handleAlbumClose.bind(this);
        this.handleAlbumShow = this.handleAlbumShow.bind(this);

        this.handleDeleteClose = this.handleDeleteClose.bind(this);
        this.handleDeleteShow = this.handleDeleteShow.bind(this);

        this.state = {
            showEditAlbum: false,
            showDeleteAlbum: false
        };
    }

    handleAlbumClose() {
        this.setState({ showEditAlbum: false });
    }
    handleAlbumShow() {
        this.setState({ showEditAlbum: true });
    }

    handleDeleteClose() {
        this.setState({ showDeleteAlbum: false });
    }
    handleDeleteShow() {
        this.setState({ showDeleteAlbum: true });
    }

    render() {
        return (
            <div>
                <div>
                    <Card style={cardImage}>
                        <Card.Img src="https://picsum.photos/210" />
                        <Card.Body>
                            <Card.Title>{this.props.artist}</Card.Title>
                            <Card.Subtitle>
                                {this.props.album.title}
                            </Card.Subtitle>
                            <br />
                            <div style={buttons}>
                                <Button
                                    variant="info"
                                    style={btn}
                                    onClick={this.handleAlbumShow}>
                                    Edit Album
                                </Button>
                                <Button
                                    variant="danger"
                                    style={btn}
                                    onClick={this.handleDeleteShow}>
                                    Delete Album
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Modal
                    show={this.state.showEditAlbum}
                    onHide={this.handleAlbumClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Album</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Change Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter new album name"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Add Another Song</Form.Label>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter track name"
                                    />
                                    <Button style={{ marginLeft: '8px' }}>
                                        Add
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.handleAlbumClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.handleAlbumClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.showDeleteAlbum}
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
            </div>
        );
    }
}

const cardImage = {
    width: '16rem'
};

const buttons = {
    display: 'flex',
    justifyContent: 'center'
};

const btn = {
    margin: '3px',
    fontSize: '0.7rem'
};

export default AlbumSong;
