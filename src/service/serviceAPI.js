import axios from "axios";

const BASE_URL = "https://localhost:5001/api/companies";

function fetchCompany() {
  return axios.get(`${BASE_URL}/my`).then((response) => {
    return response.data;
  });
}

function fetchAddMyCompany(registryCode) {
  return axios({
    method: "post",
    url: `${BASE_URL}`,
    headers: {},
    data: {
      registryCode: registryCode,
    },
  }).then((response) => {
    return response.data;
  });
}

const API = {
  fetchCompany,
  fetchAddMyCompany,
};

export default API;
