import React from 'react'

import UsuarioState from './context/usuarios/usuariosState'

import { AppRouter } from "./routes/AppRouter"

function App() {
  return (
    <div>
      <UsuarioState>
        <AppRouter />
      </UsuarioState>
    </div>
  )
}

export default App
