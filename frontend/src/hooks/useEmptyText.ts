import { ContentState, convertFromHTML } from 'draft-js';

import { isNotEmpty } from '@/lib/validate';

const useEmptyText = () => {
  const isEmptyDraftJs = (rawState: string) => {
    if (!rawState || !isNotEmpty(rawState)) {
      return true;
    }
    const blocksFromHTML = convertFromHTML(rawState);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    return !(contentState.hasText() && contentState.getPlainText() !== '');
  };
  return { isEmptyDraftJs };
};

export default useEmptyText;
