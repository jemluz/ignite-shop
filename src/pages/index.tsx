import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'

import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from "react";

export default function Home(props) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  // const [list, setList] = useState<number[]>([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setList([1, 2, 3])
  //   }, 2000)
  // }, [])

  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>

      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta W</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log('rodou')

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}
