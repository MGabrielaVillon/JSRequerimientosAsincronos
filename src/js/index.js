import { getSalesCoffee } from "./requirements.js";

const processSalesCoffee = async () => {

  const xmlString = await getSalesCoffee();

  if (!xmlString) return;

  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "text/xml");

  const rows = xml.getElementsByTagName("row");

  let html = "";

  for (let i = 0; i < rows.length; i++) {

    const product = rows[i].getElementsByTagName("coffee_name")[0]?.textContent;
    const quantity = rows[i].getElementsByTagName("cash_type")[0]?.textContent;
    const price = rows[i].getElementsByTagName("money")[0]?.textContent;

    html += `
      <tr class="bg-white border-b">
        <td class="px-6 py-4">${product}</td>
        <td class="px-6 py-4">${quantity}</td>
        <td class="px-6 py-4">${price}</td>
      </tr>
    `;
  }

  document.querySelector("tbody").innerHTML = html;
};

// Ejecutar cuando cargue la página
processSalesCoffee();