import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import { Layout, Space } from 'antd';







const WebsiteLayout = () => {
  return (
   <div>
    <a href="/">Home</a> <br />
    <a href="/products">Products</a>
    <main>
      <Outlet></Outlet>
    </main>
    </div>
   
  )
}

export default WebsiteLayout