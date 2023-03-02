import axios from 'axios';

const headers = {
  apikey: `${import.meta.env.VITE_API_KEY}`,
  username: `${import.meta.env.VITE_USERNAME}`,
};

export const fetchTodos = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`, {
    headers,
  });
  return response.data;
};

export const editTodo = async (todo) => {
  const { title, done, id } = todo;
  const response = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/${id}`,
    {
      title,
      done,
    },
    {
      headers,
    }
  );
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/${id}`,
    {
      headers,
    }
  );
  return response.data;
};
