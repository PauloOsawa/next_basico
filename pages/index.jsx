import Head from 'next/head'
import Image from 'next/image'
import css from '@/styles/Home.module.css'

export default function Home() {

  return (
    <>
      <Head>
      <title>Next for All - Features Básicas</title>
        <meta name="description" content="Projeto da série Next for All com ênfase em suas Features básicas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="Paulo Osawa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={css.main}>
        <div className='metalbox'> <h1 className='tita'>Next Features</h1> </div>
        <h2>O que é o NEXT?</h2>
        <p>
          O Next.js é um framework voltado para produção, que utiliza a biblioteca React
          herdando e aprimorando suas qualidades, além de possuir funcionalidades exclusivas.
        </p>

        <h3>Se destaca na:</h3>
        <p>
          - Otimização e carregamento de sites com grande porte(e altas demandas).
        </p>
        <p>- Confiabilidade e eficiência de navegação, até mesmo em uma Black Friday!</p>
        <p>
          - Escalabilidade e praticidade no desenvolvimento de projetos.
        </p>

        <p>Beneficia usuários(UX), proprietários($$), desenvolvedores, e até servidores!</p>

        <h2>E o que são Features?</h2>
        <p>Em sua tradução literal, São Recursos!!</p>
        <p>
          Aqui, reservados aos básicos e de alguma forma exclusivos ao NEXT,
          seja pela funcionalidade, característica e/ou técnica de desenvolvimento.
        </p>
        <p>
          Aviso: Features em fase experimental terão abordagem futura OK?
        </p>
        <h3>O que é o NEXT?</h3>
        <h3>O que é o NEXT?</h3>
      </main>
    </>
  )
}
