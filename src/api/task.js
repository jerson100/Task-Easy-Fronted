const API_VERSION = "v1";
const URL = `https://task-easy.herokuapp.com/api/${API_VERSION}/`;
const addTask = async ({ title, description, color }) => {
  const data = await fetch(`${URL}tasks`, {
    body: JSON.stringify({
      title,
      description: description,
      color: color,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (data.ok) {
    return await data.json();
  } else {
    const err = {
      status: data.status,
      message:
        data.status === 400 ? (await data.json()).message : data.statusText,
    };
    throw err;
  }
};

const updateTask = async ({ title, description, color, id }) => {
  const data = await fetch(`${URL}tasks/${id}`, {
    body: JSON.stringify({
      title,
      description: description,
      color: color,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  });
  if (data.ok) {
    return await data.json();
  } else {
    const err = {
      status: data.status,
      message:
        data.status === 400 ? (await data.json()).message : data.statusText,
    };
    throw err;
  }
};

const getTasks = async () => {
  const data = await fetch(`${URL}tasks`);
  if (data.ok) {
    return await data.json();
  } else {
    const err = {
      status: data.status,
      message: data.statusText,
    };
    throw err;
  }
};

const deleteTask = async (id) => {
  const data = await fetch(`${URL}tasks/${id}`, {
    method: "DELETE",
  });
  if (data.ok) {
    return;
  } else {
    const err = {
      status: data.status,
      message: data.statusText,
    };
    throw err;
  }
};

export { addTask, getTasks, deleteTask, updateTask };
