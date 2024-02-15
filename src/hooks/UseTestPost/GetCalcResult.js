import axios from "axios";

export async function calc(values, fetchPath) { 
   const {a, b, c, angleA, angleB, angleC} = values;
  const result = await axios.get(`http://localhost:8080/api/${fetchPath}`, {
  params: {a, b, c, angleA, angleB, angleC},
   }).then(responce => {
    return responce.data;
   }).catch(error => {
      console.log(error);
   });
   return result;
}

   