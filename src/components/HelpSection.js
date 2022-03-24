import React from "react";
import GithubLinkWithIcon from "./GithubLinkWithIcon";

export default function HelpSection() {
  const urlMathFormula = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random";
  return (
    <div className="container-element tools">
      <div className="img-background"></div>
      <div className="container-help">
        <h3 style={{ color: "#69B2FB" }}>
          Как программа вычисляет победителя?
        </h3>
        <p className="p-text-help">
          1. Перед запуском программы, происходит сортировка комментариев
          участников по уникальному "user_id" значению, чтобы уравнять шансы и
          оставить 1 комментарий за 1 человеком.
        </p>
        <p className="p-text-help">
          2. При нажатии кнопки "Случайной Генерации", победитель генерируется
          по стандартной формуле, на основе{" "}
          {<span style={{ color: "#FFE44C" }}>Math.random</span>}. Формула
          выбирает случайное значение в указанном диапазоне чисел, включая min и
          max значения, более подробно{" "}
          {
            <a
              href={urlMathFormula}
              style={{ color: "#459ef8", textDecoration: "underline" }}
            >
              ТУТ
            </a>
          }
          . На основе полученного случайного числа, выбирается комментарий из
          списка.
        </p>
        <p className="p-text-help">
          3. После того, как комментарий-победитель был выбран, он удаляется из
          общего массива комментариев, чтобы избежать повторный выигрыш (хотя,
          какие были бы шансы выиграть при таком раскладе?)
        </p>
      </div>
      <GithubLinkWithIcon />
    </div>
  );
}
