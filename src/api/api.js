import axios from "axios";

const headers = {
  "content-type": "application/json",
  apikey: "FcKdtJs202301",
  username: "KDT4_LeeChanYoung",
};

export const fetchTodos = async () => {
  const response = await axios.get(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      headers,
    }
  );
  return response.data;
};
