import React, { Component } from 'react'
import { ParseParamsURL } from '../Lib/Utilities'

class RequiredComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urlName: '',
            result: {}
        }
    }
    eventHandler = (e) => {
        this.setState({ urlName: e.target.value })
    }

    handleUrlSplit = () => {
        var parser = '', result = {}
        if (this.state.urlName.length > 6) {
            parser = new URL(this.state.urlName)
            result = ParseParamsURL(parser) // result will contain the desired results in the form of object
        }
        this.setState({
            result
        })
    }
    handleSearchClear = () => {
        this.setState({
            urlName: '',
            result: {}
        })
    }
    render() {
        var url = window.location.href // store the URL into variable 
        let { urlName, result } = this.state

        return (

            <div style={{ display: 'flex', flexDirection: 'column', padding: "3% 20%", alignItems: 'center' }}>
                <input // enter the url from input field
                    onChange={this.eventHandler}
                    value={urlName}
                    type="text"
                    style={{ width: "500px", marginBottom: "24px" }}
                    id="url_name"
                    placeholder="Enter url"
                    name="fname" />

                <button style={{ width: "100px", marginBottom: "16px" }} onClick={this.handleUrlSplit.bind(this)}>Search</button> {/* onclick of search will give the result */}
                <button style={{ width: "100px", marginBottom: "16px" }} onClick={this.handleSearchClear.bind(this)}>Clear</button> {/* this will clear the data onclick */}


                {(Object.keys(result).length > 0) && // if result is greater than 0 
                    <div>
                        <div>Scheme: {result.scheme}</div>
                        <div>Domain: {result.domain}</div>
                        <div>Path: {result.path}</div>
                        <div>Port: {result.port}</div>
                        <div>Query: {JSON.stringify(result.query)}</div>
                        <div>Fragment: {result.fragment}</div>
                    </div>
                }
            </div>
        );
    }
}
export default RequiredComponent