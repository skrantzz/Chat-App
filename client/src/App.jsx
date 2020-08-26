import React from "react";
import ReactDOM from "react-dom";
// import { Alert } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./index.css";

import Chat from './chat.jsx'

const App = () => <Chat />;

ReactDOM.render(<App />, document.getElementById("app"));
