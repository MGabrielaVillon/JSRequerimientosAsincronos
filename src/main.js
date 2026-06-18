import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `


  <div class="max-w-6xl mx-auto p-6">

    <h2 class="text-2xl font-bold mb-4">
      Matrícula: MARÍA GABRIELA VILLÓN PALMA - 202105870
    </h2>

    <!-- DATATABLE -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

      <table class="w-full text-sm text-left rtl:text-right text-gray-500">

        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Producto</th>
            <th scope="col" class="px-6 py-3">Cantidad</th>
            <th scope="col" class="px-6 py-3">Precio</th>
          </tr>
        </thead>

        <tbody>
          <tr class="bg-white border-b">
            <td class="px-6 py-4">Ejemplo</td>
            <td class="px-6 py-4">10</td>
            <td class="px-6 py-4">$5</td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
`