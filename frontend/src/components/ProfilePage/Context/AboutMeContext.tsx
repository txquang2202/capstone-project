import { useQuery } from '@apollo/client';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { GET_ABOUTME_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';

// interface AboutMeData {
//   content: string;
// }

interface AboutMeDataContextType {
  textEditorContent: string;
  setTextEditorContent: React.Dispatch<React.SetStateAction<string>>;
  onSave: (data: string) => void;
}

const AboutMeDataContext = createContext<AboutMeDataContextType | undefined>(
  undefined
);

export const useAboutMeData = () => {
  const context = useContext(AboutMeDataContext);
  if (!context) {
    throw new Error(
      'useAboutMeData must be used within an AboutMeDataProvider'
    );
  }
  return context;
};

interface AboutMeDataProviderProps {
  children?: ReactNode;
}

export const AboutMeDataProvider: React.FC<AboutMeDataProviderProps> = ({
  children,
}) => {
  const { authUser } = useAuthData();
  const { loading, error, data } = useQuery(GET_ABOUTME_USER, {
    variables: { userId: authUser?.id },
  });
  const [textEditorContent, setTextEditorContent] = useState('');

  useEffect(() => {
    if (!loading && !error && data) {
      const aboutMe = data?.user?.attributes?.aboutMe;
      if (aboutMe !== null && aboutMe !== undefined) {
        setTextEditorContent(String(aboutMe));
      }
    }
  }, [loading, error, data]);

  const onSave = (content: string) => {
    setTextEditorContent(content);
  };

  return (
    <AboutMeDataContext.Provider
      value={{ textEditorContent, setTextEditorContent, onSave }}
    >
      {children}
    </AboutMeDataContext.Provider>
  );
};
