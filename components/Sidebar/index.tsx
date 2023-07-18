"use client"

import React, { useState } from "react";
const Sidebar = () => {

    let nav = [
        {
            id: 1,
            url: "",
            text: "Trang chủ"
        },
        {
            id: 2,
            url: "/posts",
            text: "Bài viết"
        },
        {
            id: 3,
            url: "/dashboard",
            text: "Thống kê"
        },
        {
            id: 4,
            url: "/user",
            text: "Người dùng"
        }
    ];

    const [status, setStatus] = useState();
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "20%", height: "100%" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">Can Cook (Admin)</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {
                    nav.map(s => (<li key={s.id} className="nav-item">
                        <a href="#" className={`nav-link text-white ${s.id == 1 ? 'active' : ''}`}>{s.text}</a></li>)
                    )
                }
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style={{}}>
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>

    );
}
export default Sidebar;