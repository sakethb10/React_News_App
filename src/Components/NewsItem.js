import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url, author, date}=this.props;
    return (
      <div>
        <div className= "card">
            <img src={imageUrl} className= "card-img-top" style={{height: 200}} alt="Not Available"/>
            <div className= "card-body">
                <h5 className= "card-title">{title}...</h5>
                <p className= "card-text">{description}...</p>
                <p className= "card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={url} rel="noreferrer" target="_blank" className= "btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
