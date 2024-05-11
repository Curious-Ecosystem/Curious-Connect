import "./index.css";
import { useEffect, useState } from "react";
import New from "./components/TeamCard";
import { FaGithub } from "react-icons/fa";
import { teamData } from "./constants/team";

function OurTeam() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("useEffect");
    const body = document.getElementsByTagName("body")[0];
    body.style.height = "110%";
    body.onmousemove = (e) => {
      setMouseCoords({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(e.clientX, e.clientY);
    };
  }, []);

  return (
    <div>
      <h1 class="team-title text-center">Our Team</h1>
      <div
        className="flex flex-wrap gap-16 justify-center items-center h-fit my-auto mx-auto"
        style={{ width: "95%" }}
      >
        {mouseCoords &&
          teamData.map((key, ind) => {
            return (
              <New
                key={key}
                url={key.url}
                mouseCoords={mouseCoords}
                name={key.name}
                role={key.role}
                links={key.links}
                animationDelay={(ind + 1) * 0.1}
              />
            );
          })}
      </div>
    </div>
  );
}

export default OurTeam;
