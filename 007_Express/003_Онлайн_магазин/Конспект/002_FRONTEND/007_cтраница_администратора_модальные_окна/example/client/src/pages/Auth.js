// pages Auth.js
import React from 'react';
import { Container, Card, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();

  const isLogin = location.pathname === LOGIN_ROUTE;

  console.log('location', location);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите Email" />
          <Form.Control className="mt-3" placeholder="Введите пароль" />
          <Row className="d-lg-flex justify-content-lg-between m-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button className="mt-3" variant={'outline-success'}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
