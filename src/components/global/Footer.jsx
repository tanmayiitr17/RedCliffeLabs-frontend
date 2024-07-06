import React from 'react'
import { LinkedinFilled, FacebookFilled, InstagramFilled, PhoneFilled, MailFilled } from '@ant-design/icons'

const Footer = () => {
    return (
        <div className='bg-[url(https://templates.templatedri.com/medical/img/bg-img.svg)] bg-cover w-[100%] text-[#fff]'>
            <div className='flex gap-[5vw] px-[80px] py-[80px]'>
                <div className='flex flex-col w-[30vw] gap-[10px] text-[16px]'>
                    <h1 className='text-[30px] font-[700]'>Contact Us!</h1>
                    <div><PhoneFilled className='mr-[10px]' /> +91 958066XX42</div>
                    <div><MailFilled className='mr-[10px]' /> redcliffelabs.info.in</div>
                    <div className='flex gap-[10px]'>
                        <LinkedinFilled />
                        <FacebookFilled />
                        <InstagramFilled />
                    </div>
                </div>
                <div className='flex flex-col w-[30vw] gap-[10px]'>
                    <h1 className='text-[30px] font-[700]'>About Us!</h1>
                    <div className='text-[16px]'>
                        RedCliffe Labs is dedicated to enhancing the well-being of individuals and communities. We believe in the power of holistic health, offering a comprehensive range of services designed to nurture your physical, mental, and emotional well-being.
                    </div>
                </div>
            </div>
            <div className='border-t-[2px] border-t-solid border-t-[#fff] !mx-[80px] text-center'>
                <div className='mt-[5px]'>All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer