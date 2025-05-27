import { useState } from "react";
import "./App.css";

function Quote({ quote, author }) {
  // const [quote, setQuote] = useState();
  return (
    <div
    // style={{
    //   background:
    //     "linear-gradient(27deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 66%, rgba(137, 206, 116, 1) 100%)",
    //   padding: "10px",
    //   color: "black",
    //   border: "10px solid red",
    // }}
    >
      <h1>{quote}</h1>
      <p>{author}</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="Container">
      <Quote
        quote="When change is necessary, not to change is destructive"
        author="John Doe"
      />
    </div>
  );
};
export default App;
