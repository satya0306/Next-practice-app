import React, { Component } from 'react'
import Layout from '../../components/layout';
import Head from 'next/head'
import Image from 'next/image'
export default class Detailpage extends Component {
    constructor(props){
        super(props);
        this.state = {
            details: props.details,
            albums: props.albums
        }
    }

    componentDidMount() {
    //    console.log(this.state.albums)
    //    console.log(this.props.passString)

    }
    

    render() {
        return (
            <Layout>
                <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                </Head>
                <div style={{marginTop:"10px"}}>
                    <h2 style={{textAlign:"center"}}>Post Detail</h2>
                    <div className="row">
                        {/* <div className="col-md-3"> */}
                        {this.state.details && 
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{this.state.details.title}</h5>
                                        <p className="card-text">{this.state.details.body}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        {/* </div> */}
                    </div>
                    <div className="row" style={{marginTop:"10px"}}>
                        {/* <div className="col-md-3"> */}
                            {this.state.albums && this.state.albums.map(album=>{
                                return(
                                    <div className="col-md-3" key={album.id}>
                                        <Image
                                            src={album.url}
                                            alt={album.title}
                                            width={550}
                                            height={550}
                                        />
                                    </div>
                                )
                            })}
                        {/* </div> */}
                    </div>
                </div>
            </Layout>
        )
    }
}

Detailpage.getInitialProps = async(context) =>{
    const { slug } = context.query;
    const postRes = await fetch(`http://localhost:3001/users`)
    const postJson = await postRes.json()

    const albumsRes = await fetch(`https://jsonplaceholder.typicode.com/albums/${slug}/photos`)
    const albumsJson = await albumsRes.json()

    return { details: postJson, slug, albums: albumsJson}


}


