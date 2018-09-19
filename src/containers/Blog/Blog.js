import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent( () => {
  return import('./NewPost/NewPost');
})

class Blog extends Component {
  state = {
    auth: true
  }

  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/posts">Home</Link></li>
              <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: "?quick-search=true"
              }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Hello there</h1>} /> */}
        <Switch >
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
