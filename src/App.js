import "./App.css";
import React, { useEffect, useState } from "react";
import {
  FaSquareTwitter,
  FaSquareReddit,
  FaSquareWhatsapp,
} from "react-icons/fa6";

import { ShareButton } from "./componsents";

const App = () => {
  const url = "https://api.quotable.io/random";
  const [quote, setQuote] = useState("");

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="container-btns">
          <div className="container-btns-socials">
            <ShareButton
              social="twitter"
              icon={<FaSquareTwitter size={30} />}
              quote={quote.author + " once said: " + quote.content}
            />

            <ShareButton
              social="whatsapp"
              icon={<FaSquareWhatsapp size={30} />}
              quote={quote.author + " once said: " + quote.content}
            />

            <ShareButton
              social="reddit"
              icon={<FaSquareReddit size={30} />}
              quote={quote.author + " once said: " + quote.content}
            />
          </div>
          <div className="btns">
            <button onClick={copy} className="btn">
              Copy
            </button>
            <button onClick={generateQuote} className="btn">
              Generate Another Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
