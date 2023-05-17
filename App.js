import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./Components/greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Hi from "./Components/Props";
import Hey from "./Components/PropsinClasses";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreetings from "./Components/UserGreetings";
import NamesList from "./Components/NamesList";
//import Stylesheet from './Components/CSS/Stylesheet';
import Inline from "./Components/CSS/Inline";
import "./Components/CSS/appStyles.css";
import styles from "./Components/CSS/appStyles.module.css";
import Form from "./Components/Form";
import Table from "./Components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form></Form> */}
        {/* <Table></Table> */}
        {/* <Stylesheet></Stylesheet>
        <h1 className={styles.error}>Error</h1>
        <h1 className="success">Success</h1>
        <Inline></Inline> */}
        {/* <UserGreetings></UserGreetings>
        <NamesList></NamesList> */}
        {/* <EventBind></EventBind> 
        <ParentComponent></ParentComponent> 
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <Message></Message>
        <Counter></Counter>
        <Greet></Greet>
        <Welcome></Welcome>
        <Hello></Hello>
        <Hi name="Nirava" relation="daughter">
          <p>This is child tag</p>
        </Hi>
        <Hi name="Rahul" relation="father"></Hi>
        <Hey name="Nirava" relation="daughter"></Hey>   */}
      </div>
    );
  }
}

export default App;
