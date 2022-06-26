import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Room from "./components/Room/Room";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  // componentDidMount() {
  //   connect1((msg) => {
  //     console.log("New Message")
  //     this.setState(prevState => ({
  //       chatHistory: [...this.state.chatHistory, msg]
  //     }))
  //     console.log(this.state)
  //   })
  // }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/room" element={<Room chatHistory={this.state.chatHistory} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
