import 'bootstrap-icons/font/bootstrap-icons.css'
import "./index.css"
import { Article } from "../../common/model/Article"
import Link from 'next/link'

const Card = ({ ...props }: Article) => {
    return (
        <>
            <div className="mb-3 border border-3 rounded-4 cardAr" style={{ backgroundColor: "white" }}>
                <div className="product-grid">
                    <div className="product-image">
                        <Link
                            href={{ pathname: `/article/${props.id}` }}
                            className='text-decoration-none'>
                            <img className=" p-2 rounded"  src={props.image}/>
                        </Link>
                        <ul className="product-links row">
                            <li>
                                <a href="#">
                                    <i className="bi bi-cloud-download-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-heart-fill" />
                                </a>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: `/article/${props.id}`
                                    }}
                                    className='text-decoration-none'
                                >
                                    <i className="bi bi-eye-fill" />
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-share-fill" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product-content text-start">
                        <h3 className="title">
                            <Link
                                href={{
                                    pathname: `/article/${props.id}`
                                }}
                                className='text-decoration-none'
                            >
                                <span className='fw-bold'>{props.title}</span>
                            </Link>
                        </h3>
                        <div className="comment">
                            <span><i className=" me-1 bi bi-eye"></i>{props.view} views</span>
                            <span><i className="ms-3 me-1 bi bi-chat-dots-fill"></i> {props.sumComment} comment</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card