import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Index';
import Page404 from '../pages/Page404';

/**
 * Switch permite que apenas uma rota seja chamada por vez
 * Exact determina que somente a home vai renderizar o componente Login
 * Se digitar qualquer coisa além de /, não vai renderizar nada
 * path=* siginifica que qualquer rota que não exista, vai renderizar o componente Page404
 */

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="*" component={Page404} />
    </Switch>
  );
}
