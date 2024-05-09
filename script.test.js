// import { fireEvent, render, screen } from "@testing-library/react";
// import ComponentExample from "./ComponentExample"

// test('changes the class when clicked', () => {
//   // рендерим компонент
//   render(<ComponentExample />);

//   // находим кнопку по test id
//   const btn = screen.getByTestId("btn");

//   // проверяем, что у нее класс closed
//   expect(btn).toHaveClass("closed")

//   // нажимаем
//   fireEvent.click(btn);
//   // проверяем, что у нее класс opened
//   expect(btn).toHaveClass("opened")

//   // снова нажимаем
//   fireEvent.click(btn);
//   // проверяем, что класс closed
//   expect(btn).toHaveClass("closed")
// })



function fireEventClick(element) {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(event);
}

// Функция для проверки класса
function expectToHaveClass(element, className) {
  const classes = element.className.split(' ');
  return classes.includes(className);
}

// Тест
function testChangesTheClassWhenClicked() {
  // Находим кнопку
  const btn = document.querySelector('.scroll-to-top');

  // Проверяем, что у кнопки класс closed
  if (!expectToHaveClass(btn, 'closed')) {
    throw new Error('Test failed: Button should have class "closed" initially.');
  }

  // Нажимаем
  fireEventClick(btn);

  // Проверяем, что у кнопки класс opened
  if (!expectToHaveClass(btn, 'opened')) {
    throw new Error('Test failed: Button should have class "opened" after click.');
  }
  
  // Снова нажимаем
  fireEventClick(btn);

  // Проверяем, что у кнопки класс closed
  if (!expectToHaveClass(btn, 'closed')) {
    throw new Error('Test failed: Button should have class "closed" after second click.');
  }

  console.log('All tests passed successfully!');
}

// Запускаем тест
testChangesTheClassWhenClicked();