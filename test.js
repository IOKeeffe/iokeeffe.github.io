// const printCheck = (string) => () => {
//   console.log(string);
// }
// 
// setTimeout(() => {
//   document.getElementById("loading").id = "";
// }, 5000);
// 
// document.addEventListener('DOMContentLoaded', () => {
//   checkPageLoad(printCheck("WEE"));
// });
// 

const checkPageLoad = (callback) => {
  let allElements = document.querySelectorAll('.loading, #loading');
  if(allElements.length) {
      setTimeout(() => {checkPageLoad(callback);}, 25);
      return;
    }
  callback();
}