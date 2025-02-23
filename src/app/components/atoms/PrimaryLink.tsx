import React, { PropsWithChildren } from "react";

type Props = {
  href: string;
};

const PrimaryLink = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <a
      href={href}
      className="mt-4 p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
    >
      {children}
    </a>
  );
};

export default PrimaryLink;
