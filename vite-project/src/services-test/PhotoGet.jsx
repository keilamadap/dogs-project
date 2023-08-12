import React from "react";

const PhotoGet = () => {
  const [id, setId] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((json) => {
        console.log(json);
        return json();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="submit">Pegar fotos</button>
    </form>
  );
};

export default PhotoGet;
