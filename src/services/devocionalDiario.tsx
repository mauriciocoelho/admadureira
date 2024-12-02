import api from './api';

export const getDevocionalDiario = async () => {
    const response = await api.get('/devocionalDiario');
    return response.data;
};
