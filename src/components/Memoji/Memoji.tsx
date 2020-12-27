import { FunctionComponent } from 'preact';

export interface MemojiProps {
  className?: string;
}

export const Memoji: FunctionComponent<MemojiProps> = ({ className }) => (
  <div
    className={className}
    style={{ width: 68, height: 80, backgroundColor: 'red' }}
    role="presentation"
  />
);
