// import React, { useState } from 'react';

// import { IconFilter } from '@/components/Icons';
// import { GET_JOBS_APPLIED } from '@/graphql/jobs-applied';
// import { getClient } from '@/lib/client';
// import { useLocale } from '@/locale';

// import JobAppliedDetails from './JobAppliedDetails';
// import JobAppliedItem from './JobAppliedItem';

// interface Job {
//   title: string;
//   imageUrl: string;
//   applicantName: string;
//   applicantEmail: string;
//   applicationDate: string;
//   description: string;
//   status: string;
//   content: string;
// }

// export default function ApplicantManagement({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const [selectedJob, setSelectedJob] = useState<Job | null>(appliedJobs[0]);
//   const [filterStatus, setFilterStatus] = useState<string | null>(null);
//   const { t } = useLocale();
//   const id = params.id;

//   if (!id) {
//     return null;
//   }

//   // const {
//   //   data: { companyJobApplications },
//   // } = await getClient().query({
//   //   query: GET_JOBS_APPLIED,
//   //   variables: {
//   //     id: parseInt(id),
//   //   },
//   // });
//   // console.log(companyJobApplications);
//   const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setFilterStatus(event.target.value === 'all' ? null : event.target.value);
//   };

//   const filteredJobs = filterStatus
//     ? appliedJobs.filter((job) => job.status === filterStatus)
//     : appliedJobs;

//   const handleJobSelect = (job: Job) => {
//     setSelectedJob(job);
//   };

//   return (
//     <div className='container-xxl grid  grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
//       {/* left */}
//       <div className='col-span-2 rounded-md border border-gray-200 bg-white shadow-sm md:col-span-2 lg:col-span-1'>
//         {/* header */}
//         <div className='container-xxl bg-red rounded-t-md px-6 py-3'>
//           <div className='flex flex-row flex-wrap items-center justify-between'>
//             <p className='text-[16px] font-[600] text-white'>
//               {t('You have')} {appliedJobs.length} {t('application forms')}
//             </p>
//             <div className='hover:bg-light-red relative  rounded-full p-2 '>
//               <IconFilter className=' h-4  w-4 text-white' />
//               <select
//                 className='absolute inset-0 cursor-pointer opacity-0'
//                 onChange={handleFilterChange}
//               >
//                 <option value='all'>All</option>
//                 <option value='Hired'>Hired</option>
//                 <option value='Submitting'>Submitting</option>
//                 <option value='Interviewing'>Interviewing</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <hr className=' h-[1px] w-full border-none bg-gray-200' />
//         <div className='h-[700px] overflow-y-auto'>
//           {filteredJobs.map((job, index) => (
//             <JobAppliedItem
//               key={index}
//               title={job.title}
//               imageUrl={job.imageUrl}
//               timePosted={job.applicationDate}
//               description={job.description}
//               status={job.status}
//               onSelect={() => handleJobSelect(job)}
//               isSelected={selectedJob === job}
//             />
//           ))}
//         </div>
//       </div>

//       {/* right */}
//       <div className='col-span-1  md:col-span-2 lg:col-span-2'>
//         {selectedJob && (
//           <JobAppliedDetails
//             title={selectedJob.title}
//             imageUrl={selectedJob.imageUrl}
//             applicantName={selectedJob.applicantName}
//             applicantEmail={selectedJob.applicantEmail}
//             applicationDate={selectedJob.applicationDate}
//             status={selectedJob.status}
//             coverLetter={selectedJob.description}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// const appliedJobs: Job[] = [
//   {
//     title: 'Senior Java Developer (Spring Boot,JavaEE,Good English)',
//     imageUrl:
//       'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--89a7283b6fdfb4208cdc2b440a36613a6fae974c/logo.jpg',
//     applicationDate: '2024-01-27',
//     applicantName: 'Hồ Quốc Duy',
//     applicantEmail: 'duyhq47@gmail.com',
//     description:
//       "I'm writing to apply for the Software Engineer position at XYZ Company. With 5 years of experience in software development, I'm confident I can contribute effectively to your teamI'm writing to apply for the Software Engineer position at XYZ Company.",
//     status: 'Hired',
//     content: '',
//   },
//   {
//     title: 'Backend Developer (Node.js, Express)',
//     imageUrl:
//       'https://plus.unsplash.com/premium_photo-1682216872195-0bfacc36b02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     applicationDate: '2024-01-27',
//     applicantName: 'John Doe',
//     applicantEmail: 'john.doe@example.com',
//     description:
//       "I'm applying for the Backend Developer position. I have 3 years of experience in Node.js and Express development.",
//     status: 'Submitting',
//     content: '',
//   },
//   {
//     title: 'Frontend Developer (React.js, TypeScript)',
//     imageUrl:
//       'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     applicationDate: '2024-01-27',
//     applicantName: 'Jane Smith',
//     applicantEmail: 'jane.smith@example.com',
//     description:
//       "I'm applying for the Frontend Developer position. I have 2 years of experience in React.js and TypeScript development.",
//     status: 'Interviewing',
//     content: '',
//   },
//   {
//     title: 'Full Stack Developer (MERN Stack)',
//     imageUrl:
//       'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     applicationDate: '2024-01-27',
//     applicantName: 'Michael Johnson',
//     applicantEmail: 'michael.johnson@example.com',
//     description:
//       "I'm applying for the Full Stack Developer position. I have experience in developing with the MERN stack for 4 years.",
//     status: 'Hired',
//     content: '',
//   },
//   {
//     title: 'Senior Java Developer (Spring Boot,JavaEE,Good English)',
//     imageUrl:
//       'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--89a7283b6fdfb4208cdc2b440a36613a6fae974c/logo.jpg',
//     applicationDate: '2024-01-27',
//     applicantName: 'Hồ Quốc Duy',
//     applicantEmail: 'duyhq47@gmail.com',
//     description:
//       "I'm writing to apply for the Software Engineer position at XYZ Company. With 5 years of experience in software development, I'm confident I can contribute effectively to your team",
//     status: 'Hired',
//     content: '',
//   },
//   {
//     title: 'Senior Java Developer (Spring Boot,JavaEE,Good English)',
//     imageUrl:
//       'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--89a7283b6fdfb4208cdc2b440a36613a6fae974c/logo.jpg',
//     applicationDate: '2024-01-27',
//     applicantName: 'Hồ Quốc Duy3',
//     applicantEmail: 'duyhq47@gmail.com',
//     description:
//       "I'm writing to apply for the Software Engineer position at XYZ Company. With 5 years of experience in software development, I'm confident I can contribute effectively to your team",
//     status: 'Hired',
//     content: '',
//   },

//   // Add other jobs here
// ];

// // export default ApplicantManagement;
