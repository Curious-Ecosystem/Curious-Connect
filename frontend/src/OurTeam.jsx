import "./index.css";
import { useEffect, useState } from "react";
import New from "./components/TeamCard";

function OurTeam() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const obj1 = {
    Dhruv:
      "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    Deep: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
    Rishabh:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Shubham:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Elon: "https://cdn.pixabay.com/photo/2017/11/07/00/07/fantasy-2925250_1280.jpg",
    Emma: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    Amit: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    Sophia:
      "https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg",
    Leo: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_1280.jpg",
    Nina: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    Dhruvv:
      "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    Deepp:
      "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
    Rishabhh:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Shubhamm:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    Elonn:
      "https://cdn.pixabay.com/photo/2017/11/07/00/07/fantasy-2925250_1280.jpg",
    Emmaa:
      "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    Amitt:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    Sophiaa:
      "https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg",
    Leoo: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_1280.jpg",
    Ninaa:
      "https://cdn.pixabay.com/photo/2017/05/23/22/36/geometry-2336854_1280.jpg",
  };

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
        className="flex flex-wrap justify-center items-center h-fit my-auto mx-auto"
        style={{ width: "65%" }}
      >
        {mouseCoords &&
          Object.keys(obj1).map((key, ind) => {
            return (
              <New
                key={key}
                name={obj1[key]}
                mouseCoords={mouseCoords}
                Id={key}
                animationDelay={(ind + 1) * 0.1}
              />
            );
          })}
      </div>
    </div>
  );
}

export default OurTeam;
