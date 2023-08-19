import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";

const LoginCreate = () => {
  const { form, register } = useForm();
  const name = useForm();
  const password = useForm();
  const email = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Crie seu cadastro</h3>
        <Input label="Nome" name="name" {...name} />
        <Input label="Email" name="email" {...email} />
        <Input label="Senha" name="password" {...password} />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default LoginCreate;
