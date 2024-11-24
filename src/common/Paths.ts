/**
 * Express router paths go here.
 */

import { getOptionSections } from "ts-command-line-args";


export default {
  Base: '/',
  Users: {
    Base: '/usuario',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Auth: {
    Base: '/auth',
    Login: '/'
  },
  Resena: {
    Base: '/resena',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Explorar: {
    Base: '/explorar',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Pelicula: {
    Base: '/pelicula',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  Lista: {
    Base: '/lista',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
} as const;
