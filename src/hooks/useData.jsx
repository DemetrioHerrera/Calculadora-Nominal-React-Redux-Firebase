import { useState } from "react";

export const useData = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const handleChange = e => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return [data, handleChange];
};
