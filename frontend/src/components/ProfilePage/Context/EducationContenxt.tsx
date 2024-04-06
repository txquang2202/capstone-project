import { useQuery } from '@apollo/client';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { GET_EDUCATION_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';

interface EducationData {
  school: string;
  major: string;
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  details: string;
}

interface EducationDataContextType {
  dataEdu: EducationData;
  setDataEdu: React.Dispatch<React.SetStateAction<EducationData>>;
  onSave: (data: EducationData) => void;
}

const EducationDataContext = createContext<
  EducationDataContextType | undefined
>(undefined);

export const useEducationData = () => {
  const context = useContext(EducationDataContext);
  if (!context) {
    throw new Error(
      'useEducationData must be used within an EducationDataProvider'
    );
  }
  return context;
};

interface EducationDataProviderProps {
  children?: ReactNode;
}

export const EducationDataProvider: React.FC<EducationDataProviderProps> = ({
  children,
}) => {
  const { authUser } = useAuthData();
  const { loading, error, data } = useQuery(GET_EDUCATION_USER, {
    variables: { userId: authUser?.id },
  });

  // Provide initial state that matches EducationData structure
  const initialData: EducationData = {
    school: '',
    major: '',
    fromMonth: '',
    fromYear: '',
    toMonth: '',
    toYear: '',
    details: '',
  };

  const [dataEdu, setDataEdu] = useState<EducationData>(initialData);

  useEffect(() => {
    if (!loading && !error && data) {
      const eduData = data?.user?.attributes;

      const initData: EducationData = {
        school: eduData?.school ?? '',
        major: eduData?.major ?? '',
        fromMonth: eduData?.fromMonth ?? '',
        fromYear: eduData?.fromYear ?? '',
        toMonth: eduData?.toMonth ?? '',
        toYear: eduData?.toYear ?? '',
        details: eduData?.details ?? '',
      };

      setDataEdu(initData);
    }
  }, [loading, error, data]);

  const onSave = (data: EducationData) => {
    setDataEdu(data);
  };

  return (
    <EducationDataContext.Provider value={{ dataEdu, setDataEdu, onSave }}>
      {children}
    </EducationDataContext.Provider>
  );
};
