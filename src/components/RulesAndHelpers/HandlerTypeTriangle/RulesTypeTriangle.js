export const RulesTypeTriangle = (values) => {
   let {a, b, c, angleA, angleB, angleC} = values
   let resultText = '';
   let stoppper = Object.values(values).filter(q => q !== '');
   const sumAngles = Number(angleA) + Number(angleB) + Number(angleC);
 console.log(sumAngles !== 180 && angleA !== '' && angleB !== '' && angleC !== '')
   switch(true) {
      case (stoppper.length < 3): 
      resultText = 'Недостаточно данных';
      return resultText;
      case (sumAngles !== 180 && angleA !== '' && angleB !== '' && angleC !== ''):
      resultText = "Сумма трех уголв должна быть равная 180";
      return resultText;
      default:
      console.log('work');
   }
   console.log(resultText)
}
