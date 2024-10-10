"use client"
import { useRouter } from "next/navigation";

export default function GoBackButton() {
    const router = useRouter()

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="bg-orange-100 text-orange-600 w-full lg:w-auto text-xl rounded-xl px-10 py-3 text-center font-semibold cursor-pointer hover:bg-orange-200 transition"
      >
        Go back
      </button>
    </div>
  );
}
