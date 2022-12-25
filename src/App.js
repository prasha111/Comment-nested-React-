import logo from "./logo.svg";
import "./App.css";
import Widget from "./components/widget";
import { useState } from "react";
import WidgetPage from "./pages/widgetPage/widgetPage";

function App() {
  return (
    <div className="App">
      <div style={{display:"flex", flexDirection:'column',justifyContent:'center'}}>
     <WidgetPage/>
      </div>
    </div>
  );
}

export default App;
