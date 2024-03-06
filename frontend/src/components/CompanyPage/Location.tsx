'use client';

 import { IconMapPin } from "../Icons";

const CompanyLocation = () => {
    return (
        <div className="bg-white rounded-lg px-[20px] pt-[24px] pb-[32px] mb-[20px] md:p-[24px] md:pb-[32px]" style={{boxShadow: "0px 6px 32px rgba(0,0,0,.08)"}}>
            {/* Header */}
            <h2 className="border-bottom-dashed pb-[16px]"> Location </h2>

            {/* Paragraph */}
            <div className="flex flex-wrap flex-col-reverse	md:flex-row">         
                <div className="col-md-4 locations pr-[8px]">
                    <h3 className="pb-[12px]">Ho Chi Minh</h3>
                    <div className="location box-shadow-normal rounded cursor-pointer p-3 mb-3 active">
                        <div className="flex gap-[8px]">
                            <span className="map-pin pt-1">
                                <IconMapPin width={16} height={16}/>
                            </span>
                            <span className="text-break">
                                E. Town Central, 11 Doan Van Bo Street, District 4, Ho Chi Minh
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 mb-[24px] md:mb-0 pl-[8px]">
                    <div className="w-full h-full">
                    {/* <iframe allowFullScreen={true} className="google-map border-radius-large" data-employers--location-target="map" frameborder="0" height="100%" style={{border: "0"}} width="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAMccvlWFDk8E9b5Bk6YdPh1ZUht-JPcqU&amp;q=E.+Town+Central%2C+11+Doan+Van+Bo+Street%2C+District+4%2C+Ho+Chi+Minh"></iframe> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.219566021501!2d106.702942!3d10.764527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc41537915f%3A0x4658c1848d54bfe8!2sWeWork%20E.%20Town%20Central!5e0!3m2!1sen!2sus!4v1709530307431!5m2!1sen!2sus"
                        className="w-full h-full rounded-lg"
                        style={{border: "0"}}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >                        
                    </iframe>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CompanyLocation;