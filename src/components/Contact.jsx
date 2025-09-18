import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Kontaktirajte nas</h2>

        <dl className="mt-8 space-y-6 text-gray-700">
          <div className="flex items-start justify-center gap-3">
            <dt className="sr-only">Adresa</dt>
            <BuildingOffice2Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            <dd>
              <address className="not-italic">
                KOLUBARSKI TRG 65, 18425
                <br />
                Lazarevac, Srbija
              </address>
            </dd>
          </div>

          <div className="flex items-center justify-center gap-3">
            <dt className="sr-only">Telefon</dt>
            <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            <dd>
              <a href="tel:+381118127652" className="hover:text-gray-900">
                011 812 7652
              </a>
            </dd>
          </div>

          <div className="flex items-center justify-center gap-3">
            <dt className="sr-only">Email</dt>
            <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            <dd>
              <a href="mailto:bonafidesconsulting.co@gmail.com" className="hover:text-gray-900">
                bonafidesconsulting.co@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
