import axios from "axios";

function fetchCompany() {
  return axios
    .get("https://localhost:5001/api/companies/my")
    .then((response) => {
      return response.data;
    });
}

function fetchAddMyCompany(registryCode) {
  return axios({
    method: "post",
    url: "https://localhost:5001/api/companies",
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
