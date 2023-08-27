import "./App.css";
import React, { useEffect, useState } from "react";
import { FaTwitter, FaReddit, FaWhatsapp } from "react-icons/fa6";

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
      <div className="header">
        <h1>Quote Generator React App</h1>
      </div>

      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="container-btns">
          <div className="btns">
            <button onClick={copy} className="btn">
              Copy
            </button>
            <button onClick={generateQuote} className="btn">
              Generate Another Quote
            </button>
          </div>

          <div className="container-btns-socials">
            <ShareButton
              social="twitter"
              icon={<FaTwitter size={30} />}
              quote={quote.author + " once said: " + quote.content}
            />

            <ShareButton
              social="whatsapp"
              icon={<FaWhatsapp size={30} />}
              quote={quote.author + " once said: " + quote.content}
            />

            <ShareButton
              social="reddit"
              icon={<FaReddit size={30} />}
              quote={quote.author + " once said: " + quote.content}
            />
          </div>
        </div>
      </div>

      <div class="attribution">
        Challenge by
        <a
          href="https://intern2grow.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Intern2Grow
        </a>
        . Coded by{" "}
        <a href="https://github.com/Mondara" target="_blank" rel="noreferrer">
          Mondara
        </a>
        .
      </div>
    </>
  );
};

export default App;
