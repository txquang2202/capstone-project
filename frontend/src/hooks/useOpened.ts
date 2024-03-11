import { useCallback, useState } from 'react';

const useOpened = (
  defaultState?: boolean
): [opened: boolean, { onClose: () => void; onOpen: () => void }] => {
  const [opened, setOpened] = useState(defaultState || false);

  const onClose = useCallback(() => {
    setOpened(false);
  }, []);

  const onOpen = useCallback(() => {
    setOpened(true);
  }, []);

  return [opened, { onClose, onOpen }];
};

export default useOpened;
