import React, { Component } from 'react';



class Home extends Component {
  render() {
    return (
      <div className="Home">
          <div className="jumbotron">
          <h1 className="display-3">Hello, Bloggers!</h1>
          <p className="lead">Create a blog and view other user's posts</p>
          <hr className="my-4"></hr>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/postList" role="button">See all Posts</a>
          </p>
          </div>
      </div>
    );
  }
}

export default Home;
