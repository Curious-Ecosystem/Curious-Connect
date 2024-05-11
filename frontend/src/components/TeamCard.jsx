import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const New = ({ name, mouseCoords, links, url, role, animationDelay }) => {
  const eid = useRef();
  const ref = useRef();
  const [onDiv, setOnDiv] = useState(false);
  return (
    <div
      ref={eid}
      className="eid smooth-fade-in"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div
        ref={ref}
        className="w-24 h-24 rounded-full bg-cover bg-center bg-red-400"
        style={{
          backgroundImage: `url(${url})`,
          animationDelay: `${animationDelay}s !important`,
        }}
        onMouseOver={() => setOnDiv(true)}
        onMouseLeave={() => setOnDiv(false)}
        data-title={name}
      ></div>

      <div className="flex flex-col items-center py-2 text-gray-700 gap-1">
        <p className="font-bold text-lg">{name}</p>
        <p>{role}</p>
        <div className="flex gap-2">
          <a href={links.facebook}>
            <FaFacebook />
          </a>
          <a href={links.linkedin}>
            <FaLinkedin />
          </a>
          <a href={links.github}>
            <FaGithub />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
