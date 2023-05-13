import React, { useState } from 'react';
import './post.scss';
import { Users } from './../../data';
import { Posts } from './../../data';
import { IconButton } from '@mui/material';
import { ChatBubbleOutline, MoreVert, Favorite, ThumbUp, ThumbUpAltOutlined, ShareOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    var count = post.like;
    const [like, setLike] = useState(count);

    const onClick1 = () => {
        setLike((like) => like + 1);
    };
    const [likes, setLikes] = useState(count);
    const [lastClickTime, setLastClickTime] = useState(0);

    const handleClick = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastClickTime;

        if (elapsedTime > 500) {
            if (likes > count) {
                setLikes(likes);
            } else {
                setLikes(likes + 1);
            }
        }

        setLastClickTime(currentTime);
    };
    //just kidding

    console.log(post);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to="/profile/userId">
                            <img
                                src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                                alt=""
                                className="postProfileImg"
                            />
                        </Link>
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <IconButton>
                            <MoreVert className="postVertButton" />
                        </IconButton>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.body}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite className="bottomLeftIcon" style={{ color: 'red' }} />
                        <ThumbUp className="bottomLeftIcon" style={{ color: '#011631' }} />
                        <span className="postLikeCounter"> {likes} </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} · comments · share</span>
                    </div>
                </div>

                <hr className="footerHr" />
                <div className="postBottomFooter">
                    <span className="postBottomFooterItem">
                        <button onClick={handleClick}>
                            <ThumbUpAltOutlined className="footerIcon" />
                            <span className="footerText">Like</span>
                        </button>
                    </span>

                    <div className="postBottomFooterItem">
                        <ChatBubbleOutline className="footerIcon" />
                        <span className="footerText">Comment</span>
                    </div>
                    <div className="postBottomFooterItem">
                        <ShareOutlined className="footerIcon" />
                        <span className="footerText">Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
