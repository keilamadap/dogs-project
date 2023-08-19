import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";

const LoginLostPassword = () => {
  const password = useForm();
  const newPassword = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(password.value);
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <h3>Perdeu a senha?</h3>
        <p>Insira as informações abaixo</p>
        <Input label="Senha" name="password" {...password} />
        <Input label="Confirme a senha" name="newPassword" {...newPassword} />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default LoginLostPassword;
