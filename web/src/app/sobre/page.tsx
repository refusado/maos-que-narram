import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function Sobre() {
  return (
    <div className="mx-auto max-w-[85rem]">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="block text-3xl font-bold text-neutral-800 sm:text-4xl lg:text-6xl">
            Conheça o <span className="text-blue-600">Mãos que Narram</span>
          </h1>
          <p className="mt-3 text-lg text-neutral-800">
            Dado o desafio da ContCode, de solucionar um problema real do
            mercado desenvolvendo uma aplicação fullstack, nós desenvolvemos uma
            plataforma que visa estimular o aprendizado da Libras e fazer com
            que mais pessoas se capacitem para atuar no mercado em funções
            relacionadas ao tema.
          </p>
          <p className="mt-3 text-lg text-neutral-800">
            Desta forma, nossa solução além de contribuir com a acessibilidade,
            algo que por si só já tem o poder de impulsionar o desenvolvimento
            do país e gerar mais inclusão no mercado de trabalho, nós também
            iremos lutar diretamente contra a alta demanda de serviços
            relacionados à Língua de Brasileira de Sinais, como intérpretes e
            professores, e a falta de pessoas capacitadas para suprir esta
            demanda.
          </p>
          <p className="mt-3 text-lg text-neutral-800">
            O Mãos que Narram é uma plataforma web que objetiva aumentar o
            contato com a Libras logo na infância, promovendo histórias infantis
            sinalizadas e pequenas atividades para aumentar o interesse e o
            aprendizado. Com funcionalidades como perguntas para testar o
            entendimento e gamificação para acompanhar o progresso, nossa
            solução visa desenvolver habilidades em uma fase da vida onde
            aprendemos com mais facilidade: a infância.
          </p>

          <div className="mt-7 grid w-full gap-4 text-center font-medium sm:inline-flex">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-white hover:bg-blue-700 focus:bg-blue-700"
              href="/"
            >
              Conhecer <ArrowRight className="size-6" />
            </Link>
          </div>
        </div>

        <div className="relative ms-4">
          <img
            className="aspect-[1/1.25] w-full rounded-3xl object-cover object-center"
            src="https://images.pexels.com/photos/7182619/pexels-photo-7182619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Crianças aprendendo Libras"
          />
          <div className="absolute inset-0 -z-[1] -mb-4 -ms-4 me-4 mt-4 size-full rounded-3xl bg-gradient-to-tr from-blue-600/60 via-white/0 to-white/0 lg:-mb-6 lg:-ms-6 lg:me-6 lg:mt-6"></div>
        </div>
      </div>
    </div>
  );
}
