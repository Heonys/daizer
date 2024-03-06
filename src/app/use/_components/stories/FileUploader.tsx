//@ts-nocheck
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CreateElementType, Item } from "../Canvas";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "5px",
  padding: "40px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 250,
  height: 250,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "auto",
};

type Props = {
  onAddItem: (args: CreateElementType) => any;
  onRemoveItem: (args: number) => void;
};

export function StyledDropzone({ onAddItem, onRemoveItem }: Props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    multiple: false,
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Delete") {
      onRemoveItem(index);
    }
  };

  const createElement = (el: Item) => {
    const i = el.i;
    return (
      <div key={i} data-grid={el} className="relative border-0 ">
        <button className="flex justify-center m-4 w-full h-full" onKeyDown={handleKeyDown(i)}>
          <Image
            src={URL.createObjectURL(files[0])}
            alt="fileimage"
            style={img}
            width={200}
            height={200}
          />
        </button>
      </div>
    );
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image
          src={file.preview}
          style={img}
          alt="uploadImage"
          width={20}
          height={20}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag & drop file here,</p>
        <p>or click to select file</p>
      </div>
      <aside className="flex justify-center m-4">{thumbs}</aside>

      {files.length > 0 && (
        <div className="flex flex-col w-full ml-5">
          <div className="self-start">
            <button className="btn btn-neutral w-20" onClick={() => onAddItem(createElement)}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
