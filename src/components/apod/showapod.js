import React, { Component, Fragment } from 'react';
import moment from 'moment';
import ReactPlayer from 'react-player';


export class ShowApod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data
        }
    }

    componentDidMount() {
        // this.doRequest(this.props.date);
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.date !== this.props.date) {
            // this.doRequest(this.props.date);
        }
    }


    render() {
        let content = <Fragment></Fragment>;
        if (this.state.data !== undefined) {
            if (this.state.data.media_type === 'image') {
                content = <img src={this.state.data.url} className="d-block mx-auto w-100" alt=""></img>
            } else if (this.state.data.media_type === 'video') {
                content = <ReactPlayer url={this.state.data.url} className="d-block mx-auto w-100" />
            }
        }
        return (
            <div className="card">
                {content}
                <div className="card-body">
                    <h4 className="card-title">{this.state.data.title}</h4>
                    <p className="card-text">{this.state.data.date}</p>
                    <p className="card-text">{this.state.data.explanation}</p>
                </div>
            </div>
        )
    }
}

export default ShowApod


