'use client';

import { IconGlobe, IconFacebook } from "../Icons";

const CompanyOverview = () => {
    return (
        <div className="bg-white rounded-lg px-[20px] pt-[24px] pb-[32px] mb-[20px] md:p-[24px] md:pb-[32px]" style={{boxShadow: "0px 6px 32px rgba(0,0,0,.08)"}}>
            {/* Header */}
            <h2 className="border-bottom-dashed pb-[16px]"> Company overview </h2>

            {/* Paragraph */}
            <div className="paragraph pt-[16px] text-break">         
                The NAB Innovation Centre Vietnam is owned by NAB - Australia’s largest business bank.
                <p>
                    The NAB Innovation Centre Vietnam (NAB Vietnam) is part of National Australia Bank (NAB) Technology & Enterprise Operations division. 
                    The mission of the NAB Vietnam is to connect the talents of Vietnam to NAB and together improve the lives of those in the Vietnam technology community.
                </p>
                <p>
                    As Australia’s largest business bank, NAB is focused on delivering great experiences for customers. 
                    To do this it uses modern technologies, alongside great technology talent including leading software engineers, cloud experts and quality engineers.
                </p>
                <p>
                    <strong>We’re working on interesting projects to help NAB’s 8 million customers:</strong>
                    By joining us, local software engineers will have access to a wide variety of projects and opportunities, 
                    working closely with colleagues in Australia and with global partners such as AWS and Microsoft to take advantage of the latest modern technologies.
                </p>
                <p>
                    <strong>We’re investing in you:</strong> We strive&nbsp;to create not only a great place to work, but also the best technology centre for tech engineers to thrive.
                </p>
                <p>
                    <strong>It’s more than just a career!</strong>
                </p>
                <p>
                We believe in people with ideas and dreams, and we want you to achieve your aspirations. If you have an appetite to learn, grow and elevate others around you, 
                this is the place for you!
                </p>
            </div>

            {/* Icon */}
            <div className="flex flex-col md:flex-row paragraph border-top-dashed mt-[16px]">
                <div className="flex items-center cursor-pointer pt-[16px] pr-[16px]">
                    <IconGlobe width={20} height={20} color="#0e2eed"/>
                    <div className="pl-[4px] hyperlink">Company website</div>
                </div>
                <div className="flex items-center cursor-pointer pt-[16px] pr-[16px]">
                    <IconFacebook width={20} height={20} color="#0e2eed"/>
                    <div className="pl-[4px] hyperlink">Fanpage Facebook</div>
                </div>
            </div>
        </div>
        
    )
}

export default CompanyOverview;