import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { getTasks, addTask, deleteTask } from "../../api/task";
import { ContainerHome } from "./home.style";
import Loader from "../../components/common/Loader/Loader";

const Home = () => {
  const [tasks, settasks] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const add = useCallback(async ({ title, description, color }, callback) => {
    setIsLoading(true);
    try {
      const { data } = await addTask({ title, description, color });
      settasks((prev) => [...prev, data]);
      //   callback();
      //   console.log("Se agregó la tarea");
      callback();
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }, []);

  const remove = useCallback(async (id) => {
    setIsLoading(true);
    try {
      await deleteTask(id);
      settasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
      console.log("delete....");
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getTasks()
      .then(({ data }) => {
        settasks(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(
          e.status === 500
            ? "Ocurrió un error en el servidor"
            : "Ocurrió un error"
        );
      });
  }, []);

  return (
    <ContainerHome>
      <Header add={add} />
      <Main tasks={tasks} remove={remove} />
      {loading && <Loader />}
    </ContainerHome>
  );
};

export default Home;
