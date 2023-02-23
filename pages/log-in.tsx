import { useForm } from "react-hook-form";

export default function Login() {
  const { register, watch, handleSubmit } = useForm();
  const onValid = () => {
    console.log("im valid");
  };
  const onInvalid = () => {
    console.log("im invalid");
  };
  console.log(watch());
  return (
    <div className="w-full h-screen bg-gray-400 justify-center items-center p-10">
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...(register("username"),
          {
            required: true,
          })}
          type="text"
          placeholder="Username"
        ></input>
        <input {...register("email")} type="email" placeholder="Email"></input>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        ></input>
        <input type="submit" value="create account"></input>
      </form>
    </div>
  );
}
