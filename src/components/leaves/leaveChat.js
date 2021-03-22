
import React, { useEffect } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';



function LeaveChat() {
  useEffect(() => {
    addResponseMessage('Hello User ,' + 'I am Anvesh ...' + '  How can i help you ?');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  }



  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
        title="Welcome to Portal"
        subtitle="kindly feel free to ask  anything?"
      />
    </div>
  );
}


export default LeaveChat;