import React, { Component } from 'react'
// TODO: ôn tập lại cách viết bằng class component

export default class BaiTap03 extends Component {
    constructor(props) {
            super(props);
            this.state = {
                currentTime: new Date(),
            }
        }
        componentDidMount() {
            // Update the time every second
            this.intervalID = setInterval(() => {
                this.setState({
                    currentTime: new Date(),
                })
            }, 1000);
        }
        componentWillUnmount() {
                    clearInterval(this.intervalID);
                }
  render() {
    const { currentTime } = this.state
    return (
      <div>
        <h1>Xin chào các bạn</h1>
        <h2>Bây giờ là {currentTime.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
