import { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  const [state, setState] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

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
        const msg2 = { name: "AshBot", message: response.response };
        setInputText("");
        setMessages((prevMessages) => [...prevMessages, msg2]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setInputText("");
      });
  };

  const ref = useRef();
  useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div className="w-full overflow-y-hidden">
      <div className=" space-y-10">
        <div className="bg-white/0 space-y-4 h-96 flex p-4 flex-col overflow-x-hidden overflow-y-scroll scrollbar-thumb-yellow-900 scrollbar-thumb-rounded-md scrollbar-track-black/30 scrollbar-thin">
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
                  <p className="text-md break-all">{item.message}</p>
                </div>
                <div ref={ref}/>
              </div>
            ))
            ) : (
              <div className="w-full h-86 flex flex-col p-8 space-y-2 justify-center items-center">
              <p className="text-center text-xl text-pink-50/60">
                This is AshBot, you can ask him questions like "how are you",
                "tell me about you", "where are you from?", "what can you do"
              </p>
              <p className="text-center text-lg text-pink-50/60">
                This model is simple and was intended as a first step into
                machine learning, I studied then replicated a preexisting model
                which led me to develop some basic knowledge of how it works
                under the hood, from the tokenization and lemmatization to the
                linear algebra behind it
              </p>
              <p className="text-center text-lg text-pink-50/60">
                I intend to continue feeding AshBot with more data over time and
                as I learn more about machine learning, I will be able to know
                how to improve it and create purely custom models!
              </p>
            </div>
          )}
        </div>

        <div className="fixed left-0 right-0 bottom-20 z-20 w-[70%] m-auto">
          <div className="flex justify-center items-center w-full space-x-2">
            <input
              type="text"
              value={inputText}
              className=" bg-black/20 text-pink-50 w-full outline-none rounded-md px-8 py-2"
              placeholder="chat with me"
              onChange={(e) => setInputText(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && onSendButton()}
            />

            <button className="btn" onClick={onSendButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
