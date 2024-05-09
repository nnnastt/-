// import { useState } from "react"

// export default function ComponentExample() {
//     const [isOpened, setIsOpened] = useState(false);

//     function handleClick() {
//         setIsOpened(!isOpened);
//     }

//     return (тз
//         <div data-testid="btn" onClick={handleClick} className={isOpened ? "opened" : "closed"}>
//             Button example
//         </div>
//     )
// }
const button = document.querySelector('.scroll-to-top');
let isOpened = false;

// Функция для изменения состояния при клике
function handleClick() {
  isOpened = !isOpened;
  button.className = isOpened ? "scroll-to-top opened" : "scroll-to-top closed";
}

// Назначаем обработчик события на клик
button.addEventListener('click', handleClick);