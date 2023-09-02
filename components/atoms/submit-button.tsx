import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { TbMailShare } from "react-icons/tb";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex h-[3rem] w-[8rem] items-center justify-center
          gap-2 rounded-full bg-stone-800 text-white outline-none
          transition-all hover:scale-110 hover:bg-stone-950 focus:scale-110 active:scale-105
          disabled:scale-100 disabled:bg-opacity-75"
    >
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></span>
      ) : (
        <>
          {" "}
          Submit{" "}
          <TbMailShare className="text-xl opacity-70 transition-all group-hover:-translate-y-[0.1rem] group-hover:translate-x-[0.1rem]" />
        </>
      )}
    </button>
  );
}
