const BASE_ENDPOINT = "https://restcountries.eu/rest/v2/lang/es";

export const getAllCountries = async () => {
  try {
    const response = await fetch(`${BASE_ENDPOINT}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
