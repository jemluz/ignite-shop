import type { AppProps } from 'next/app'

import logoImg from "../assets/logo.svg"
import { Container, Header } from '../styles/pages/app'

import Image from "next/image"

// rever aulas
// Estrutura visual - Configurando Stitches
// Estrutura visual - Estilos globais
// Estrutura visual - Cabeçalho da aplicação

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
