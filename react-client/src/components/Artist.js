import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArtists, deleteArtist } from '../redux/actions/artistActions';

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDeleteArtist: false
        };

        this.handleDeleteClose = this.handleDeleteClose.bind(this);
        this.handleDeleteShow = this.handleDeleteShow.bind(this);
        this.deleteArtist = this.deleteArtist.bind(this);
    }

    handleDeleteClose() {
        this.setState({ showDeleteArtist: false });
    }
    handleDeleteShow() {
        this.setState({ showDeleteArtist: true });
    }

    deleteArtist() {
        this.props.deleteArtist(this.props.id);
        this.props.fetchArtists();
        this.setState({ showDeleteArtist: false });
        window.location.reload();
    }

    render() {
        let source = `https://randomuser.me//api//portraits//men//${
            this.props.picNumber
        }.jpg`;

        const imgSource = {
            content: `url(${source})`
        };

        return (
            <div>
                <Card style={cardStyles}>
                    <Card.Img style={imgSource} />
                    <Card.Body>
                        <Card.Title as="h6">{this.props.name}</Card.Title>
                        <Button variant="dark" style={btnStyle}>
                            <Link
                                to={{
                                    pathname: `/albums/${this.props.name}`,
                                    state: {
                                        artistName: `${this.props.name}`,
                                        artistAlbums: this.props.albums
                                    }
                                }}>
                                Manage
                            </Link>
                        </Button>
                        <Button
                            variant="danger"
                            style={btnStyle}
                            onClick={this.handleDeleteShow}>
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
                <Modal
                    show={this.state.showDeleteArtist}
                    onHide={this.handleDeleteClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Artist</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.handleDeleteClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={this.deleteArtist}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const cardStyles = {
    width: '12rem',
    margin: '0.5rem'
};

const btnStyle = {
    margin: '3px',
    fontSize: '0.7rem'
};

const mapStateToProps = state => {
    return {
        artists: state.artists
    };
};

const mapDispatchToProps = {
    fetchArtists,
    deleteArtist
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Artist);

//export default Artist;
