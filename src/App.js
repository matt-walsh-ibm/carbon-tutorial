import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';

//Router
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/repo" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
