import { Modal } from '@mantine/core';

import { Button } from '../Button';

type Props = {
  opened: boolean;
  onClose: () => void;
  onBack: () => void;
};

const CancelApply = ({ opened, onClose, onBack }: Props) => {
  return (
    <Modal
      centered
      size='lg'
      opened={opened}
      onClose={onClose}
      title='Quit applying'
      classNames={{ title: 'text-xl font-bold', content: 'p-4' }}
    >
      <div className='text-rich-grey mb-8 mt-3'>
        Changes you made so far will not be saved. Are you sure you want to quit
        this page?
      </div>
      <div className='flex justify-end gap-4'>
        <Button
          onClick={onClose}
          size='large'
          intent='transparent'
          className='text-rich-grey hover:bg-light-grey'
        >
          Continue applying
        </Button>
        <Button onClick={onBack} size='large'>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default CancelApply;
