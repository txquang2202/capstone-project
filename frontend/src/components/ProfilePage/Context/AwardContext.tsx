import { useQuery } from '@apollo/client';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { GET_AWARD_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';

interface AwardData {
  awardName: string;
  awardOrg: string;
  awardMonth: string;
  awardYear: string;
  awardDesc: string;
}

interface AwardDataContextType {
  dataAward: AwardData;
  setDataAward: React.Dispatch<React.SetStateAction<AwardData>>;
  onSave: (data: AwardData) => void;
}

const AwardDataContext = createContext<AwardDataContextType | undefined>(
  undefined
);

export const useAwardData = () => {
  const context = useContext(AwardDataContext);
  if (!context) {
    throw new Error('useAwardData must be used within an AwardDataProvider');
  }
  return context;
};

interface AwardDataProviderProps {
  children?: ReactNode;
}

export const AwardDataProvider: React.FC<AwardDataProviderProps> = ({
  children,
}) => {
  const { authUser } = useAuthData();
  const { loading, error, data } = useQuery(GET_AWARD_USER, {
    variables: { userId: authUser?.id },
  });

  const [dataAward, setDataAward] = useState<AwardData>({
    awardName: '',
    awardOrg: '',
    awardMonth: '',
    awardYear: '',
    awardDesc: '',
  });

  useEffect(() => {
    if (!loading && !error && data) {
      const awardData = data?.user?.attributes;

      const initData: AwardData = {
        awardName: awardData?.awardName ?? '',
        awardOrg: awardData?.awardOrg ?? '',
        awardMonth: awardData?.awardMonth ?? '',
        awardYear: awardData?.awardYear ?? '',
        awardDesc: awardData?.awardDesc ?? '',
      };

      setDataAward(initData);
    }
  }, [loading, error, data]);

  const onSave = (data: AwardData) => {
    setDataAward(data);
  };

  return (
    <AwardDataContext.Provider value={{ dataAward, setDataAward, onSave }}>
      {children}
    </AwardDataContext.Provider>
  );
};
