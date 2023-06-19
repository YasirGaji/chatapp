import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dist/shared/lib/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageForSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageForSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [ showChat, setShowChat ] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    if (typeof doument !== null) {
      setShowChat(true);
    }
  });

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine 
          height='calc(100ch - 200px)'
          projectID='c441269e-5f65-417f-b8c1-71f02b4e11e9'
          userName={username}
          userSecret={secret}
        />
      </div>
    </div>
  );
}
