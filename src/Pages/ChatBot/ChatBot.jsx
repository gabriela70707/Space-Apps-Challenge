import styles from './ChatBot.module.css';
import Coronalda from '../../assets/Coronalda.png';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export function ChatBot() {
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            text: 'O que é Clima Espacial?', 
            isUser: true 
        },
        { 
            id: 2, 
            text: 'Clima Espacial são as mudanças no ambiente espacial, causadas principalmente pelo nosso Sol. Pense nele como o clima da Terra, com dias calmos e dias de tempestade, só que acontece no espaço!', 
            isUser: false 
        }
    ]);

    const messagesEndRef = useRef(null);

    // Perguntas fixas
    const questions = [
        "O que é Clima Espacial?",
        "Porque é tão importante saber sobre o clima espacial?",
        "Tempestades solares são perigosas?",
        "O que são Auroras?"
    ];

    // Respostas pré-definidas
    const responses = {
        "O que é Clima Espacial?": "Clima Espacial são as mudanças no ambiente espacial, causadas principalmente pelo nosso Sol. Pense nele como o clima da Terra, com dias calmos e dias de tempestade, só que acontece no espaço!",
        "Porque é tão importante saber sobre o clima espacial?": "O clima espacial pode afetar satélites, sistemas de comunicação, redes elétricas e até a saúde de astronautas. Monitorar essas condições ajuda a proteger nossa tecnologia e infraestrutura.",
        "Tempestades solares são perigosas?": "Para nós, aqui na superfície da Terra, não! Estamos protegidos pelo campo magnético e pela atmosfera do nosso planeta. Mas elas podem afetar a tecnologia da qual dependemos, como satélites e redes elétricas, e são um risco para astronautas no espaço.",
        "O que são Auroras?": "Auroras são luzes coloridas e brilhantes que aparecem no céu perto dos polos Norte e Sul. Elas acontecem quando as partículas de energia do Sol, como as da minha amiga Coronalda, se chocam com os gases da nossa atmosfera. É um verdadeiro espetáculo da natureza!"
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
                text: responses[question] || "Desculpe, não tenho uma resposta para essa pergunta.",
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
                    <img src={Coronalda} alt="character image" className={styles.characterImage} />
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