export const RulesTypeTriangle = (values) => {
   let {a, b, c, angleA, angleB, angleC} = values
   let resultText = '';
   let sides = [Number(a), Number(b), Number(c)].filter(s => s !== 0);
   sides.sort((a, b) => {
      return a - b;
   });
   let angles = [Number(angleA), Number(angleB), Number(angleC)].filter(s => s !== 0);
   angles.sort((a, b) => {
      return a - b;
   });
   let stoppper = Object.values(values).filter(angle => angle !== '');
   const sumAngles = Number(angleA) + Number(angleB) + Number(angleC);
   switch(true) {
      case (stoppper.length < 3): 
      resultText = 'Недостаточно данных!';
      return resultText;
      case (sumAngles === 180 && sides.length === 0): 
      console.log('alo')
      resultText = 'Недостаточно данных!';
      return resultText;
      case (sumAngles !== 180 && angleA !== '' && angleB !== '' && angleC !== ''):
      resultText = "Сумма трех уголв должна быть равная 180!";
      return resultText;
      case (Number(angleA) > 178 ||Number(angleB) > 178 || Number(angleC) > 178 ):
      resultText = "Сумма трех уголв должна быть равная 180!";
      return resultText;
      case (sides[0] + sides[1] < sides[2]):
      resultText = "Сумма двух сторон треугольника не может быть меньше третьей!";
      return resultText;
      case (sides[0] === sides[1] && sides[1] === sides[2] && Number(angleA) !== 60 && Number(angleA) !== 0):
      resultText = "В равностроннем углы должен быть равен 60";
      return resultText;
      case (sides[0] === sides[1] && sides[1] === sides[2] && Number(angleB) !== 60 && Number(angleB) !== 0):
      resultText = "В равностроннем углы должен быть равен 60";
      return resultText;
      case (sides[0] === sides[1] && sides[1] === sides[2] && Number(angleC) !== 60 && Number(angleC) !== 0):
      resultText = "В равностроннем углы должен быть равен 60";
      return resultText;
      default:
      resultText = '';
      return resultText;
   }
}
