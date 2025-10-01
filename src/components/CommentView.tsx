import { FC, memo } from "react";

interface Props {
  comments: any[];
}

const CommentView: FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      {comments?.map((item: any) => (
        <div className="border border-gray-200 rounded-xl p-4" key={item.id}>
          <div className="bg-gray-200 h-36 rounded-xl mb-4"></div>
          <div>
            <h3 className="font-bold text-xl">{item.text}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(CommentView);
