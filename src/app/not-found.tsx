import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5 min-h-screen">

        
        <h1 className="text-3xl text-red-500">Page Not Found 4O4</h1>
        <Link href="/" className="underline text-blue-500">
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
