import { CreateElementType } from "../Canvas";
import { StyledDropzone } from "./FileUploader";

type Props = {
  onAddItem: (args: CreateElementType) => any;
  onRemoveItem: (args: number) => void;
};

const ImageStories = (props: Props) => {
  return (
    <>
      <div className="flex-1 w-[90%] rounded-2xl flex justify-center ">
        <StyledDropzone {...props} />
      </div>
    </>
  );
};

export default ImageStories;
