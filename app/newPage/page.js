import Link from "next/link";

export default function NewPage() {
  return (
    <>
      <div className="m-[100px]">
        <h1>this is the NewPage</h1>
        <Link
          className="mt-[10px] 
          cursor-pointer 
          text-lg font-bold " href={"/"}
        >
          Take Me Home!
        </Link>
      </div>
    </>
  );
}