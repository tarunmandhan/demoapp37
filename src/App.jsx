import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Tarun"}>
        <LastName.Provider value={"Mandhan"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };

// React  useContext
// There's a running theme between all these new React Hooks: almost all of them exist to make
// function components as powerful as class Components.

// The useContext hook is a little different though. It just makes things nicer.

// In case you haven't heard of React's Context API, it's a way to pass data deeply throughout your app
// without having to manually pass props down through multiple levels.

// It can be a good alternative to tools like Redux when all you need to do is pass data around,
// and you can learn more about Context and how it compares to Redux here.

// useContext makes Context a little easier to consume.
