import type { AppProps } from 'next/app'

import logoImg from "../assets/logo.svg"
import { Container, Header } from '../styles/pages/app'

// rever aulas
// Estrutura visual - Configurando Stitches
// Estrutura visual - Estilos globais
// Estrutura visual - Cabeçalho da aplicação

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
