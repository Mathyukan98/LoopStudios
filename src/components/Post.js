import React from 'react'
import postImage from '../assests/image-interactive.jpg'; 

 const Post = () => {
  return (
    <div class=" ml-40 mt-20  grid grid-cols-2 divide-x">
        <div><img src={postImage} /></div>
        <div class="mt-40 -ml-40  bg-white ...">
        <div class=" mt-20 ml-20 mr-40 ">
        <span className="   text-5xl"> THE LEADER IN  INTRACTIVE VR </span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
        
        
        </div>

        </div>
        
      
    </div>
  )
}
export default Post;