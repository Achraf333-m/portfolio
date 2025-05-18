import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const ChatBox = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [noIpt, setNoIpt] = useState(false);

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      onSendButton();
      setInputText("");
      setLoading(true);
    }
  };

  const checkInput = () => {
    if (inputText.length === 0) {
      setNoIpt(true);
    } else {
      setNoIpt(false);
    }
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

    // Only run in the browser
    if (typeof window !== "undefined") {
      preLoadBot();
    }
  }, []);

  useEffect(() => {
    checkInput();
  }, [inputText]);

  const onSendButton = () => {
    if (inputText === "") {
      return;
    }

    const msg1 = { name: "Me", message: inputText };
    setMessages([...messages, msg1]);
    fetch(`https://flask-server-chatbot-e326926789d0.herokuapp.com/chatbot`, {
      method: "POST",
      body: JSON.stringify({ message: inputText }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        setInputText("");
        const msg2 = { name: "AshBot", message: response.response };
        setLoading(false);
        setMessages((prevMessages) => [...prevMessages, msg2]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setInputText("");
        setLoading(false);
      });
  };

  const ref = useRef();
  useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div className="w-[70%] gap-y-10 mx-auto !overflow-y-hidden">
      <div className=" space-y-10">
        <div className="dark:bg-white/5 bg-black/5 rounded-md backdrop-blur-sm space-y-4 h-72 flex p-4 flex-col overflow-x-hidden overflow-y-scroll scrollbar-thumb-yellow-900 scrollbar-thumb-rounded-md scrollbar-track-black/30 scrollbar-thin">
          {messages.length > 0 ? (
            messages.map((item, index) => (
              <div
                key={index}
                className={`flex p-2 space-y-2 ${
                  item.name === "AshBot" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`py-2 px-4 max-w-sm ${
                    item.name === "AshBot"
                      ? "bg-blue-400/20 rounded-tr-md rounded-b-md"
                      : "bg-yellow-700/20 rounded-tl-md rounded-b-md"
                  }`}
                >
                  <p className="text-md break-words">{item.message}</p>
                </div>
                <div ref={ref} />
              </div>
            ))
          ) : (
            <div className="w-full h-86 flex flex-col p-8 space-y-2 justify-center items-center">
              <div className="text-center text-xl text-gray-900/90  dark:text-pink-50/60">
                <h1
                  className="mt-16 mb-20 text-3xl font-semibold"
                  data-aos="fade-in"
                >
                  This is AshBot.
                </h1>
                <p className="text-gray-900/80 dark:text-pink-50/50">
                  Here are some ideas to break the ice: <br />
                  <i>"How are you?"</i> <br />
                  <i>"Tell me about yourself!"</i> <br />
                  <i>"Where are you from?"</i> <br />
                  <i>"What can you do?"</i> <br />
                </p>
              </div>
              <p className="text-center text-lg">
                See projects section for more details.
              </p>
            </div>
          )}
        </div>

        <div className=" w-[70%] m-auto">
          {loading && (
            <h1 className="text-pink-50/70 p-2 absolute animate-pulse-fast">
              Waiting for Ashbot...
            </h1>
          )}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-10 w-full max-w-xl mx-auto">
            <input
              type="text"
              value={inputText}
              disabled={loading}
              placeholder="Chat with me"
              onChange={(e) => setInputText(e.target.value)}
              onKeyUp={onKeyUp}
              className="flex-grow  bg-black/40 text-pink-50 outline-none placeholder-white/50 rounded-md px-6 py-2 text-base"
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
      text-black dark:text-white font-semibold text-base
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
