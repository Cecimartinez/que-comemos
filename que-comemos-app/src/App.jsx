import React from 'react'

import UsuarioState from './context/usuarios/usuariosState'

import { AppRouter } from "./routes/AppRouter"

function App() {
  return (
      <UsuarioState>
        <AppRouter />
      </UsuarioState>
  )
}

export default App
