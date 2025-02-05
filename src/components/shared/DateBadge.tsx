import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function DateBadge({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={twMerge(
        'flex h-6 items-center justify-center rounded-[4px] bg-primary-10 px-2 py-0.5 text-sm font-medium text-white',
        className,
      )}
    >
      {children}
    </div>
  );
}
