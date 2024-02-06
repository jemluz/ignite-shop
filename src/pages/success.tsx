import Link from "next/link";
import { ImageContainer, SucessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SucessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>

      </ImageContainer>

      <p>Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.</p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SucessContainer>
  )
}