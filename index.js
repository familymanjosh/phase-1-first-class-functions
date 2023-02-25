// //function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
  
//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
// function runFiveMiles(){
//     console.log("Go for a five-mile run")
// }
// function liftWeights(){
//     console.log ("Pump Iron");
// }
// function swimFortyLaps(){
//     console.log(" Swim 40 Laps");
// }
// function Monday(){
//     runFiveMiles()
//     liftWeights()
// }
// function exerciseRoutine(postRunActivity){
//     runFiveMiles()
//     postRunActivity()
// }
// exerciseRoutine(() => console.log("Stretch! Work that core!"));

// function morningRoutine(exercise){
//     let breakfast;
//     if (exercise === liftWeights){
//         breakfast = "protien bar";
//     } else if (exercise === swimFortyLaps){
//         breakfast = "kale smoothie"
//     } else {
//         breakfast = "granola"
//     }
// exerciseRoutine(exercise);
// console.log(`Nom nom nom, this $(Breakfast) is delicious!`);
// }
// const afterExercise = morningRoutine(liftWeights);
// afterExercise;



const amedFunction = x => x+2
const receivesAFunction = function(amedFunction){
 amedFunction()
}
function returnsANamedFunction() {
return  function morning(){}
}
const returnsAnAnonymousFunction = function (){
  return function(){}
}