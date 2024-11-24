import Breadcrumb from "../Common/Breadcrumb";
import BlogSection from "./BlogSection";

const HomeBlogSection = () => {
  return (
    <section className="bg-white pb-10 dark:bg-dark lg:pb-20 lg:pt-1 md:mt-20">
        {/* <Breadcrumb pageName="Events" /> */}

        {/* Title Section */}
        <h1 className="text-3xl text-blue-600 md:text-4xl lg:text-5xl text-center font-bold mt-20 md:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-10">
          Upcoming Events
        </h1>

        {/* Description Section */}
        <p className="text-sm md:text-base lg:text-lg text-center text-gray-600 dark:text-gray-400 mt-4 md:mt-6 lg:mt-8 px-4 sm:px-6 lg:px-10">
          There are mentioned all the upcoming events in queue
        </p>

        {/* Blog Section */}
        <BlogSection/>
      {/* </div> */}
    </section>
  );
};

export default HomeBlogSection;
