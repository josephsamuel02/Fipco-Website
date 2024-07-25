import PUBLICROUTES from "../../utils/PublicRoutes";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface appState {
  blogPost: any;
}
 
const BlogPostCards: React.FC<appState> = ({ blogPost }) => {
  return (
    <div className="ml-6 w-full lg:w-2/5 h-full mt-16 flex flex-col ">
      <h2 className=" font-bold my-3 lg:my-3 text-5xl lg:text-5xl text-Red font-OleoScript   ">
        Latest Posts
      </h2>
      {blogPost && (
        <div className="mx-auto w-11/12 md:w-full lg:w-full h-full bg-white grid grid-cols-1 md:grid-flow-row md:grid-cols-2 lg:grid-cols-1">
          {blogPost.map((i: any, n: number) => (
            <a
              href={`${PUBLICROUTES.BLOG}/${n}`}
              key={n}
              className="w-11/12 md:w-58 lg:w-full mx-auto my-5 md:my-3 h-52 md:h-52 lg:h-auto bg-white shadow-lg  hover:shadow-xl rounded-md flex flex-col lg:flex-row border border-slate-200 cursor-pointer"
            >
              <img
                src={i.image}
                alt=""
                className="mx-auto w-full md:w-full lg:w-3/6  h-2/3 md:h-2/3 lg:h-full object-cover rounded-sm"
              />

              <div className="my-auto py-2 px-3 mx-auto w-full md:w-full lg:w-3/5 h-1/3 md:h-auto">
                <p className="text-xl  md:text-xl  text-black font-bold font-OleoScript  leading-5 ">
                  {i.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPostCards;
