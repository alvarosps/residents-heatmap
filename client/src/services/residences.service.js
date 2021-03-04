import http from "../http-common";

const getAll = () => {
  return http.get("/residences");
};

const get = id => {
  return http.get(`/residences/${id}`);
};

const create = data => {
  return http.post("/residences", data);
};

const update = (id, data) => {
  return http.put(`/residences/${id}`, data);
};

const remove = id => {
  return http.delete(`/residences/${id}`);
};

const removeAll = () => {
  return http.delete(`/residences`);
};

const crudFunctions = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default crudFunctions;
