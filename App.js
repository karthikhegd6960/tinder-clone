import React from "react";
import Header from "./Header";
import Tindercards from "./Tindercards";
import SwipeButtons from "./SwipeButtons";
import "./App.css";

function App() {
  return (
    <div className="app">
      
      <Header />
      <Tindercards />
      <SwipeButtons />
    </div>
    
  );
}

export default App;
