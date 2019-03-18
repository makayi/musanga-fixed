import React, { Component } from 'react';
import './App.css';
//import ArtistList from './components/ArtistList';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header>
                    {/* <ArtistList /> */}
                    <AlbumList />
                </Header>
            </div>
        );
    }
}

export default App;
