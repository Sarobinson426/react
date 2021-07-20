import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Skittles: Green's Envy of Red", author: "Peach", id: 1, body: "ips Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa adipisci quo culpa corrupti alias perspiciatis, sint voluptas repellendus laboriosam totam quod at expedita facere delectus, reprehenderit debitis accusamus commodi voluptates!"},
        {title: "Mario: How to Control Road Rage", author: "Mario", id: 2, body: "ips Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa adipisci quo culpa corrupti alias perspiciatis, sint voluptas repellendus laboriosam totam quod at expedita facere delectus, reprehenderit debitis accusamus commodi voluptates!"},
        {title: "Baked Goods and Mushrooms WHO KNEW!?", author: "Peach", id: 3, body: "ips Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa adipisci quo culpa corrupti alias perspiciatis, sint voluptas repellendus laboriosam totam quod at expedita facere delectus, reprehenderit debitis accusamus commodi voluptates!"}
    ]);

    return(
        <Bloglist blogs={ blogs } title="All Blogs" />
    );
}

export default Home;