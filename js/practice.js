/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
   </div>
*/








// ------------------------------task_2
/*
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

   <div>
        <button id="swapButton">SWAP ME</button>
        <input id="leftSwapInput" type="text" value="???" />
        <input id="rightSwapInput" type="text" value="!!!" />
   </div>
*/


//===============================================================task_3====================================================



//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
  /* <div class="item"> 
<h3>Заголовок</h3>
<p>текст текст текст</p>
</div> */
}
{
  /* <button class="add-btn">add</button>
  <div class="container"></div> */
}




// ========================================================task_4==================================================





//При натисканні на кнопку міняти фоновий колір елемента з класом .play на прозорий.
//Примітка: використовуйте CSS-властивість opacity.

{
  /* <button class="add-btn">add</button>
    <div class="play"></div> */
}
{
  /* <style>
  .play {
    background: pink;
    width: 100px;
    height: 100px;
  }
</style> */
}

// =====================================================task_5================================================
/*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>

*/


// const passwordInput = document.querySelector('#passwordInput');//можно не использовать
// const passwordBtn = document.querySelector('#passwordButton');// можно не использовать 

// passwordBtn.addEventListener('click', onClick)

// function onClick() {
 
// if (passwordInput.type === "password") {
//   passwordInput.type = "text";
//   passwordBtn.textContent = "Приховати";
// }
// else{
//   passwordInput.type = "password";
//   passwordBtn.textContent = "Розкрити";
// }

// }
// console.dir(passwordInput);
// console.dir(passwordBtn);

// function onClick() {
//   passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
//   passwordButton.textContent = (passwordButton.textContent === "Приховати") ? "Розкрити" : "Приховати";
// }

//=========================================================================task_6================================================


/* ---------------------------------*/
//Вивести 4 червоні квадрати, при кліку на будь-який, він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще хоч 100 квадратів, при цьому скрипт не
//треба міняти).

{
  /* 
  
  .square {
  width: 150px;
  height: 150px;
  background: red;
  margin: 10px;
}

.square.green {
  background: green;
}
<div class="wrapper">
  <div class="square"></div> 
<div class="square"></div> 
<div class="square"></div> 
<div class="square"></div>  

</div>*/
}

// const wrapperEL = document.querySelector('.wrapper ')

// wrapperEL.addEventListener('click', onClick)

// function onClick (evt)
// {
//   const target = evt.target;
//   if (evt.currentTarget === target ) {
//     return;
//   }

//   // const children = [...evt.currentTarget.children];
//   const children = evt.currentTarget.children;
//   children.__proto__.forEach = [].forEach;
//   children.forEach(child => {
//     if(child.classList.contains('green'))
//     {
//       child.classList.remove('green');
//     }
//   });
//     target.classList.add('green');
// }

// ===========================task_7=============================
// Напишіть інтерфейс створення списку.
//Для кожного пункту:

// Запитуйте вміст пункту користувача за допомогою prompt.
// Створюйте елемент <li> і додайте його до <ul>.
// Процес переривається, коли користувач натискає вводить порожній рядок.
// Усі елементи мають створюватися динамічно.

{
  /* <ul class="list"></ul> */
}

const listEL = document.querySelector('.list');




const markup = 
