import React from "react";
import "./Work.css";

export default function Work() {
  const works = [
    {
      id: 1,
      title: "Web Developer",
      descriptionTitle: "Digital Telepathy",
      location: "Malatya",
      url:
        "Bulgurlu, Malatya Elazığ Yolu 10.KM No:44210, 44000 Battalgazi/Malatya, Türkei",
      date: "May 2014-May 2018",
      description:
        "Developed responsive marketing sites featuring rich interactions built in HTML, CSS and JavaScript.",
    },
    {
      id: 1,
      title: "Web Developer",
      descriptionTitle: "Digital Telepathy",
      location: "Malatya",
      url:
        "Bulgurlu, Malatya Elazığ Yolu 10.KM No:44210, 44000 Battalgazi/Malatya, Türkei",
      date: "May 2014-May 2018",
      description:
        "Developed responsive marketing sites featuring rich interactions built in HTML, CSS and JavaScript.",
    },
    {
      id: 1,
      title: "Web Developer",
      descriptionTitle: "Digital Telepathy",
      location: "Malatya",
      url:
        "Bulgurlu, Malatya Elazığ Yolu 10.KM No:44210, 44000 Battalgazi/Malatya, Türkei",
      date: "May 2014-May 2018",
      description:
        "Developed responsive marketing sites featuring rich interactions built in HTML, CSS and JavaScript.",
    },
    {
      id: 1,
      title: "Web Developer",
      descriptionTitle: "Digital Telepathy",
      location: "Malatya",
      url:
        "Bulgurlu, Malatya Elazığ Yolu 10.KM No:44210, 44000 Battalgazi/Malatya, Türkei",
      date: "May 2014-May 2018",
      description:
        "Developed responsive marketing sites featuring rich interactions built in HTML, CSS and JavaScript.",
    },
  ];

  return (
    <div>
      <div className="container mb-5 py-5">
        <h2 className="text-center text-uppercase font-weight-bold my-5">
          Work Experience
        </h2>
        <div className="row">
          {works.map((work) => {
            return (
              <div className="col-md-6 p-3">
                <div className="card">
                  <div className="card-header">
                    <h4>{work.title}</h4>
                    <p className="text-muted">{work.descriptionTitle}</p>
                  </div>
                  <div className="card-body d-flex p-2 justify-content-around align-items-center">
                    <a
                      href={work.url}
                      className="card-title px-1 msifir"
                    >
                      <i className="fas fa-map-marker-alt"></i>
                      {work.location}
                    </a>
                    <p className="msifir">{work.date}</p>
                  </div>
                  <div className="card-footer text-muted">
                      {work.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
