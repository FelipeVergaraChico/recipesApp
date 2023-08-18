import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/receitas');
  };

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const btnActive = (regexEmail.test(form.email) && form.password.length > 6);

  return (
    <form onSubmit={ handleSubmitLogin }>
      <input
        name="email"
        type="text"
        data-testid="email-input"
        value={ form.email }
        onChange={ handleChange }
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
        value={ form.password }
        onChange={ handleChange }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !btnActive }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
