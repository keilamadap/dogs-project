import React from "react";

const PhotoPost = () => {
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");
  const [token, setToken] = React.useState("");

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("img", img);
    formData.append("nome", nome);
    formData.append("idade", idade);
    formData.append("peso", peso);

    e.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <input
          type="text"
          placeholder="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="text"
          placeholder="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />

        <input type="file" onChange={(e) => setImg(e.target.files[0])} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PhotoPost;
