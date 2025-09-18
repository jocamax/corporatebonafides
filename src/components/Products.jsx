const products = [
  {
    id: 1,
    name: 'Elcometer Contracor Abrasive Blast Machines',
    href: '#',
    imageSrc: 'https://www.elcometer.com/pub/media/catalog/product/cache/af223597a3ee5359134462931adcb364/c/o/contractor-blast-machines.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Cena - Kontakt',
    color: '',
  },
  {
    id: 2,
    name: 'Qamsin Pneumatic Air-Assisted Airless Paint Sprayer',
    href: '#',
    imageSrc: 'https://www.qtechspray.com/wp-content/uploads/2024/01/qamsin-gravity-3.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: 'Cena - Kontakt',
    color: '',
  },
  {
    id: 3,
    name: 'Sagola X 4100 Series Pressure Spray Gun',
    href: '#',
    imageSrc: 'https://www.elcometer.com/pub/media/X4100-pressure-angled-intro_4.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '$Cena - Kontakt',
    color: '',
  },
  {
    id: 4,
    name: 'Sagola PSAM 500 Airless Pressure Spray Gun',
    href: '#',
    imageSrc: 'https://www.elcometer.com/pub/media/500-intro.jpg',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '$Cena - Kontakt',
    color: '',
  },
]

export default function Product() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Naši proizvodi</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}