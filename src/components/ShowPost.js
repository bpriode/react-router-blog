import React, { Component } from 'react';


export default class ShowPost extends Component{
  constructor(props){
  super(props)


    this.state= {
      post:{}
    }
  }
  componentDidMount(){
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${this.props.match.params.id}`;

      fetch(URL)
        .then(results => results.json())
        .then(data => this.setState({post: data}))
        .catch(err => console.log(err))
   }

  render() {
    return (
      <div className="card w-50 text-center">
        <div className="card-block">
          <p className="card-text">Title:{this.state.post.blogTitle}</p>
          <p className='card-text'>By: {this.state.post.authorName}</p>
          <p className="card-text">{this.state.post.blogEntry}</p>
        </div>
      </div>
    );
  }
}
