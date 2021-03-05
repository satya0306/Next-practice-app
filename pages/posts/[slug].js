import React, { Component } from 'react'

export default class Detailpage extends Component {
    constructor(props){
        super(props);
        this.state = {
            details: props.details
        }
    }

    componentDidMount() {
       console.log(this.state.details)
    }
    

    render() {
        return (
            <div className="container" style={{marginTop:"10px"}}>
                <h2 style={{textAlign:"center"}}>Post Detail</h2>
                <div className="row">
                    {/* <div className="col-md-3"> */}
                    {this.state.details && 
                        <div className="col-md-12">
                            <div className="card" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.details.title}</h5>
                                    <p className="card-text">{this.state.details.body}</p>
                                </div>
                            </div>
                        </div>
                    }
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

Detailpage.getInitialProps = async(context) =>{
    const { slug } = context.query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    const json = await res.json()
    return { details: json, slug }
}


