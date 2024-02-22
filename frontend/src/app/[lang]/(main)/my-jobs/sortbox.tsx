/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

type Props = {
  options: string[];
  jobs: any[]; // Assuming jobs array is passed from parent component
  setSortedJobs: React.Dispatch<React.SetStateAction<any[]>>; // Function to set sorted jobs in parent component
};

const ComboBox = ({ options, jobs, setSortedJobs }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    sortJobs(newValue); // Sort jobs based on selected option
  };

  const sortJobs = (sortBy: string) => {
    const sortedJobs = [...jobs].sort((a, b) => {
      if (
        sortBy === 'Nearest expiration time' ||
        sortBy === 'About to expire'
      ) {
        return a.expires - b.expires;
      } else if (sortBy === 'Newest job') {
        return a.postedAgo - b.postedAgo;
      } else if (sortBy === 'Lasted posting') {
        return b.postedAgo - a.postedAgo;
      }
      return 0;
    });
    setSortedJobs(sortedJobs);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleChange}
      className='w-64 cursor-pointer appearance-none rounded py-2 pl-3 pr-8 focus:border-red-200 focus:outline-none focus:ring-red-200'
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ComboBox;
