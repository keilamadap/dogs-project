import styles from "./UserPhotoPost.module.css";
import React, { useEffect, useState } from "react";
import Button from "../components/Forms/Button";
import Input from "../components/Forms/Input";
import useForm from "../Hooks/useForm";
import useFetch from "../Hooks/useFetch";
import { PHOTO_POST } from "../api";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(token, formData);
    request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input name="name" type="text" label="Nome" {...nome} />
        <Input name="peso" type="text" label="Peso" {...peso} />
        <Input name="idade" type="text" label="Idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? <Button disabled>Enviando</Button> : <Button>Enviar</Button>}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
