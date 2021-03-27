import axiosClient from "./axiosClient"

export const getTrendingMovieWeekly = (page) => {
    const url = `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    const response = axiosClient.get(url);
    return response;
}

export const getFeaturedShow = () => {
    const url = `/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = axiosClient.get(url);
    return response;
}

export const getTrailer = (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=f5fb6615ec8d14f3d2476b1bf695e624&language=en-US`;
    const response = axiosClient.get(url);
    return response;
}