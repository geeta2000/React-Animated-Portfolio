import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1 className="boxShadow text-center my-4">EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h1>{data.role}</h1>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}
                    </span>{" "}
                    <span style={{ color: "yellowgreen" }}>
                      {data.location}
                    </span>
                  </h4>
                  <h5 style={{ color: "yellowgreen" }}>
                    {data.experiences[0]}
                  </h5>
                  <h5 style={{ color: "yellowgreen" }}>
                    {data.experiences[1]}
                  </h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
