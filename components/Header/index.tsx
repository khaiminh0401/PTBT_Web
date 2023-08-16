'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
const Header = () => {

    return (
        <>
            {/* style={{ backgroundColor: '#C8AE7D' }} */}

            <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container">
                    <Link className="navbar-brand float-sm-start float-lg-start me-5" href="/">
                        <img src="../../../images/logo.png" className='' alt="Bootstrap" width={100} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav fs-5 p-2 mb-lg-0 ">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active text-inline" aria-current="page" href={"/"}>Trang chủ</Link>
                            </li>
                            <li className="nav-item dropdown mx-2" >
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Loại
                                </a>
                                <ul className="dropdown-menu mx-2 rounded-0" style={{ backgroundColor: '#C8AE7D' }}>
                                    <li><a className="dropdown-item" href="/category/L01">Dinh Dưỡng</a></li>
                                    <li><a className="dropdown-item" href="/category/L02">Thông Tin</a></li>
                                    <li><a className="dropdown-item" href="/category/L04">Mẹo Vặt</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Danh Mục
                                </a>
                                <ul className="dropdown-menu mx-2 rounded-0" style={{ backgroundColor: '#C8AE7D' }}>
                                    <li><a className="dropdown-item" href="/directory/CM01">Giảm Cân</a></li>
                                    <li><a className="dropdown-item" href="/directory/CM02">Tăng Cân</a></li>
                                    <li><a className="dropdown-item" href="/directory/CM03">Sức Khỏe</a></li>
                                    <li><a className="dropdown-item" href="/directory/CM04">Tiết Kiệm</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark" href="/about">Về chúng tôi</a>
                            </li>
                            <li className="nav-item ms-5 mt-2 fw-bold" style={{ color: '#603813' }}>
                                <i className="bi bi-search "></i>
                            </li>
                            <li className="nav-item mx-2 mt-2 fw-bold" style={{ color: '#603813' }}>
                                <i className="bi bi-heart-fill"></i>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
            <div id="carouselExampleControls" className="carousel slide mb-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src="..." className="d-block w-100" alt="..." /> */}
                        <img src="../../../assert/img/index_slide01.jpg" className='d-block w-100' alt="Bootstrap" />
                    </div>
                    <div className="carousel-item">
                        <img src="../../../assert/img/index_slide02.jpg" className='d-block w-100' alt="Bootstrap" />
                    </div>
                    <div className="carousel-item">
                        <img src="../../../assert/img/index_slide03.jpg" className='d-block w-100' alt="Bootstrap" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
}

export default Header;
