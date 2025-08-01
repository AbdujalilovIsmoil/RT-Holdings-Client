"use client";

import "./style.css";
import { useGet } from "@/hooks";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const Score = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const data = useGet({ path: "/our_activity_number/list/" });

  interface scoreDataInterface {
    [key: string]: {
      title: string;
    };
  }

  interface scoreTypes {
    id: string;
    number: string;
    title: "uz" | "ru" | "en" | "ko";
  }

  const scoreData: scoreDataInterface = {
    uz: {
      title: "Bizning faoliyatlarmiz raqamlarda",
    },
    ru: {
      title: "Наши достижения в цифрах",
    },
    en: {
      title: "Our achievements in numbers",
    },
    ko: {
      title: "우리의 성과 수치로",
    },
  };

  return (
    <section className='score'>
      <div className='container'>
        <h2 className='score-title'>{scoreData[`${appLang}`]?.title}</h2>
        <ul className='score__list'>
          {Array.isArray(data) &&
            data.map((item: scoreTypes) => (
              <li
                key={item?.id}
                className='score__item'
              >
                <h3 className='score__item-title'>{item.number}+</h3>
                <p className='score__item-text'>
                  {item?.[`title_${appLang}` as keyof scoreTypes]}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Score;
