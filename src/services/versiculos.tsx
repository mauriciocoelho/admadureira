import api from "./api";
import { AxiosResponse } from 'axios';

interface Versiculo {
    text: string;
    reference: string;
}

export const getVersiculos = async (): Promise<AxiosResponse<Versiculo[]>> => {
    return await api.get('/versiculos');
};