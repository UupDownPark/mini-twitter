import { useRouter } from "next/router";

export default function Createlog() {
  const router = useRouter();
  const goLogin = () => {
    router.push({ pathname: "/log-in" }, "/log-in");
  };
  const goCreate = () => {
    router.push({ pathname: "/create-account" }, "/create-account");
  };
  return (
    <div className="flex bg-zinc-200 h-[50%] w-[90%] items-center justify-center rounded-2xl  shadow-2xl m-4">
      <button
        className="h-12 w-[120px] bg-zinc-500 rounded-xl m-3"
        onClick={goLogin}
      >
        로그인
      </button>
      <button
        className="h-12 w-[120px] bg-zinc-500 rounded-xl m-3"
        onClick={goCreate}
      >
        계정생성
      </button>
    </div>
  );
}
