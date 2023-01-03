import axios from "axios";

const apiPortal = "https://api.unsplash.com/search/photos?";
let apiQuery = "1";
let apiPage = "office";
const apiKey = "Fev58Kd1o7oUFaS9qliSh_BrINUe8YmDjldwalE-CEE";

export const changeQuery = (query) => {
  apiQuery = query;
};

export const changePage = (page) => {
  apiPage = page;
};

export const getData = async (setMethod) => {
  const { data } = await axios.get(
    `${apiPortal}page=${apiPage}&query=${apiQuery}&client_id=${apiKey}`
  );
  const { results } = data;

  await setMethod(results);
};
