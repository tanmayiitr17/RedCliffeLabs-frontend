import React from 'react'
import { Button, Carousel } from 'antd'
import { SmileTwoTone, MessageFilled, TrophyTwoTone } from '@ant-design/icons'
import './carousel.css';
import { useNavigate } from 'react-router-dom';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    height: '40vh',
    color: '#1677ff',
    textAlign: 'center',
    background: '#FFf',
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center w-[100%] h-[100vh] !bg-[url(https://templates.templatedri.com/medical/img/banner-img2.jpg)] !bg-blend-overlay bg-cover'>
                <div className='ml-[-40%] w-[35%]'>
                    <div className='font-[700] text-[30px]'>Inventory Management at Your Fingertips</div>
                    <div className='text-[rgba(0,0,0,0.57)]'>Experience reliable home delivery with our on-time guarantee and exceptional quality assurance, ensuring your medical lab needs are met efficiently.</div>
                    <Button type="primary" className="login-form-button w-[30%] h-[20%] mt-[10px] text-[14px] font-[500]" onClick={() => navigate("/purchase")}>
                        BUY NOW
                    </Button>
                </div>
            </div>
            <div className='px-[80px] mt-[15vh] flex justify-between'>
                <div className='w-[40vw]'>
                    <div className='text-[#0474ed] font-[600] text-[1.25rem]'>About us</div>
                    <div className='font-[700] text-[30px]'>Inventory Management at Your Fingertips</div>
                    <div className='text-[rgba(0,0,0,0.57)] w-[35vw]'>Welcome to our innovative medical lab management system, designed to revolutionize how you manage your inventory. Our streamlined solution ensures efficient tracking and ordering, minimizing errors and optimizing stock levels. With a user-friendly interface and robust features, our system guarantees on-time delivery and exceptional quality. Leveraging cutting-edge technologies, we aim to enhance your lab's operational efficiency, allowing you to focus on delivering top-notch healthcare services.</div>
                </div>
                <div className='rounded-[7px] bg-[url(https://livedemo00.template-help.com/wt_prod-22407/images/services-1-570x368.jpg)] w-[40vw] h-[50vh] bg-cover'></div>
            </div>
            <div className='bg-[url(https://templates.templatedri.com/medical/img/bg-img.svg)] bg-cover w-[100%] h-[60vh] mt-[15vh]'>
                <div className='flex justify-between px-[80px] py-[20px]'>
                    <div className='w-[40vw]'>
                        <div className='text-[#0474ed] font-[600] text-[1.25rem]'>We are available 24/7</div>
                        <div className='text-[#fff] font-[700] text-[40px] mt-[30px]'>We're Always Prepared to </div>
                        <div className='text-[#fff] font-[700] text-[40px]'>Take on Any Challenge</div>
                        <Button type="primary" className="login-form-button w-[30%] h-[13%] mt-[15px] text-[14px] font-[500]" onClick={() => navigate("/purchase")}>
                            BUY NOW
                        </Button>
                    </div>
                    <div className='flex items-center gap-[5vw] w-[50vw] mt-[6vh]'>
                        <div className='bg-[#fff] rounded-[7px] w-[35%] h-[40vh] p-[15px]'>
                            <div className='text-[#0474ed] font-[700] text-[40px] text-center'>1M+</div>
                            <div className='text-[20px] font-[600]'><SmileTwoTone className='mr-[10px]' />Happy Clients</div>
                            <div className='text-[rgba(0,0,0,0.57)]'>Their satisfaction and well-being are the ultimate testament to our commitment to excellence in healthcare.</div>
                        </div>
                        <div className='bg-[#fff] rounded-[7px] w-[35%] h-[40vh] p-[15px]'>
                            <div className='text-[#0474ed] font-[700] text-[40px] text-center'>20+</div>
                            <div className='text-[20px] font-[600]'><TrophyTwoTone className='mr-[10px]' />National Awards</div>
                            <div className='text-[rgba(0,0,0,0.57)]'>Their satisfaction and well-being are the ultimate testament to our commitment to excellence in healthcare.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-[10vh]'>
                <Carousel autoplay className="custom-carousel">
                    <div>
                        <div style={contentStyle}>
                            <div className='text-[#0474ed] font-[600] text-[1.25rem] px-[80px] mb-[30px]'>Testimonials</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[24px] font-[500]'><MessageFilled className='mr-[10px]' />Kelly McMillan</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[17px]'>Regular Client</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[14px] w-[40vw]'>
                                I greatly appreciate the communication on the process, what I needed to do in terms of providing samples, what to expect. Scientar provided what I needed in terms of research.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <div className='text-[#0474ed] font-[600] text-[1.25rem] px-[80px] mb-[30px]'>Testimonials</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[24px] font-[500]'><MessageFilled className='mr-[10px]' />Kelly McMillan</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[17px]'>Regular Client</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[14px] w-[40vw]'>
                                I greatly appreciate the communication on the process, what I needed to do in terms of providing samples, what to expect. Scientar provided what I needed in terms of research.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <div className='text-[#0474ed] font-[600] text-[1.25rem] px-[80px] mb-[30px]'>Testimonials</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[24px] font-[500]'><MessageFilled className='mr-[10px]' />Kelly McMillan</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[17px]'>Regular Client</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[14px] w-[40vw]'>
                                I greatly appreciate the communication on the process, what I needed to do in terms of providing samples, what to expect. Scientar provided what I needed in terms of research.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <div className='text-[#0474ed] font-[600] text-[1.25rem] px-[80px] mb-[30px]'>Testimonials</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[24px] font-[500]'><MessageFilled className='mr-[10px]' />Kelly McMillan</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[17px]'>Regular Client</div>
                            <div className='text-[rgba(0,0,0,0.57)] text-[14px] w-[40vw]'>
                                I greatly appreciate the communication on the process, what I needed to do in terms of providing samples, what to expect. Scientar provided what I needed in terms of research.
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className='flex flex-col px-[80px] mb-[10vh]'>
                <div className='text-[#0474ed] font-[600] text-[1.25rem] mb-[10px]'>Frequently Asked Questions</div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}

export default Home