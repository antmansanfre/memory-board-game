import type { Component } from 'vue';

export enum RouteName {
  CHOOSE_DIFFICULTY = 'ChooseDifficulty',
  NOT_FOUND = 'NotFound',
}

export enum RoutePath {
  CHOOSE_DIFFICULTY = '/',
  NOT_FOUND = '/:pathMatch(.*)*',
}

interface BaseRoute {
  path: RoutePath;
}

interface ComponentRoute extends BaseRoute {
  name: RouteName;
  component: Component;
}

interface RedirectRoute extends BaseRoute {
  redirect: {
    name: RouteName;
  };
}

export type Route = ComponentRoute | RedirectRoute;
