const addTask = async ({ title, description, color }) => {
  const data = await fetch("http://localhost:1025/api/v1/tasks", {
    body: JSON.stringify({
      title,
      description,
      color,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (data.ok) {
    return await data.json();
  } else {
    throw {
      status: data.status,
      message:
        data.status === 400 ? (await data.json()).message : data.statusText,
    };
  }
};

const getTasks = async () => {
  const data = await fetch("http://localhost:1025/api/v1/tasks");
  if (data.ok) {
    return await data.json();
  } else {
    throw {
      status: data.status,
      message: data.statusText,
    };
  }
};

const deleteTask = async (id) => {
  const data = await fetch(`http://localhost:1025/api/v1/tasks/${id}`, {
    method: "DELETE",
  });
  if (data.ok) {
    return;
  } else {
    throw {
      status: data.status,
      message: data.statusText,
    };
  }
};

export { addTask, getTasks, deleteTask };
