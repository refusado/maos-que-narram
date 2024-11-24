export function Hero() {
  return (
    <div className="mx-auto max-w-[85rem]">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="block text-3xl font-bold text-neutral-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Explore aqui histórias infantis{' '}
            <span className="text-blue-600">em Libras</span>
          </h1>
          <p className="mt-3 text-lg text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            aliquid molestias rerum, ad commodi sint nihil esse quasi dolor
            fugiat neque consectetur porro.
          </p>

          <div className="mt-7 grid w-full gap-4 text-center font-medium sm:inline-flex">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-white hover:bg-blue-700 focus:bg-blue-700"
              href="#destaques"
            >
              {/* TODO: adicionar ícone de seta */}
              Começar &gt;
            </a>
            <a
              className="rounded-xl bg-white px-6 py-3.5 text-neutral-800 shadow-sm hover:bg-neutral-50 focus:bg-neutral-50"
              href="#"
            >
              Saiba mais
            </a>
          </div>
        </div>

        <div className="relative ms-4">
          <img
            className="aspect-[1/1.25] w-full rounded-3xl object-cover object-center"
            // TODO: procurar imagem melhor :v
            src="https://images.pexels.com/photos/17771083/pexels-photo-17771083/free-photo-of-criativo-engenhoso-inventivo-computador-portatil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Criança no computador"
          />
          <div className="absolute inset-0 -z-[1] -mb-4 -ms-4 me-4 mt-4 size-full rounded-3xl bg-gradient-to-tr from-blue-600/60 via-white/0 to-white/0 lg:-mb-6 lg:-ms-6 lg:me-6 lg:mt-6"></div>

          {/* TODO: adicionar efeito/vetor em cima da imagem */}
        </div>
      </div>
    </div>
  );
}
