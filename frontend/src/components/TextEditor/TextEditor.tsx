import {
  ContentState,
  convertFromHTML,
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';
import { MouseEvent, useRef, useState } from 'react';

import { cn } from '@/lib/classNames';

import 'draft-js/dist/Draft.css';

import {
  IconBold,
  IconItalic,
  IconList,
  IconType,
  IconUnderline,
} from '../Icons';

const tools = [
  {
    label: 'bold',
    style: 'BOLD',
    icon: <IconBold size={16} />,
    method: 'inline',
  },
  {
    label: 'italic',
    style: 'ITALIC',
    icon: <IconItalic size={16} />,
    method: 'inline',
  },
  {
    label: 'underline',
    style: 'UNDERLINE',
    icon: <IconUnderline size={16} />,
    method: 'inline',
  },
  {
    label: 'Unordered-List',
    style: 'unordered-list-item',
    method: 'block',
    icon: <IconList size={18} />,
  },
  {
    label: 'H2',
    style: 'header-two',
    method: 'block',
    icon: <IconType size={16} />,
  },
  {
    label: 'H3',
    style: 'header-three',
    method: 'block',
    icon: <IconType size={14} />,
  },
];

type Props = {
  placeholder?: string;
  onChange?: (content: string) => void;
  error?: string;
  fref?: string;
};

const TextEditor = ({ placeholder, onChange, error, fref }: Props) => {
  const [editorState, setEditorState] = useState(() => {
    if (fref) {
      const blocksFromHTML = convertFromHTML(fref);
      return EditorState.createWithContent(
        ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        )
      );
    } else {
      return EditorState.createEmpty();
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>();

  const focus = () => {
    editorRef.current?.focus();
  };

  const onToolClick = (
    e: MouseEvent<HTMLDivElement>,
    style: string,
    method: string
  ) => {
    e.preventDefault();
    method === 'block'
      ? setEditorState(RichUtils.toggleBlockType(editorState, style))
      : setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style: string, method: string) => {
    if (method === 'block') {
      const selection = editorState.getSelection();
      const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return blockType === style;
    } else {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
    }
  };

  const handleChange = (editorState: EditorState) => {
    onChange?.(editorRef.current.editorContainer.innerHTML);
    setEditorState(editorState);
  };

  return (
    <>
      <div
        className={cn(
          'it-editor overflow-hidden rounded-lg border border-[rgba(0,0,0,.1)]',
          { 'border-primary': !!error }
        )}
        onClick={focus}
      >
        <div className='bg-light-grey flex items-center gap-2 py-2.5 pl-3.5'>
          {tools.map((tool) => (
            <div
              key={tool.style}
              onMouseDown={(e) => onToolClick(e, tool.style, tool.method)}
              className={cn(
                'flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm',
                {
                  'border-silver-grey border bg-white': isActive(
                    tool.style,
                    tool.method
                  ),
                }
              )}
            >
              {tool.icon}
            </div>
          ))}
        </div>
        <div className='min-h-[200px] list-disc px-4 py-2.5'>
          <Editor
            ref={editorRef}
            placeholder={placeholder}
            editorState={editorState}
            onChange={handleChange}
          />
        </div>
      </div>
      {error && <div className='text-primary mt-1'>{error}</div>}
    </>
  );
};

export default TextEditor;
