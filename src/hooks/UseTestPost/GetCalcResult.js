import axios from "axios";

export async function calc(values, fetchPath) { 
   const {a, b, c} = values;   
   if(Number(a) < 0 || Number(b) < 0 || Number(c) < 0) return;
   if(a === '0' || b === '0' || c === '0') return; 
  const result = await axios.get(`http://localhost:8080/api/v1/${fetchPath}`, {
      params: { a, b, c },
   }).then(responce => {
    return responce.data;
   }).catch(error => {
      console.log(error);
   });
   return result;
}

   