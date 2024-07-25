/* eslint-disable @typescript-eslint/no-explicit-any */
interface appState {
  blogPost: any;
  page: any;
}

const BlogPost: React.FC<appState> = ({ blogPost, page }) => {
  return (
    <div className="mx-1 flex flex-col w-full">
      <div className="w-full h-auto bg-white flex flex-col  ">
        {blogPost && (
          <h1 className="mx-auto my-5 md:my-14 text-3xl md:text-4xl font-bold font-Shrikhand text-black">
            {blogPost[page].title}
          </h1>
        )}
        {blogPost && (
          <img
            src={blogPost[page].image}
            alt=""
            className="mx-auto w-10/12 h-52 object-cover"
          />
        )}
        {blogPost && (
          <p
            dangerouslySetInnerHTML={{ __html: blogPost[page].content }}
            className="mt-8 py-4 px-4 md:px-20 text-xl text-black font-EncodedSans font-thin leading-7"
          />
        )}
        <div className="w-32 h-auto mt-10 ml-5 md:ml-20 bg-red-400 hover:bg-red-600 rounded-md flex flex-row border border-Red items-center cursor-pointer">
          <img src="/img/share-svgrepo-com.svg" alt="share" className="w-8 h-8 px-2" />
          <p className="text-white text-lg font-bold font-Roboto">SHARE</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
