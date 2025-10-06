import styles from './ChatBot.module.css';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export function ChatBot() {
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            text: 'What is the Spacial Wheather?', 
            isUser: true 
        },
        { 
            id: 2, 
            text: '"Space weather refers to changes in the space environment, mainly caused by our Sun. Think of it like Earth weather with calm days and stormy ones—but happening out in space!', 
            isUser: false 
        }
    ]);

    const messagesEndRef = useRef(null);

    // Perguntas fixas
    const questions = [
        "What is Space Weather?",
        "Why is it so important to know about space weather?",
        "Why solar storms are so dangerous?",
        "What is Auroras"
    ];

    // Respostas pré-definidas
    const responses = {
        "What is Space Weather?": "Space weather refers to changes in the space environment, mainly caused by our Sun. Think of it like Earth's weather—with calm days and stormy ones—but happening in space!",
        "Why is it so important to know about space weather?": "Space weather can affect satellites, communication systems, power grids, and even the health of astronauts. Monitoring these conditions helps protect our technology and infrastructure.",
        "Why solar storms are so dangerous?": "For us here on Earth's surface, no! We're protected by the planet's magnetic field and atmosphere. But they can affect the technology we rely on, like satellites and power grids, and pose a risk to astronauts in space.",
        "What is Auroras": "Auroras are bright, colorful lights that appear in the sky near the North and South Poles. They happen when energetic particles from the Sun—like those from my friend Coronalda—collide with gases in our atmosphere. It's a true natural spectacle!"
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleQuestionClick = (question) => {
        // Adiciona mensagem do usuário
        const userMessage = {
            id: messages.length + 1,
            text: question,
            isUser: true
        };

        setMessages(prev => [...prev, userMessage]);

        // Adiciona resposta do bot após um delay
        setTimeout(() => {
            const botMessage = {
                id: messages.length + 2,
                text: responses[question] || "Sorry, i do not have the answer for this question.",
                isUser: false
            };
            setMessages(prev => [...prev, botMessage]);
        }, 500);
    };

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <section className={styles.character}>
                    <Link to={"/"}> 
                        <button>← Voltar</button> 
                    </Link>
                    <img src="/images/Coronalda.png" alt="character image" className={styles.characterImage} />
                </section>

                <section className={styles.chat}>
                    <div className={styles.chatContainer}>
                        {/* Área de mensagens */}
                        <div className={styles.messagesContainer}>
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`${styles.message} ${
                                        message.isUser ? styles.userMessage : styles.botMessage
                                    }`}
                                >
                                    <div className={styles.messageBubble}>
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Separador */}
                        <div className={styles.separator}></div>

                        {/* Área de perguntas fixas */}
                        <div className={styles.questionsContainer}>
                            {questions.map((question, index) => (
                                <button
                                    key={index}
                                    className={styles.questionButton}
                                    onClick={() => handleQuestionClick(question)}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}