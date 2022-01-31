const dataFromLocalStorage = JSON.parse(localStorage.getItem("data") || "[]");

export const getUsers = {
  isLoading: false,
  isSuccessful: false,
  data: null,
  error: null,
};

export const users = {
  data: dataFromLocalStorage,
  data: null,
};
