// router index.ts
import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

//создаю перечисления маршрутов
export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

// маршруты для не авторизованных пользователей
export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

//Маршруты для авторизованных пользователей
export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
];
