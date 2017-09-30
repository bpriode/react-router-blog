import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';
import BaseLayout from './components/BaseLayout'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route path='/create' component={CreatePost}/>
          <Route path='/postList' component={PostList}/>
          <Route path='/postList/:id' component={ShowPost}/>
        </Switch>
    </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
