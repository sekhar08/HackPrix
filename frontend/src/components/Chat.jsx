import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Chat.css';

const Chat = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [speechString, setSpeechString] = useState("");
  const [conversationsList, setConversationsList] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    if (listening) {
      setSpeechString(transcript);
    }
  }, [transcript, listening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const returnResponse = async () => {
    if (speechString === "") {
      console.log("give valid text or speech");
    } else {
      const data = {
        "inputs": `<s>[INST] ${speechString} [/INST]</s>`,
        "parameters": {
          "max_new_tokens": 300
        }
      };


      const response = await fetch(
        "https://lx4k38avll1ytp4b.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            "Accept": "application/json",
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      const res = result[0].generated_text;
      const formattedText = res.replace(/<[^>]+>/g, '');
      const format1 = formattedText.replace('[INST] >', '');
      const format2 = format1.replace('[INST]', '');
      const format3 = format2.replace('[/INST]', '');

      console.log(format3);
      const len = speechString.length;
      const finalRes = format3.slice(len);

      setSpeechString("");
      return finalRes;
    }
  };

  const handleAsking = async () => {
    setWaiting(true);
    const res = await returnResponse();
    setConversationsList((previousList) => [
      ...previousList,
      { response: speechString, side: "client" },
      { response: res, side: "bot" }
    ]);
    setWaiting(false);
  };

  const handleSingleButtonStartStop = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

 
  const RenderResponseContainer = ({eachConv}) => (
    <div className={`eachConversationContainer ${eachConv.side === "bot" ? 'botTextStyling' : 'clientTextStyling'}`}>
      <p>{eachConv.response}</p>
    </div>
  );

  const handleTextInput = (event) => {
    setSpeechString(event.target.value);
  };

  return (
    <div className="overAllContainer">
      <div className="conversationsContainer">
        <h1>Responses</h1>
        {conversationsList.map((eachConv, index) => (
          <RenderResponseContainer key = {index} eachConv = {eachConv}/>
        ))}
      </div>
      <div className="inputContainer">
        <div className="givenSpeechTextContainer">
          <input
            ref={inputRef}
            value={speechString}
            onChange={handleTextInput}
            className="inputTextStyling"
            type="text"
            placeholder={speechString === "" ? 'Ask here, what you want to ask' : speechString}
          />
        </div>
        <div className="controlButtonsContainer">
          <button type="button" onClick={handleSingleButtonStartStop}>{listening ? 'Stop' : 'Start'}</button>
          <button onClick={handleAsking}>Ask</button>
        </div>
      </div>
      <p>{waiting ? 'Waiting' : ''}</p>
    </div>
  );
};


export default Chat;

