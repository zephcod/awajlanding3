import React from 'react'
import Link from 'next/link';
import { buttonVariants } from '@/components/UI/button';


const Admin = () => {
  return (
    <div className='m-auto relative flex flex-row gap-3'>
        <Link href="/admin/add">
            <div
                className={buttonVariants({
                variant:'outline',
                size: "default",
                })}
            >
                Add Produt
                <span className="sr-only">Add Product</span>
            </div>
        </Link>
        <Link href="/admin/edit">
            <div
                className={buttonVariants({
                variant:'outline',
                size: "default",
                })}
            >
                Edit Produt
                <span className="sr-only">Edit Product</span>
            </div>
        </Link>
        <Link href="/admin/tasks">
            <div
                className={buttonVariants({
                variant:'outline',
                size: "default",
                })}
            >
                Manage Tasks
                <span className="sr-only">Manage Tasks</span>
            </div>
        </Link>
    </div>
  )
}

export default Admin