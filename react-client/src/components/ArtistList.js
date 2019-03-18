import React, { Component } from 'react';
import Artist from './Artist';
import {
    Jumbotron,
    Button,
    InputGroup,
    FormControl,
    Modal,
    Form
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchArtists, addArtist } from '../redux/actions/artistActions';
import $ from 'jquery';
import _ from 'underscore';

class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            currentlyDisplayed: this.props.artists,
            show: false,
            albums: [],
            showDeleteArtist: false
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.handleAddAlbum = this.handleAddAlbum.bind(this);
        this.handleSaveArtist = this.handleSaveArtist.bind(this);
    }

    handleClose() {
        this.setState({ show: false, albums: [] });
    }
    handleShow() {
        this.setState({ show: true });
    }

    handleSaveArtist(e) {
        e.preventDefault(); // prevent the defualt event side-effect. I think.
        const artist = {
            name: this.refs.nameInput.value,
            photo: 'defArtist.jpg',
            albums: this.state.albums
        };

        this.props.addArtist(artist);
        this.setState({ show: false, albums: [] });
        window.location.reload();
    }

    handleAddAlbum(e) {
        e.preventDefault();
        const album = {
            title: this.refs.albumInput.value, // I know, string refs are legacy. But I like them, so...
            image: 'defAlbum.jpg',
            songs: []
        };
        this.setState({
            albums: this.state.albums.concat([album])
        });

        this.refs.albumInput.value = '';
    }

    onInputChange(event) {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        let newlyDisplayed = _.filter(this.props.artists, artist =>
            artist.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        this.setState({
            searchTerm: event.target.value,
            currentlyDisplayed: newlyDisplayed
        });
        console.log(event.target.value);
    }

    getRandomNumberPic(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    componentDidMount() {
        this.props.fetchArtists();
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Jumbotron style={jumboStyle}>
                    <h1>Welcome, Music Lovers!</h1>
                    <p>
                        Search for your favourite artists and view their albums
                    </p>
                    <Button style={btnStyle} onClick={this.handleShow}>
                        Add Your Own Artist
                    </Button>
                    <div style={inputSearch}>
                        <InputGroup>
                            <FormControl
                                placeholder="Search artists"
                                onChange={this.onInputChange}
                            />
                        </InputGroup>
                    </div>
                </Jumbotron>
                <div style={listStyle}>
                    {this.state.searchTerm !== ''
                        ? this.state.currentlyDisplayed.map(artist => {
                              return (
                                  <Artist
                                      picNumber={this.getRandomNumberPic(
                                          10,
                                          100
                                      )}
                                      name={artist.name}
                                      albums={artist.albums}
                                      id={artist._id}
                                  />
                              );
                          })
                        : this.props.artists.map(artist => {
                              return (
                                  <Artist
                                      picNumber={this.getRandomNumberPic(
                                          10,
                                          100
                                      )}
                                      name={artist.name}
                                      albums={artist.albums}
                                      id={artist._id}
                                  />
                              );
                          })}
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Artist</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    ref="nameInput"
                                    type="text"
                                    placeholder="Enter artist name"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Add Album</Form.Label>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}>
                                    <Form.Control
                                        type="text"
                                        ref="albumInput"
                                        placeholder="Enter album title"
                                    />
                                    <Button
                                        style={{ marginLeft: '8px' }}
                                        onClick={this.handleAddAlbum}>
                                        Add
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>
                        <div style={{ textAlign: 'center' }}>
                            {this.state.albums.map(alb => {
                                return <p>{alb.title.toString()}</p>;
                            })}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.handleSaveArtist}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
};

const inputSearch = {
    margin: '0 auto',
    width: '30%'
};

const btnStyle = {
    marginBottom: '10px'
};

const jumboStyle = {
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column'
};

const mapStateToProps = state => {
    return {
        artists: state.artists
    };
};

const mapDispatchToProps = {
    fetchArtists,
    addArtist
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistList);
