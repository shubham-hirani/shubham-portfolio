const GmailIcon = ({ className = "h-5 w-5" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gmail-style envelope */}
      <path
        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M22 6L12 13L2 6V18L12 11L22 18V6Z"
        fill="white"
      />
      <path
        d="M2 6L12 13L22 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GmailIcon;
