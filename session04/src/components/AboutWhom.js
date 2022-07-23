import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/Information";

const AboutWhom = () => {
  const a = useParams();
  const nickname = a.nickname;
  const who = data.members.filter((member) => member.nickname === nickname)[0];
  console.log(who);
  return (
    <>
      <div>about {who.name}</div>
      <div>{who.memId}</div>
      <div>{who.nickname}</div>
      <div>{who.description}</div>
    </>
  );
};

export default AboutWhom;
