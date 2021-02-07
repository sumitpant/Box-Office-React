const BASE_URL='http://api.tvmaze.com';

export  const ApiGet=async(endpoint)=>{
    const res=await fetch(`${BASE_URL}${endpoint}`).then(res=>res.json())
    return res;
}