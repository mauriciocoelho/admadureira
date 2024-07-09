import React from 'react';
import { FaSearch } from 'react-icons/fa';

const PesquisarServico = () => {
    return (
        <div className="flex justify-center items-center mt-4">
            <input 
                type="text" 
                placeholder="Que serviço você procura?" 
                className="w-full max-w-lg p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-3 bg-gray-200 border border-gray-300 border-l-0-md rounded-r-md hover:bg-gray-300 focus:outline-none">
                <FaSearch />
            </button>
        </div>
    );
}

export default PesquisarServico;

