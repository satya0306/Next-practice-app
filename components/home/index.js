import React, { Component } from 'react'
import Link from 'next/link'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            postsData:[]
        }
    }

    componentDidMount(){
        this.loadPostsData()
    }

    loadPostsData = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({postsData:json},()=>console.log(this.state.postsData))
            })
    }
    render() {
        return (
            <div style={{marginTop:"10px"}}>
                <h2 style={{textAlign:"center"}}>List Of Posts</h2>
                <div className="row">
                    {/* <div className="col-md-3"> */}
                    {this.state.postsData && this.state.postsData.length>0 && this.state.postsData.map(post=>{
                        return(
                            <div className="col-md-3" key={post.id}>
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                        <Link href={`/posts/${post.id}`} ><a className="btn btn-primary">Go To Detail</a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}
