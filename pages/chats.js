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
  const { showChat, setShowChat } = useState(false); 
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
          projectID='d9bc2727-c43b-4a56-8d90-cb2f6c6c4bb9'
          userName={username}
          userSecret={secret}
        />
      </div>
    </div>
  );
}
