import clsx from 'clsx'

export function Logo({ className }) {
  return (
    <>
      <svg
        focusable="false"
        viewBox="0 0 76 24"
        aria-hidden="false"
        role="img"
        className={clsx("", className)}
      >
        <title>IGN Logo</title>
        <path
          fill="currentColor"
          stroke="none"
          d="M5.38 7.65a7.85 7.85 0 0 1 2.26-2.26c.13-1.18.31-2.26.52-3.21a10.605 10.605 0 0 0-6 6c.95-.22 2.03-.39 3.21-.52M16.34 5.36v.02c.9.59 1.67 1.37 2.27 2.27 1.18.13 2.26.31 3.21.52a10.627 10.627 0 0 0-6.02-6.01c.22.95.4 2.02.54 3.2M7.64 18.62c-.9-.59-1.67-1.37-2.27-2.27h-.03c-1.19-.14-2.26-.32-3.19-.54 1.07 2.75 3.26 4.95 6.01 6.02-.22-.95-.39-2.03-.52-3.21M18.64 16.35h-.03c-.59.9-1.37 1.67-2.27 2.27v.03c-.14 1.17-.32 2.25-.54 3.19a10.59 10.59 0 0 0 6.03-6.03c-.94.22-2 .4-3.19.54M10.04 0h3.9c.85 1.85 1.2 4.59 1.3 5.52.04.22.06.43.06.63L12 9.11 8.7 6.15c0-.17.02-.35.05-.55.1-.95.43-3.75 1.29-5.61M8.7 17.83c0 .17.02.35.05.55.1.95.43 3.75 1.29 5.61h3.9c.85-1.84 1.2-4.59 1.3-5.52.04-.22.06-.43.06-.64L12 14.87l-3.3 2.96ZM6.16 8.68c-.17 0-.35.02-.55.05-.95.12-3.75.45-5.61 1.31v3.9c1.84.85 4.59 1.19 5.52 1.3.22.04.43.06.64.06L9.11 12 6.16 8.7ZM24 10.02c-1.86-.86-4.66-1.19-5.61-1.29-.2-.03-.38-.05-.55-.05l-2.96 3.3 2.96 3.3c.2 0 .41-.02.64-.06.93-.11 3.68-.45 5.52-1.3v-3.9Z"
        ></path>
        <path
          fill="currentColor"
          stroke="none"
          d="M42.83 13.9V10h10.45c1.06 0 1.93.86 1.93 1.92v4.63c0 2.38-1.91 4.36-4.33 4.36h-6.69c-4.96 0-8.97-4-8.97-8.94s4.04-8.95 8.98-8.95h10.36v4.11H44.2c-2.67 0-4.86 2.17-4.86 4.84s2.16 4.83 4.86 4.83h6.91v-2.91h-8.27ZM33.86 3h-4.07v16.02c0 1.05.86 1.91 1.91 1.91h2.15V3M74.37 3.01h-2.18v13.81s0 .08-.03.11a.29.29 0 0 1-.24.14c-.09 0-.16-.04-.25-.15L64.83 4.93a4.347 4.347 0 0 0-3.72-2.11h-.07c-2.39 0-4.32 1.93-4.32 4.32v11.88c0 1.05.86 1.91 1.91 1.91h2.17V7.14s.02-.09.04-.13a.29.29 0 0 1 .24-.14c.09 0 .18.03.24.14l6.88 12.07c.76 1.27 2.12 2.05 3.69 2.05h.07c2.39 0 4.32-1.93 4.32-4.32V4.92c0-1.05-.85-1.91-1.91-1.91"
        ></path>
      </svg>
    </>
  );
}