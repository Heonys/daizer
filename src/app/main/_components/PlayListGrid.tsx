import React from "react";
import PlayList from "./PlayList";
const PlayListGrid = () => {
  return (
    <div>
      <PlayList image="/images/bibi.jpg" title="밤양갱" author="비비(BIBI)" time="2:26" current />
      <PlayList image="/images/younha.jpg" title="오르트구름" author="윤하(Younha)" time="3:27" />
      <PlayList
        image="/images/BIGNaughty.jpg"
        title="정이라고 하자"
        author="BIG Naughty(서동현)"
        time="3:09"
      />
      <PlayList image="/images/misfits.jpg" title="Misfits" author="Skinny Brown" time="3:31" />
      <PlayList image="/images/deepsea.jpg" title="Deep Sea" author="김승민" time="3:20" />
      <PlayList image="/images/run.jpg" title="RUN" author="Leellamarz" time="3:51" />
      <PlayList image="/images/toil.jpg" title="눌러줘요 " author="TOIL" time="3:22" />
    </div>
  );
};

export default PlayListGrid;
