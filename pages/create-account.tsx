import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Create() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onBlur" });

  const onValid = async (data: LoginForm) => {
    await fetch("/api/create-account", {
      method: "post",
      body: JSON.stringify({ data }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  // console.log(watch());
  return (
    <div className="w-full h-screen bg-gray-400 justify-center items-center p-10">
      <form
        className="bg-white rounded-2xl p-5 flex flex-col shadow-2xl"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <input
          className="border-2 border-indigo-300 rounded-xl my-2"
          {...register("username", {
            required: "유저이름이 필요합니다!!",
            minLength: {
              message: "유저이름은 5글자 이상이여야합니다.",
              value: 5,
            },
          })}
          type="text"
          placeholder="Username"
        ></input>
        {errors.username?.message}
        <input
          className="border-2 border-indigo-300 rounded-xl my-2"
          {...register("email", {
            required: "네이버 혹은 지메일 이메일이 필요합니다!!",
            validate: {
              notGoodemail: (value) =>
                value.includes("@gmail.com") ||
                value.includes("@naver.com") ||
                "유효한 이메일이 아닙니다!!",
            },
          })}
          type="email"
          placeholder="Email"
        ></input>
        {errors.email?.message}
        <input
          className="border-2 border-indigo-300 rounded-xl my-2
            "
          {...register("password", {
            required: "비밀번호가 필요합니다!!",
          })}
          type="password"
          placeholder="Password"
        ></input>
        {errors.password?.message}
        <input type="submit" value="create account"></input>
      </form>
    </div>
  );
}
