// Post.js
import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {get_comments} from '../store/actions/comment_actions';

const Post = ({ blogid,title, author, content, attach_url, onLike, onComment, like,commentcontent,setContent }) => {
    const dispatch = useDispatch();
    const comment_state = useSelector(state => state.comment);
    const {loading, isAuth,comments,error} = comment_state;

    useEffect(() => {
        dispatch(get_comments(blogid));
    }, [dispatch]);
    console.log("i am comments");
    console.log(comments);
    return (
        <div style={{ paddingBottom: "3em" }}>
            <div className="card">
                <div className="card-header p-3">
                    <div className="d-flex flex-row align-items-center">
                        <div onClick={
                            () => {
                                window.location.href = `/authorprofile/${author._id}`;
                            }
                        }>
                            {author.name}
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="embed-responsive embed-responsive-1by1">
                        <img className="embed-responsive-item" src={attach_url} alt={''} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className="pl-3 pr-3 pb-2">
                        <strong className="d-block">{title}</strong>
                        <p className="d-block mb-1">{content}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between pl-3 pr-3 pt-3 pb-1">
                        <ul className="list-inline d-flex flex-row align-items-center m-0">
                            <li className="list-inline-item">
                                <button className="btn p-0" onClick={onLike} >
                                    <i className="fa fa-heart" style={{ color: 'red' }}></i>
                                </button>
                            </li>
                        </ul>

                    </div>

                    <div className="pl-3 pr-3 pb-2">
                        <strong className="d-block">{like} likes</strong>

                        <div>
                            {comments.map(comment => (
                                    <div className="d-flex flex-row align-items-center mt-2">
                                    <div className="d-flex flex-column comment-text ml-3">
                                        <h6 className="mb-1">{comment.user.name}</h6>
                                        <span>{comment.content}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="position-relative comment-box">
                        <form>
                            <input className="w-100 border-0 p-3 input-post" placeholder="Add a comment..." onChange={
                                (e) => {
                                e.preventDefault();
                                    setContent(e.target.value);
                                }
                            } value={commentcontent}
                            />
                            <button className="btn btn-primary position-absolute btn-ig" onClick={(e) => { e.preventDefault(); onComment() }
                            }> 
                                <i className="fa fa-paper-plane-o"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default Post;
