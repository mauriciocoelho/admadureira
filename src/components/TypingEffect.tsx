import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
    text: string;
    className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, className }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let index = 0;
        let typingInterval: NodeJS.Timeout;

        const startTyping = () => {
            typingInterval = setInterval(() => {
                if (!isDeleting) {
                    // Escrevendo o texto
                    if (index < text.length) {
                        setDisplayedText(text.slice(0, index + 1));
                        index++;
                    } else {
                        setTimeout(() => setIsDeleting(true), 600); // Espera um pouco antes de apagar
                    }
                } else {
                        setDisplayedText(text.slice(0, index));
                        index--;
                        clearInterval(typingInterval);
                        setIsDeleting(false); // Reinicia a digitação
                        setIsTyping(true);
                }
            }, 600);
        };

        startTyping();

        return () => clearInterval(typingInterval);
    }, [text, isDeleting]);

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-blink">{isTyping ? '|' : ''}</span>
        </span>
    );
};

export default TypingEffect;
