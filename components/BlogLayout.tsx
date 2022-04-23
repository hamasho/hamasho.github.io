import {FC,PropsWithChildren}from 'react'
import Layout from './Layout'

const BlogLayout:FC<PropsWithChildren<{}>> =({children}) => {
  return <Layout>
    {children}
    </Layout>
}

export default BlogLayout;
