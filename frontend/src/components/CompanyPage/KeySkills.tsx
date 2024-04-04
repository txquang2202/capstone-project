'use client';

const CompanyKeySkill = () => {
  return (
    <div
      className='mb-[20px] rounded-lg bg-white px-[20px] pb-[32px] pt-[24px] md:p-[24px] md:pb-[32px]'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      {/* Header */}
      <h2 className='border-bottom-dashed pb-[16px]'> Our key skills </h2>

      {/* Paragraph */}
      <div className='paragraph text-break pt-[16px]'>
        <div className='pt-[16px]'>
          The Latest Cloud & Micro Services Technologies
        </div>

        <div className='flex flex-wrap gap-[12px] pt-[16px]'>
          <a className='itag itag-sm itag-light'>NodeJS</a>
          <a className='itag itag-sm itag-light'>ReactJS</a>
          <a className='itag itag-sm itag-light'>Java</a>
          <a className='itag itag-sm itag-light'>Agile</a>
          <a className='itag itag-sm itag-light'>DevOps</a>
          <a className='itag itag-sm itag-light'>Cloud</a>
        </div>

        <div className='pt-[16px]'>
          <p>
            <strong>Languages &amp; Frameworks</strong>
          </p>
          <p>
            JavaScript ES6, TypeScript, Node.js, React - Redux, Java, Spring
            Boot, Serverless, .NET
          </p>
          <p>
            <strong>Cloud Services - AWS, Azure</strong>
          </p>
          <p>
            Lambda, Postgres, S3, API Gateway, CLI, SNS/SQS, EC2, ECS, Cloud
            Watch, Splunk, SignalFX, AppDynamics
          </p>
          <p>
            <strong>DevOps</strong>
          </p>
          <p>
            Jenkins, Artifactory, SonarQube, GitHub, CloudFormation, Kubernetes,
            CHEF, Hashicorp Sentinel, Packer, Terraform, Harshicorp Vault, KONG
            gateway, Venafi
          </p>
          <p>
            <strong>Collaboration</strong>
          </p>
          <p>
            Microsoft Outlook, JIRA, Confluence, Microsoft Teams, ServiceNow,
            Rally
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyKeySkill;
