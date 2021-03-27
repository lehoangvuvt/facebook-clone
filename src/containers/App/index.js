import React from 'react';
import Homepage from '../Homepage';
import LoginPage from '../LoginPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../webfonts/all.css';
import Header from '../../components/Header';
import FriendsPage from '../FriendsPage';
import StoryDetails from '../StoryDetails/StoryDetails';
import WatchPage from '../WatchPage';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/friends" component={FriendsPage} />
                    <Route path="/entertainment" component={WatchPage} />
                    <Route path="/marketplace" component={Homepage} />
                    <Route path="/groups/feed" component={Homepage} />
                    <Route path="/story/:username/:id/:index" component={StoryDetails} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;