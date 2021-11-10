import InputBox from "./InputBox"
import Posts from "./Posts";
import React from "react";


function Feed({ posts }) {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide mt-10">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
    )
}

export default Feed

