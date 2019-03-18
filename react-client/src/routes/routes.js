import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import ArtistList from '../components/ArtistList';
import AlbumList from '../components/AlbumList';
import ApiBrowser from '../components/ApiBrowser';

export const Routes = () => {
    return (
        <div>
            <Header>
                <Switch>
                    <Route exact path="/artists" component={ArtistList} />
                    <Route exact path="/">
                        <Redirect to="/artists" />
                    </Route>
                    <Route path="/albums/:artistName" component={AlbumList} />
                    <Route exact path="/api" component={ApiBrowser} />
                </Switch>
            </Header>
        </div>
    );
};
