"use client";
import { useState } from "react";
import { FaHeadset } from "react-icons/fa";

const Chat = () => {

    const [showChatIframe, setShowChatIframe] = useState(false);

    const toggleChatIframe = () => {
        setShowChatIframe(!showChatIframe);
    };

    return (
        <>
            <button
                onClick={toggleChatIframe}
                className="fixed bottom-20 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none z-50"
            >
                <FaHeadset className="text-xl" />
            </button>

            {showChatIframe && (
                <div className="fixed bottom-0 right-0 w-full sm:w-96 h-auto bg-white shadow-lg rounded-t-lg overflow-hidden p-4 border border-gray-300 z-50 sm:right-2">
                <div className="relative w-full h-full">
                    <iframe
                    src="https://typebot.io/deafa"
                    className="w-full h-80 sm:h-96"
                    title="Chat Iframe"
                    />
                    <button
                    onClick={toggleChatIframe}
                    className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                    >
                    ✕
                    </button>
                </div>
                </div>
            )}
        </>
    );
};

export default Chat;
