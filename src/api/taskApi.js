import axiosInstance from "./axiosInstance";

export const getTasks = async () => {
    const res = await axiosInstance.get("/tasks");
    console.log(res);

    return (res.data && (res.data.tasks || res.data.task)) ? (res.data.tasks || res.data.task) : res.data;
};

export const createTask = async (task) => {
    const res = await axiosInstance.post("/tasks", task);
    return res.data && res.data.task ? res.data.task : res.data;
};

export const deleteTask = async (id) => {
    await axiosInstance.delete(`/tasks/${id}`);
};

export const updateTask = async (id, task) => {
    const res = await axiosInstance.put(`/tasks/${id}`, task);
    return res.data && res.data.task ? res.data.task : res.data;
};
