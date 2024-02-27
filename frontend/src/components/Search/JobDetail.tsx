import dayjs from '@/lib/dayjs';

import { AppLink } from '../AppLink';
import { Button } from '../Button';
import {
  IconClock,
  IconExternalLink,
  IconHeart,
  IconMapPin,
  IconRemote,
  IconSalary,
} from '../Icons';
import { JOB_TYPE_TEXT } from './JobItem';

type Props = {
  title: string;
  image: string;
  type: number;
  locations: string[];
  salaryTo: number;
  salaryFrom: number;
  hideSalary?: boolean;
  company: string;
  tags: string[];
  postedAt: Date;
  unit: string;
  address: string;
};

const JobDetail = ({
  title,
  image,
  type,
  locations,
  salaryFrom,
  salaryTo,
  hideSalary,
  company,
  tags,
  postedAt,
  address,
  unit,
}: Props) => {
  return (
    <div className='rounded-lg bg-white'>
      <div className='border-silver-grey mx-6 border-b pb-2 pt-6'>
        <div className='flex items-center gap-4'>
          <img
            alt='logo'
            src={image}
            className='border-silver-grey h-[100px] w-[100px] rounded border'
          />
          <div className='flex flex-col justify-center gap-2'>
            <div className='text-[22px] font-bold'>{title}</div>
            <div className='text-rich-grey'>{company}</div>
            <div className='text-success-color flex items-center gap-2 font-medium'>
              <IconSalary />
              {hideSalary
                ? "You'll love it"
                : `${salaryFrom} - ${salaryTo} ${unit}`}
            </div>
          </div>
        </div>
        <div className='my-4 flex items-center gap-4'>
          <Button size='medium' className='flex-1'>
            Apply
          </Button>
          <IconHeart color='var(--primary)' size={32} />
        </div>
      </div>
      <div className='h-[calc(100vh-300px)] overflow-y-scroll p-6'>
        <div className='text-rich-grey flex flex-col gap-2 text-sm'>
          <div className='flex items-center gap-1'>
            <IconMapPin size={16} color='var(--dark-grey' />
            {address}
          </div>
          <div className='flex items-center gap-1'>
            <IconRemote size={16} viewBox='0 0 24 25' color='var(--dark-grey' />
            {JOB_TYPE_TEXT[type]}
          </div>
          <div className='flex items-center gap-1'>
            <IconClock size={16} color='var(--dark-grey' />
            {dayjs(postedAt).fromNow()}
          </div>
          <div className='flex items-center gap-1'>
            <span className='mr-3'>Skills:</span>
            {tags.map((tag) => (
              <div className='itag itag-light itag-sm'>{tag}</div>
            ))}
          </div>
        </div>
        <div className='border-silver-grey my-6 border-b border-dashed'></div>
        <div className='text-[#121212]'>
          <div className='mb-4 text-[22px] font-bold'>
            Top 3 reasons to join us
          </div>
          <ul className='list-disc'>
            <li className='py-1'>Attractive benefits</li>
            <li className='py-1'>Hybrid working concept</li>
            <li className='py-1'>
              Strong & long career-path development in business
            </li>
          </ul>
          <div className='border-silver-grey my-6 border-b border-dashed'></div>
          <div className='mb-4 text-[22px] font-bold'>Job description</div>
          <div>
            As Java Software Engineer, you will be a part of international
            software development team to:
          </div>
          <ul className='list-disc'>
            <li className='py-1'>
              Contributing to the realization/customization of our software
              product to meet customer needs in the area of automated warehouse
              and distribution solutions. (Robotic, Automation warehouse,
              intralogistics processes, telegram communication)
            </li>
            <li className='py-1'>
              Creating design and implementation of customer specific extensions
              and modifications for Software affecting back office processes,
              SQL database access, ERP system interaction, automation subsystem
              interaction and operator user interfaces.
            </li>
            <li className='py-1'>
              Responsible for unit testing and system test to ensure quality.
            </li>
            <li className='py-1'>
              Play contact-point for project stakeholders on technical &
              business questions/issues.
            </li>
          </ul>
          <div className='border-silver-grey my-6 border-b border-dashed'></div>
          <div className='mb-4 text-[22px] font-bold'>
            Your skills and experience
          </div>
          <ul className='list-disc'>
            <li className='py-1'>
              At least 2+ years of experience in Java development: Java EE (EJB,
              JPA, JMS, and JSF with PrimeFaces), Java SE, or another JVM
              language.
            </li>
            <li className='py-1'>Ability to communicate in English</li>
            <li className='py-1'>
              Good understanding of OOP, Design Patterns, Oracle PL/SQL or SQL
              Server.
            </li>
            <li className='py-1'>
              Experience in unit testing: JUnit, Mockito, Selenium.
            </li>
          </ul>
          <div className='my-1 font-bold italic'>Working Domains</div>
          <ul className='list-disc'>
            <li className='py-1'>
              Technology: SQL, JEE, Java, Robotics/hardware communication
            </li>
            <li className='py-1'>Business domain: Intralogistics,</li>
          </ul>
          <div className='font-bold italic'>
            All interviews are preferred to be done in English.
          </div>
          <div className='border-silver-grey my-6 border-b border-dashed'></div>
          <div className='mb-4 text-[22px] font-bold'>
            Why you'll love working here
          </div>
          <div>
            Swisslog offers challenging work in a globally networked environment
            as well as competitive salary and social benefits. At Swisslog,
            every employee is valued and plays an important role in achieving
            our vision and goals. Everything we do revolves around our corporate
            values of competence, collaboration, commitment and clarity. To
            shape a successful future, we promote a culture of passion and
            innovation, and offer an environment where your talent can be
            nurtured.
          </div>
          <div className='my-1 font-bold italic'>Your Benefits</div>
          <ul className='list-disc'>
            <li className='py-1'>
              100% Salary payment during probation period
            </li>
            <li className='py-1'>Bonus: 13th month salary</li>
            <li className='py-1'>Bonus: 14th month salary</li>
            <li className='py-1'>Working onsite to abroad countries</li>
            <li className='py-1'>Working hybrid with 3 days in the office</li>
            <li className='py-1'>Flexible working time;</li>
            <li className='py-1'>
              20 days of annual leave and fully paid sick leave
            </li>
          </ul>
          <div className='border-silver-grey mt-6 border-t pt-6'>
            <div className='mb-2 flex items-center justify-between'>
              <div className='text-[22px] font-bold'>Swisslog Vietnam</div>
              <AppLink
                href='/'
                className='text-hyperlink flex items-center gap-1'
              >
                View company
                <IconExternalLink size={16} />
              </AppLink>
            </div>
            <div className='text-rich-text mb-4 text-sm'>
              Teamwork are Swisslog core values. Are you ready to shape your
              future?
            </div>
            <div className='gap -mx-3 flex flex-wrap gap-y-4'>
              <div className='w-1/3 px-3'>
                <div className='text-dark-grey text-sm'>Company type</div>
                <div>IT Product</div>
              </div>
              <div className='w-1/3 px-3'>
                <div className='text-dark-grey text-sm'>Company size</div>
                <div>1-50</div>
              </div>
              <div className='w-1/3 px-3'>
                <div className='text-dark-grey text-sm'>Country</div>
                <div>Vietnam</div>
              </div>
              <div className='w-1/3 px-3'>
                <div className='text-dark-grey text-sm'>Working days</div>
                <div>Monday - Friday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
