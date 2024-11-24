import Link from "next/link";
import ImageSlider from "./ImageSlider";



const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <>
    <h1 className="text-blue-600 mb-4 absolute mt-20 text-center text-3xl w-[100%] font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
    {pageName}
    </h1>
      
    </>
  );
};

export default Breadcrumb;
