import React, { Component } from 'react'

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = { posts: "", formatted: ""}
  }

  createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest()
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest !== "undefined") {
      // xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }

  // getBlogPosts = () => {
  //   let xhr = this.createCORSRequest('GET', 'http://localhost:3000/posts')
  //   if (!xhr) {
  //     throw new Error('CORS not supported')
  //   }

  //   xhr.onload = () => {
  //     let text = JSON.parse(xhr.responseText)
  //     let formatted = text.map(post => {
  //       return(
  //         <div key={post.id}>
  //           <h3><b>{post.title}</b></h3><br/>
  //           <h5>{post.created_at}</h5><br/>
  //           <p>{post.body}</p>
  //         </div>
  //       )
  //     })
  //     this.setState({ posts: formatted })
  //   }
  //   xhr.onerror = () => {
  //   alert('Woops, there was an error making the request.');
  //   }
  //   xhr.send()
  // }

  // formatPosts = () => {
  //   debugger
  //   let posts = this.state.posts
  //   posts.map(post => {
  //     return(
  //       <div>
  //         <h3><b>{post.title}</b></h3><br/>
  //         <h5>{post.created_at}</h5><br/>
  //         <p>{post.body}</p>
  //       </div>
  //     )
  //   })
  // }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        {/* {this.state.posts} */}
        Soon!
      </div>
    )
  }

  // componentWillMount() {
    // this.getBlogPosts()
  // }

  // componentDidMount() {
  //   this.formatPosts()
  // }
}

export default Blog
