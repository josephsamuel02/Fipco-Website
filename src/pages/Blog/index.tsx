/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import { db } from "../../DB/firebase";
import BlogPost from "./BlogPost";
import BlogPostCards from "./BlogPostCards";

const Blog = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<any>();
  const [page] = useState<any>(id);

  const fetchPost = async () => {
    await getDocs(collection(db, "Blog")).then((querySnapshot) => {
      const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogPost(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="w-full h-auto mt-24 bg-white">
      <div className="w-full h-auto flex flex-col lg:flex-row-reverse  ">
        <BlogPost blogPost={blogPost} page={page} />
        <BlogPostCards blogPost={blogPost} />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
