export const getSalesCoffee = async () => {

  try {

    const response = await fetch(
      "https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml"
    );

    const data = await response.text();

    return data;

  } catch (error) {

    console.error("Error al obtener Coffee sales:", error);

    return null;
  }
};