import ContentsCard from "./ContentsCard";
import IU from "@/../public/IU.jpg";
import Fastforward from "@/../public/fastforward.jpg";
import Unnatural from "@/../public/unnatural.jpg";
import Newjeans from "@/../public/newjeans.jpg";
import Lovelee from "@/../public/lovelee.jpg";
import Galaxy from "@/../public/Galaxy.jpg";
import Laboum from "@/../public/laboum.jpg";
import MoonNight from "@/../public/moonnight.jpg";
import Twice from "@/../public/twice.jpg";

const ContentsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-3 mt-1 gap-y-5 overflow-hidden">
      <ContentsCard like image={IU} title="Celebrity" author="아이유(IU)" />
      <ContentsCard image={Lovelee} title="Lovelee" author="AKMU" />
      <ContentsCard image={Fastforward} title="Fast Forward" author="전소미" />
      <ContentsCard image={Unnatural} title="UNNATURAL" author="우주소녀" />
      <ContentsCard like image={Newjeans} title="Hype Boy" author="New Jeans" />
      <ContentsCard like image={Galaxy} title="우주를 줄게" author="볼빨간사춘기" />
      <ContentsCard like image={Laboum} title="푱푱" author="라붐" />
      <ContentsCard like image={MoonNight} title="밤" author="여자친구" />
      <ContentsCard like image={Twice} title="Heart Shaker" author="볼빨간사춘기" />
    </div>
  );
};

export default ContentsGrid;
