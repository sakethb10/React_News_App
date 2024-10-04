import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        pageSize: 6,
        category: 'general'
    }
    static propTypes={
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`${this.capitalize(this.props.category)}-News`;
    }
    update=async (pageNo)=>{
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5ccdc9674d3944e4ac3d498f8244b1d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles: parsedData.articles, 
            totalArticles: parsedData.totalResults,
            loading: false
        });
    }
    async componentDidMount(){
        this.update(this.state.page);
    }
    handlePrevClick=async ()=>{
        this.setState({page:this.state.page-1});
        this.update(this.state.page);
    }
    handleNextClick=async ()=>{
        this.setState({page:this.state.page+1});
        this.update(this.state.page);
    }
    capitalize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Top {this.capitalize(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {this.state.articles.filter((element)=>{
                        return element.description&&!element.description.startsWith('[Removed]');
                    }).map((element)=>{
                        return <div className="col md-3" key={element.url}>
                            <NewsItem title={element.title.slice(0,25)} description={element.description.slice(0,45)} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                    })}
                </div>
                <div className= "d-flex justify-content-between my-5">
                    <button disabled={this.state.page<=1} type="button" className= "btn btn-info" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className= "btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
