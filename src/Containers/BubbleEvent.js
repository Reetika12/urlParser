import React, { Component } from 'react'

class BubbleEvent extends Component {
    render() {
        return (
            <div id="parent">
                <button onClick={() => alert("hello parent")}>
                    parent
                  <button onClick={() => alert("hello child")}>child</button>
                </button>
            </div>
        )
    }
}

export default BubbleEvent
