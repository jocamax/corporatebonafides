const products = [
  {
    id: 1,
    name: 'Uredjaji za peskarenje',
    href: '#',
    imageSrc: 'https://www.elcometer.com/pub/media/catalog/product/cache/af223597a3ee5359134462931adcb364/c/o/contractor-blast-machines.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Kontakt',
    color: '',
  },
  {
    id: 2,
    name: 'Pneumatski uredjaji za farbanje',
    href: '#',
    imageSrc: 'https://www.qtechspray.com/wp-content/uploads/2024/01/qamsin-gravity-3.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: 'Kontakt',
    color: '',
  },
  {
    id: 3,
    name: 'Električni airless uredjaji',
    href: '#',
    imageSrc: 'https://dedjh0j7jhutx.cloudfront.net/1919492237608132608%2Fdff06c2c19a159888aac40282c82eb48.webp',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: 'Kontakt',
    color: '',
  },
  {
    id: 4,
    name: 'Dodatna oprema',
    href: '#',
    imageSrc: 'https://www.elcometer.com/pub/media/500-intro.jpg',
    imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: 'Kontakt',
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