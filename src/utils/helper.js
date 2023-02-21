import { useLocation } from "react-router-dom";

export const APIKEY='8f2a16d4f0d2593718febacdf7b1d495';
export const ENDPOINT='https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&sort_by=popularity.desc&page=1';

export function useQuery(){
    return new URLSearchParams(useLocation().search)
}