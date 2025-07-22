// FloatingChat.jsx
import React, { useState } from "react";
import ChatAssistant from "./ChatAssistant";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div style={styles.chatContainer}>
          <ChatAssistant />
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.fab}>
        💬
      </button>
    </div>
  );
};

const styles = {
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
  chatContainer: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "350px",
    maxHeight: "500px",
    zIndex: 999,
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    overflow: "hidden",
  },
};

export default FloatingChat;
