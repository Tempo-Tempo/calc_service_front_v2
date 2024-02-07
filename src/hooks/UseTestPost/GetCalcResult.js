import axios from "axios";

export async function calc(values, fetchPath) { 
   const {a, b, c, angleA, angleB, angleC} = values;
      const sumAngles = Number(angleA) + Number(angleB) + Number(angleC);
      let stoppper = Object.values(values).filter(q => q !== '');
      if(stoppper.length < 3) return;
      if(sumAngles !== 180 && angleA !== '' && angleB !== '' && angleC !== '') return;
  const result = await axios.get(`http://localhost:8080/api/v1/${fetchPath}`, {
  params: {a, b, c, angleA, angleB, angleC},
   }).then(responce => {
    return responce.data;
   }).catch(error => {
      console.log(error);
   });
   return result;
}

   