import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Используем MemoryRouter
import { createStore } from 'redux';
import LoginPage from '../pages/LoginPage';
import { login } from '../redux/actions/authActions';

const mockStore = createStore(() => ({
  auth: {
    user: null,
    error: null,
  },
}));

test('renders login form and handles login', async () => {
  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );

  // Проверяем, что форма отображается
  expect(screen.getByLabelText(/логин/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /войти/i })).toBeInTheDocument();

  // Имитируем ввод данных
  fireEvent.change(screen.getByLabelText(/логин/i), {
    target: { value: 'testuser' },
  });
  fireEvent.change(screen.getByLabelText(/пароль/i), {
    target: { value: 'password123' },
  });

  // Имитируем отправку формы
  fireEvent.click(screen.getByRole('button', { name: /войти/i }));

  // Ждем, что экшен был вызван
  await waitFor(() => expect(login).toHaveBeenCalledWith('testuser', 'password123'));
});
