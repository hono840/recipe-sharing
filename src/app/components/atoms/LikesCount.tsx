import React, { PropsWithChildren } from "react";

type Props = {
  likesCount: number;
};

const LikesCount = ({ likesCount }: PropsWithChildren<Props>) => {
  return <span className="text-yellow-300">❤️ {likesCount}</span>;
};

export default LikesCount;
