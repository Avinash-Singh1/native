export const TMDB_CONFIG ={
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    HEADERS: {
        accept:'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmExY2RjNmRjMDQ0OGIyODU5ZGE0NTE3ZDljY2JlZCIsIm5iZiI6MTc1MDQ4MDg2Mi4yODQ5OTk4LCJzdWIiOiI2ODU2MzdkZTI5ZGFiNDcxMDJmYzczMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.013HO3COLjHL32OLQt8scWj_gFsakUfQXIpboy3RFEw'
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));

export const fetchMovies= async ({query}:{query:string})=>{
    const endpoint = query?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`: `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.HEADERS,
    });
    // const data = await response.json();
    // return data;
    if(!response.ok){
        throw new Error('Something went wrong',response.statusText);
    }
    const data =await response.json();
    return data.results;
}