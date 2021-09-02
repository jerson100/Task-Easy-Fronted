import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { getTasks, addTask, deleteTask, updateTask } from "../../api/task";
import { ContainerHome } from "./home.style";
import Loader from "../../components/common/Loader/Loader";
import Footer from "./components/Footer/Footer";

const Home = () => {
  const [tasks, settasks] = useState([]);
  const [loading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

  const add = useCallback(async ({ title, description, color }, callback) => {
    setIsLoading(true);
    try {
      const { data } = await addTask({ title, description, color });
      settasks((prev) => [...prev, data]);
      //   callback();
      callback();
      alert("Tarea creada");
    } catch (e) {
      if (e.status && e.status >= 400 && e.status < 500) {
        alert(e.message);
      } else {
        console.log("Error de servidor...");
      }
    }
    setIsLoading(false);
  }, []);

  const update = useCallback(
    async ({ title, description, color, id }, callback) => {
      setIsLoading(true);
      try {
        const { data } = await updateTask({ title, description, color, id });
        console.log(data);
        settasks((prevTasks) =>
          prevTasks.map((t) => {
            return t._id === id ? { ...data } : t;
          })
        );
        callback();
        alert("Tarea actualizada.");
      } catch (e) {
        if (e.status && e.status >= 400 && e.status < 500) {
          alert(e.message);
        } else {
          console.log("Error de servidor...");
        }
      }
      setIsLoading(false);
    },
    []
  );

  const remove = useCallback(async (id) => {
    setIsLoading(true);
    try {
      await deleteTask(id);
      settasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
      console.log("delete....");
      alert("Tarea eliminada");
    } catch (e) {
      if (e.status && e.status >= 400 && e.status < 500) {
        alert(e.message);
      } else {
        console.log("Error de servidor...");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    // setError(null);
    getTasks()
      .then(({ data }) => {
        settasks(data);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e.status && e.status >= 400 && e.status < 500) {
          alert(e.message);
        } else {
          console.log("Error de servidor...");
        }
        setIsLoading(false);
        // setError(
        //   e.status === 500
        //     ? "Ocurrió un error en el servidor"
        //     : "Ocurrió un error"
        // );
      });
  }, []);

  return (
    <ContainerHome>
      <Header add={add} />
      <Main tasks={tasks} remove={remove} update={update} />
      {loading && <Loader />}
      <Footer />
    </ContainerHome>
  );
};

export default Home;
