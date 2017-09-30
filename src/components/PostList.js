import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    }
  }

  componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
  .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        this.setState({post: data});
      })
  }

  render() {
    let match = this.props.match;
    let allPosts = this.state.post.map(post => {
      return (
        <div className='card w-50 ml-5' key={post._id}>
          <Link to={`${match.url}/${post._id}`}>
          <p className='card-text'>{post.blogTitle}</p>
          <p className='card-text'>{post.authorName}</p>
          </Link>
        </div>
      );
    })
    return (
      <div>
      {allPosts}
      </div>
    );
  }
}
