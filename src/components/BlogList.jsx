import React from "react";
import img2 from "../assets/images/fixing_car.jpg"

function BlogList() {
  const blog = [
    {
      id: 1,
      image: img2,
      caption: "this is a block list for a car listing, please take cats care."
    },
    {
      id: 2,
      image: img2,
      caption: "this is a block list for a car listing, please take cats care."
    }
  ];

  return (
    <section>
      {blog.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          {/* Use the image property in an img tag */}
          <img src={item.image} alt="Car" style={{ width: '200px' }} />
          
          {/* Access caption directly from the item */}
          <p>{item.caption}</p>
        </div>
      ))}
    </section>
  );
}

export default BlogList;