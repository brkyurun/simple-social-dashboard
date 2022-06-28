import React, { useState, useEffect } from 'react';
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

type DataTypes = Record<string, string | JSX.Element>;

function Card({ type, firstStatData, secondStatData }: CardTypes): JSX.Element {
  const [data, setData] = useState<DataTypes>({});

  useEffect(() => {
    switch (type) {
      case 'twitter':
        setData({
          title: 'Twitter',
          platformIcon: <FaTwitter fontSize="5rem" />,
          firstStat: `${firstStatData} followers`,
          firstStatIcon: <FaUser fontSize="3rem" />,
          secondStat: `${secondStatData} tweets`,
          secondStatIcon: <FaNewspaper fontSize="3rem" />,
        });
        break;
      case 'youtube':
        setData({
          title: 'YouTube',
          platformIcon: <FaYoutube fontSize="5rem" />,
          firstStat: `${firstStatData} subscribers`,
          firstStatIcon: <FaUser fontSize="3rem" />,
          secondStat: `${secondStatData} views`,
          secondStatIcon: <FaEye fontSize="3rem" />,
        });
        break;
      default:
        setData({
          title: 'Instagram',
          platformIcon: <FaInstagram fontSize="5rem" />,
          firstStat: `${firstStatData} followers`,
          firstStatIcon: <FaUser fontSize="3rem" />,
          secondStat: `${secondStatData} likes`,
          secondStatIcon: <FaThumbsUp fontSize="3rem" />,
        });
        break;
    }
  }, [type, firstStatData, secondStatData]);

  return (
    <div className="mx-auto flex h-96 w-1/3 items-center justify-center rounded-md border-2 border-neutral-200 shadow-lg">
      <div className="flex flex-col items-center gap-5 ">
        {data.platformIcon}
        <h1 className=" text-center text-3xl font-bold text-zinc-800">
          {data.title}
        </h1>
        <div className=" flex w-full items-center justify-between gap-3">
          {data.firstStatIcon}
          <p className="text-2xl text-zinc-600">{data.firstStat}</p>
        </div>
        <div className=" flex w-full items-center justify-between gap-3">
          {data.secondStatIcon}
          <p className=" text-2xl text-zinc-600">{data.secondStat}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
