'use client'
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "./Paginate.css"
import "./index.css"
import { PacmanLoader } from "react-spinners";
const ReactPaginate = dynamic(() => import('react-paginate'), { ssr: true })
import CarouselItem from "@/components/Carousel/CaroselItem"
const CarouselMutil = dynamic(() => import("@/components/Carousel"), { ssr: true });
import Tab from "@/components/Tab";
import { onValue, ref } from "firebase/database";
import { database } from "@/util/Firebase/firebase";
import Link from "next/link";

const User = () => {
    const [data, setData] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const commentsRef = ref(database, `comments`);
        onValue(commentsRef, (snapshot) => {
            const commentsData = snapshot.val() || [];
            // Object.keys(comment[a.id]).length}
            setComment(commentsData);
        });
    }, []);

    console.log(comment);

    useEffect(() => {
        getArticleList();
    }, [itemOffset]);

    const hotTopics = [
        {
            name: "Cơm tấm",
            image: "https://cdn.tgdd.vn/Files/2021/08/09/1373996/tu-lam-com-tam-suon-trung-don-gian-thom-ngon-nhu-ngoai-hang-202201071248422991.jpg"
        },
        {
            name: "Bún chả",
            image: "https://cdn.tgdd.vn/Files/2017/04/12/971481/cach-lam-bun-cha-ha-noi-truyen-thong-202112211431417496.jpg"
        },
        {
            name: "Cơm gà",
            image: "https://cdn.tgdd.vn/2021/05/content/comga3-800x450.jpg"
        },
        {
            name: "Chuối chiên",
            image: "https://bloganchoi.com/wp-content/uploads/2022/09/banh-chuoi-chien-gion-rum-thom-ngon-1.jpg"
        }
    ]

    const getArticleList = async () => {

        try {
            if (!data) {
                const res = await axios.get("/api/article?p=" + itemOffset);
                setData(res.data);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const Items = ({ currentItems }) => {
        return (
            <>
                {currentItems &&
                    currentItems.map((a, index) =>
                    (
                        <>
                            <Card key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={comment[a.id] ? Object.keys(comment[a.id]).length : 0} view={a.view}></Card >
                        </>
                    )
                    )
                }
            </>
        );
    }
    const itemsPerPage = data?.pageCount;
    const pageCount = itemsPerPage;

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
    };


    return (
        <div className="container">
            <div>
                <div className="text-center fs-1 mb-1 pt-5 fw-bold">Chào mừng bạn đến với Cancook!</div>
                <div className="text-center fs-4 text-secondary pb-5"> Nơi chia sẻ những công thức nấu ăn đơn giản, ngon miệng và tiết kiệm cho sinh viên ngay tại nhà.</div>
            </div>
            {
                !data ? <div className="container d-flex align-items-center" style={{ height: "50vh" }}>
                    <PacmanLoader color="#765827" className="d-block mx-auto" /></div> :
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div  >
                                        {data && <CarouselMutil>
                                            {
                                                data?.article.map((a, index) =>
                                                (
                                                    <>
                                                        <CarouselItem key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`}
                                                            // sumComment={0} 
                                                            view={a.view}></CarouselItem>
                                                    </>
                                                )
                                                )
                                            }
                                        </CarouselMutil>}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-3" >
                                        <Items key={"page"} currentItems={data.article} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card border-0 mt-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <img src="../../../assert/imageFood/gachienmam/gachienmam.jpg" className='img-fluid' alt="Bootstrap" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="fs-2 fw-bold m-2">Gà Chiên Mắm - Tinh Hoa Của Gia Vị Đậm Đà</div>
                                            <div className="comment m-2">
                                                <span><i className=" me-1 bi bi-eye"></i> views</span>
                                                <span><i className="ms-3 me-1 bi bi-chat-dots-fill"></i>  comment</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="card border-0 mt-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <img src="../../../assert/imageFood/chatom/chatom.jpg" className='img-fluid' alt="Bootstrap" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="fs-2 fw-bold m-2">Chả tôm</div>
                                            <div className="comment m-2">
                                                <span><i className=" me-1 bi bi-eye"></i> views</span>
                                                <span><i className="ms-3 me-1 bi bi-chat-dots-fill"></i>  comment</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="card border-0 mt-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <img src="../../../assert/imageFood/saladcahoi/saladcahoi.jpg" className='img-fluid' alt="Bootstrap" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="fs-2 fw-bold m-2">Salad cá hồi</div>
                                            <div className="comment m-2">
                                                <span><i className=" me-1 bi bi-eye"></i> views</span>
                                                <span><i className="ms-3 me-1 bi bi-chat-dots-fill"></i>  comment</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="card border-0 mt-5">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <img src="../../../assert/imageFood/boluclac/boluclac.jpg" className='img-fluid' alt="Bootstrap" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="fs-2 fw-bold m-2">Bò lúc lắc</div>
                                            <div className="comment m-2">
                                                <span><i className=" me-1 bi bi-eye"></i> views</span>
                                                <span><i className="ms-3 me-1 bi bi-chat-dots-fill"></i>  comment</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="mb-3 mt-5">
                                <Tab comment={comment} />
                            </div>
                        </div>
                    </div>
            }

            <div className="container">
                <h3 className="ms-4 mb-3 fs-2 fw-bold">Hot topic</h3>
                <section className="row">
                    {hotTopics.map((ht, index) => (
                        <div className=" col-12 col-sm-12 col-md-6 col-lg-3" key={index}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "", textDecoration: "none" }} >
                            <Link href="">
                                <img src={`${ht.image}`} style={{ width: "262px", height: "150px" }} className="imgHotTopic" /></Link>
                            <p className="mt-3 fs-5">{ht.name}</p>
                        </div>
                    ))}
                </section>

            </div>

            <div className="conatier my-5">
                <div className="row">
                    <div className="ms-4 mb-3 fs-2 fw-bold">Khách hàng nói gì về chúng tôi ?</div>
                    <div className="col-md-4 col-12">
                        <div className="card rounded-5 border-0 mt-1" style={{ backgroundColor: '#eae8e3' }}>
                            <p className="px-5 pt-4 fw-bold fs-5">Trang web nấu ăn này rất hữu ích và dễ sử dụng. Tôi rất thích cách trình bày và sắp xếp các công thức nấu ăn theo chủ đề.</p>
                            <div className="px-5 pt-1 text-warning">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" /> </div>
                            <p className="px-5 py-1 fw-bold ">Mai Ánh Xuân</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="card rounded-5 border-0 mt-1" style={{ backgroundColor: '#eae8e3' }}>
                            <p className="px-5 pt-4 fw-bold fs-5">Thời gian nấu và nguyên liệu cần thiết được hiển thị rõ ràng, giúp tôi tiết kiệm thời gian mua sắm và chuẩn bị món ăn. </p>
                            <div className="px-5 pt-1 text-warning">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" /> </div>
                            <p className="px-5 py-1 fw-bold ">Lê Duy Anh</p>
                        </div>
                    </div>
                    <div className="col-md-4  col-12">
                        <div className="card rounded-5 border-0 mt-1" style={{ backgroundColor: '#eae8e3' }}>
                            <p className="px-5 pt-4 fw-bold fs-5">Trang web hướng dẫn chi tiết từng bước nấu nướng, giúp tôi dễ dàng làm theo mà không gặp trở ngại.</p>
                            <div className="px-5 pt-1 text-warning">
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" />
                                <i className="bi bi-star-fill" /> </div>
                            <p className="px-5 py-1 fw-bold ">Nguyễn Đăng</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>













        // <div className="container">
        //     {
        //         !data ? <div className="container d-flex align-items-center" style={{ height: "50vh" }}>
        //             <PacmanLoader color="#765827" className="d-block mx-auto" /></div> :
        //             <div className="row">
        //                 {/* w-100 d-flex justify-content-around */}
        //                 <div className="col-md-12 col-lg-6">
        //                     <div  >
        //                         {data && <CarouselMutil>
        //                             {
        //                                 data?.article.map((a, index) =>
        //                                 (
        //                                     <>
        //                                         <CarouselItem key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} 
        //                                         // sumComment={0} 
        //                                         view={a.view}></CarouselItem>
        //                                     </>
        //                                 )
        //                                 )
        //                             }
        //                         </CarouselMutil>}
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6 col-lg-3 ">
        //                     <div className="mb-3" >
        //                         <Items key={"page"} currentItems={data.article} />
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6 col-lg-3">
        //                     <div className="mb-3">
        //                         <Tab comment={comment}/>
        //                     </div>
        //                 </div>
        //             </div>
        //     }

        //     <div className="container">
        //         <h3 className="text-start">Hot topic</h3>
        //         <section className="row">
        //             {hotTopics.map((ht, index) => (
        //                 <div className=" col-12 col-sm-12 col-md-6 col-lg-3" key={index}
        //                     style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "", textDecoration: "none" }} >
        //                     <Link href="">
        //                         <img src={`${ht.image}`} style={{ width: "262px", height: "150px" }} className="imgHotTopic" /></Link>
        //                     <p className="mt-3 fs-5">{ht.name}</p>
        //                 </div>
        //             ))}
        //         </section>

        //     </div>

        // </div>
    );
}
export default User;
function setComments(arg0: unknown[]) {
    throw new Error("Function not implemented.");
}


