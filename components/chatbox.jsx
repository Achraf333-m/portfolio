"use client";


import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";

const ChatBox = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [noIpt, setNoIpt] = useState(false);

  const scrollContainerRef = useRef(null);

  const checkInput = () => {
    setNoIpt(inputText.length === 0);
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      onSendButton();
      setInputText("");
      setLoading(true);
    }
  };

  const onSendButton = () => {
    if (inputText === "") return;

    const userMsg = { name: "Me", message: inputText };
    setMessages((prev) => [...prev, userMsg]);

    fetch("https://flask-server-chatbot-e326926789d0.herokuapp.com/chatbot", {
      method: "POST",
      body: JSON.stringify({ message: inputText }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        const botMsg = { name: "AshBot", message: response.response };
        setMessages((prev) => [...prev, botMsg]);
        setLoading(false);
        setInputText("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setInputText("");
      });
  };

  useEffect(() => {
    const preLoadBot = async () => {
      try {
        const response = await fetch(
          "https://flask-server-chatbot-e326926789d0.herokuapp.com/chatbot",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: "Preload request to warm up" }),
          }
        );
        if (response.ok) {
          console.log("Ashbot preloaded successfully");
        } else {
          console.error("Ashbot preload failed:", response.status);
        }
      } catch (error) {
        console.error("Error preloading Ashbot:", error);
      }
    };

    if (typeof window !== "undefined") {
      preLoadBot();
    }
  }, []);

  useEffect(() => {
    checkInput();
  }, [inputText]);

  useEffect(() => {
    const scrollEl = scrollContainerRef.current;
    if (scrollEl) {
      scrollEl.scrollTop = scrollEl.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-[90%] md:w-[70%] mx-auto space-y-10 overflow-hidden">
      {/* Chat Display */}
      <div className="space-y-10">
        <div
          ref={scrollContainerRef}
          className="dark:bg-white/5 bg-black/5 backdrop-blur-sm rounded-md h-[50vh] md:h-72 flex flex-col p-4 space-y-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#937145] scrollbar-track-black/30 scrollbar-thumb-rounded-md"
        >
          {messages.length > 0 ? (
            messages.map((item, index) => (
              <div
                key={index}
                className={`flex p-2 ${
                  item.name === "AshBot" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`py-2 px-4 max-w-sm break-words text-sm md:text-base ${
                    item.name === "AshBot"
                      ? "bg-blue-400/20 rounded-tr-xl rounded-b-xl"
                      : "bg-yellow-700/20 rounded-tl-xl rounded-b-xl"
                  }`}
                >
                  <p>{item.message}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full min-h-[20vh] max-h-[60vh] flex flex-col justify-center items-center px-4 py-6 space-y-2 text-base">
              <div className="text-center space-y-6 text-gray-900/90 dark:text-pink-50/60">
                <h1 className="my-4 text-2xl md:text-3xl font-semibold">
                  This is AshBot.
                </h1>
                <p className="text-gray-900/80 dark:text-pink-50/50">
                  Here are some ideas to break the ice: <br />
                  <i>"How are you?"</i> <br />
                  <i>"Tell me about yourself!"</i> <br />
                  <i>"Where are you from?"</i> <br />
                  <i>"What can you do?"</i>
                </p>
              </div>
              <p className="text-center text-gray-900/80 dark:text-pink-50/80 text-md">See projects section for more details.</p>
            </div>
          )}
        </div>

        {/* Input + Button */}
        <div className="w-full px-4 md:px-0 md:w-[70%] mx-auto relative">
          {loading && (
            <h1 className="text-pink-50/70 pb-4 absolute animate-pulse-fast">
              Waiting for Ashbot...
            </h1>
          )}

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 w-full max-w-xl mx-auto">
            <input
              type="text"
              value={inputText}
              disabled={loading}
              placeholder="Chat with me"
              onChange={(e) => setInputText(e.target.value)}
              onKeyUp={onKeyUp}
              className="flex-grow bg-black/40 text-pink-50 placeholder-white/50 outline-none rounded-md px-6 py-2 text-base w-full"
            />

            <button
              disabled={noIpt}
              onClick={() => {
                onSendButton();
                setInputText("");
                setLoading(true);
              }}
              className="flex items-center gap-2 px-6 py-2 rounded-lg
                bg-gradient-to-r from-[#F89700] via-[#d4a017] to-[#a6730e]
                text-black dark:text-white font-semibold text-sm md:text-base
                shadow-[0_0_10px_#F89700]
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-[0_0_15px_#F89700] hover:brightness-105
                focus:outline-none focus:ring-4 focus:ring-[#cc7700] focus:ring-opacity-50
                active:scale-95 active:shadow-md
                disabled:opacity-50"
            >
              <span>Send</span>
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
