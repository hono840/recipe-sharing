import React from "react";

type Props = {
  onClick: () => void;
};

const DeleteButton = ({ onClick }: Props) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded"
      onClick={onClick}
    >
      削除
    </button>
  );
};

export default DeleteButton;
