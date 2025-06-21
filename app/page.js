import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="m-[100px]">
        <h1>this is the Home</h1>
        <Link
          className="mt-[10px] 
          cursor-pointer 
          text-lg font-bold " href={"./newPage"}
        >
          Click Me!
        </Link>
        
      </div>
    </>
  );
}
