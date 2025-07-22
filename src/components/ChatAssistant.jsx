import React, { useState } from "react";

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I'm Tara. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer YOUR_OPENROUTER_API_KEY_HERE", // Replace with your API key
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: newMessages,
        }),
      });

      const data = await response.json();
      const assistantReply = data.choices?.[0]?.message?.content;

      if (assistantReply) {
        setMessages([...newMessages, { role: "assistant", content: assistantReply }]);
      } else {
        setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Please try again." }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { role: "assistant", content: "Error fetching response." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div style={styles.container}>
      {/* Header with Avatar and Name */}
      <div style={styles.header}>
        <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="Tara" style={styles.avatar} />
        <div>
          <h3 style={{ margin: 0 }}>Tara</h3>
          <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Your AI Chat Assistant</p>
        </div>
      </div>

      {/* Chat History */}
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div key={i} style={msg.role === "user" ? styles.userMsg : styles.assistantMsg}>
            <strong>{msg.role === "user" ? "You" : "Tara"}:</strong> {msg.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={styles.inputBox}>
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={!input || loading} style={styles.button}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 10,
    borderBottom: '1px solid #eee',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
    backgroundColor: "#f0f0f0",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "6px",
    marginBottom: 12,
  },
  userMsg: {
    textAlign: "right",
    marginBottom: 8,
    color: "#333",
  },
  assistantMsg: {
    textAlign: "left",
    marginBottom: 8,
    color: "#444",
  },
  inputBox: {
    display: "flex",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 12px",
    borderRadius: 4,
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default ChatAssistant;
