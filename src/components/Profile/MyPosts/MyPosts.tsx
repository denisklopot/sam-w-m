import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostsPropsType = {
    name: string
}

export const MyPosts = (props: PostsPropsType) => {
    return <div>
        {props.name}
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='HI' like={'like: 15'}/>
            <Post message='HEY!!!!' like={'like: 20'}/>
        </div>
    </div>
}