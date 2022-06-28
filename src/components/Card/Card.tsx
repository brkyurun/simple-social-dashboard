import React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaNewspaper,
  FaYoutube,
  FaEye,
  FaUser,
  FaThumbsUp,
} from 'react-icons/fa';

export interface CardTypes {
  type: string;
  firstStatData: string;
  secondStatData: string;
}

function Card({ type, firstStatData, secondStatData }: CardTypes): JSX.Element {
  let title = 'Instagram';
  let platformIcon: JSX.Element = <FaInstagram fontSize="5rem" />;
  let firstStat = `${firstStatData} followers`;
  let firstStatIcon: JSX.Element = <FaUser fontSize="3rem" />;
  let secondStat = `${secondStatData} likes`;
  let secondStatIcon: JSX.Element = <FaThumbsUp fontSize="3rem" />;

  switch (type) {
    case 'twitter':
      title = 'Twitter';
      platformIcon = <FaTwitter fontSize="5rem" />;
      firstStat = `${firstStatData} followers`;
      firstStatIcon = <FaUser fontSize="3rem" />;
      secondStat = `${secondStatData} tweets`;
      secondStatIcon = <FaNewspaper fontSize="3rem" />;
      break;
    case 'youtube':
      title = 'YouTube';
      platformIcon = <FaYoutube fontSize="5rem" />;
      firstStat = `${firstStatData} subscribers`;
      firstStatIcon = <FaUser fontSize="3rem" />;
      secondStat = `${secondStatData} views`;
      secondStatIcon = <FaEye fontSize="3rem" />;
      break;
  }

  return (
    <div className="mx-auto flex h-96 w-1/3 items-center justify-center rounded-md border-2 border-neutral-200 shadow-lg">
      <div className="flex flex-col items-center gap-5 ">
        {platformIcon}
        <h1 className=" text-center text-3xl font-bold text-zinc-800">
          {title}
        </h1>
        <div className=" flex w-full items-center justify-between gap-3">
          {firstStatIcon}
          <p className="text-2xl text-zinc-600">{firstStat}</p>
        </div>
        <div className=" flex w-full items-center justify-between gap-3">
          {secondStatIcon}
          <p className=" text-2xl text-zinc-600">{secondStat}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
