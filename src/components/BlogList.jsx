import React from "react";
import img2 from "../assets/images/fixing_car.jpg"

function BlogList() {
  const blog = [
    {
      id: 1,
      image: img2,
      caption: "this is a block list for a car listing, please take cats care. I am trying to debug, why it does not work"
    },
    {
      id: 2,
      image: img2,
      caption: "this is a block list for a car listing, please take cats care. I am trying to debug, why it does not work"
    }
  ]


  // return <section>
  //   {blog.map((blog) =>{
  //    key ={blog.id} {id.image.caption}
  // })}
  // </section>;
}

export default BlogList;
