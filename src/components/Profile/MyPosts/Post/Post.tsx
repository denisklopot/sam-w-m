import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    message: string
    like: string
}

export const Post = (props: PostPropsType) => {
    return <div className={s.item}>
                <img src="https://cdn.imgbin.com/2/14/6/imgbin-computer-icons-avatar-avatar-XRKxbbuivVKcP1e2BUGHYbx5V.jpg" alt="img"/>
        {props.message}
        <div className={s.like}>
            <span>{props.like}</span>
            {/*<img src="https://cdn3.vectorstock.com/i/1000x1000/99/82/like-icon-on-blue-circle-vector-22509982.jpg" alt="img_like"/>*/}
        </div>
    </div>
}