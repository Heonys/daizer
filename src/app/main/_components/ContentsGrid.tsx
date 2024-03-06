import ContentsCard from "./ContentsCard";

const ContentsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-3 mt-1 gap-y-5 overflow-hidden">
      <ContentsCard like image="/images/IU.jpg" title="Celebrity" author="아이유(IU)" />
      <ContentsCard image="/images/lovelee.jpg" title="Lovelee" author="AKMU" />
      <ContentsCard image="/images/fastforward.jpg" title="Fast Forward" author="전소미" />
      <ContentsCard image="/images/unnatural.jpg" title="UNNATURAL" author="우주소녀" />
      <ContentsCard like image="/images/newjeans.jpg" title="Hype Boy" author="New Jeans" />
      <ContentsCard like image="/images/Galaxy.jpg" title="우주를 줄게" author="볼빨간사춘기" />
      <ContentsCard like image="/images/laboum.jpg" title="푱푱" author="라붐" />
      <ContentsCard like image="/images/moonnight.jpg" title="밤" author="여자친구" />
      <ContentsCard like image="/images/twice.jpg" title="Heart Shaker" author="볼빨간사춘기" />
    </div>
  );
};

export default ContentsGrid;
