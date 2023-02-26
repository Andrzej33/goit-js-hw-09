import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

// Виклик функції яка буде заповнювати поля форми даними зі  сховища(якщо вони є) під час перезавантаження сторінки або шнших проблем

onLoadingPage();

// Створення обєкту в який буде записуватися вміст форми

const currentValue = {};

// Опис функції яка буде збирати дані з форми та записувати їх в локальне сховище

const onFormClick = evt => {
  currentValue[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentValue));
};

form.addEventListener('input', throttle(onFormClick, 500));

// Опис функції, яка при відправлені форми очищує її та виводить дані в консоль

const onSubmit = evt => {
  evt.preventDefault();

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(currentValue);
};

form.addEventListener('submit', onSubmit);

function onLoadingPage() {
  const savedFormData = localStorage.getItem(STORAGE_KEY) || '';
  if (savedFormData) {
    try {
      const parsedValues = JSON.parse(savedFormData);
      form.elements.email.value = parsedValues.email;
      form.elements.message.value = parsedValues.message;
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }
}
