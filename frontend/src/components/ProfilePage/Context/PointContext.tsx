import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface PointDataContextType {
  sumData: number;
  setPdata: React.Dispatch<React.SetStateAction<number>>;
  setAdata: React.Dispatch<React.SetStateAction<number>>;
  setEdata: React.Dispatch<React.SetStateAction<number>>;
  setAwData: React.Dispatch<React.SetStateAction<number>>;
}

const PointDataContext = createContext<PointDataContextType | undefined>(
  undefined
);

export const usePointData = () => {
  const context = useContext(PointDataContext);
  if (!context) {
    throw new Error('usePointData must be used within an PointDataProvider');
  }
  return context;
};

interface PointDataProviderProps {
  children?: ReactNode;
}

export const PointDataProvider: React.FC<PointDataProviderProps> = ({
  children,
}) => {
  const [sumData, setSumData] = useState(0);
  const [pData, setPdata] = useState(0);
  const [aData, setAdata] = useState(0);
  const [eData, setEdata] = useState(0);
  const [awData, setAwData] = useState(0);

  useEffect(() => {
    const sum = pData + aData + eData + awData;
    setSumData(sum);
  }, [pData, aData, eData, awData]);

  return (
    <PointDataContext.Provider
      value={{
        sumData,
        setPdata,
        setAdata,
        setEdata,
        setAwData,
      }}
    >
      {children}
    </PointDataContext.Provider>
  );
};
