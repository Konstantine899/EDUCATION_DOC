# Компонент LoginForm

Можно приступать к логике и давайте создадим первый компонент. Компонент назовем **LoginForm.tsx**

Через сниппер **rsc** разворачиваю функциональный компонент. И через **TS** так же указываю что это функциональный компонент.

```tsx
// components LoginForm.tsx
import React, { FC } from 'react';

const LoginForm: FC = () => {
  return <div></div>;
};

export default LoginForm;
```

Сразу создаю два локальных состояния для **email** и для **password**.

```tsx
// components LoginForm.tsx
import React, { FC, useState } from 'react';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return <div></div>;
};

export default LoginForm;
```

Сразу же в шаблон добавим **input**

```tsx
// components LoginForm.tsx
import React, { FC, useState } from 'react';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      <input type="text" placeholder="Email" />
    </div>
  );
};

export default LoginForm;
```

И сразу же делаю этот **input** управляемым с помощью **onChange** помещаю **callback** который принимает **e** т.е. **event** возвращаю **setEmail(e.target.value)**. И как value передаю **email**.

```tsx
// components LoginForm.tsx
import React, { FC, useState } from 'react';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Пароль"
      />
      <button>Логин</button>
      <button>Регистрация</button>
    </div>
  );
};

export default LoginForm;
```

Вы можете заморочится и сделать две формы: форму Логина и форму Регистрации.
