import React, { Component } from "react";
import "./styles.css";
import Card from "./card";

class Content extends Component {
  render() {
    return (
      <div className="container-box">
        <Card title={"About"} footer={<a>SEE MORE</a>}>
          <p>
            I'm more experienced in eCommerce web project and mobile banking
            apps, but also like to work with creative project, such as landing
            pages or unusual orporate websites
          </p>
        </Card>

        <Card title={"Projects"} footer={<a>SHOW ALL</a>}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                width="250"
                height="100"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUMGYPnEX7lGC_ahkBnttWONDqyTzeR5CsEg&usqp=CAU"
                }
              />
              <div>
                <h5>Freelance UI/UX designer</h5>
                <p>UI/UX design,15/12/2019</p>
              </div>
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                width="250"
                height="100"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUMGYPnEX7lGC_ahkBnttWONDqyTzeR5CsEg&usqp=CAU"
                }
              />
              <div>
                <h5>Freelance UI/UX designer</h5>
                <p>UI/UX design,15/12/2019</p>
              </div>
            </div>
          </div>
        </Card>
        <Card title={"Skills & Endoresments"} footer={<a>SHOW ALL</a>}>
          <div style={{ display: "flex",marginBottom:20 }}>
            <div
              style={{
                padding: "10px",
                border:"1px solid grey",
                borderRadius:4
              }}
            >
                <h5>Freelance UI/UX designer (UX)   </h5>
            </div>
            <div
              style={{
                padding: "10px",
                border:"1px solid grey",
                borderRadius:4
              }}
            >
                <h5>Freelance UI/UX designer (UX)    </h5>
            </div>
          </div>
        </Card>

        <Card title={"Experience"}>
          <div
            style={{
              display: "flex",
              padding: "10px",
            }}
          >
            <img
              width="50"
              height="50"
              src={
                "https://p.kindpng.com/picc/s/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png"
              }
            />
            <div>
              <h5>Freelance UI/UX designer</h5>
              <p>Self employed Around the world</p>
              <p>Jun 2016 - Present 3yrs 3 mos</p>
              <p>
                Work with clients and web studios as freelancer.Work with
                clients and web studios as freelancer.Work with clients and web
                studios as freelancer.Work with clients and web studios as
                freelancer
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: " 10px ",
            }}
          >
            <img
              width="50"
              height="50"
              src={
                "https://p.kindpng.com/picc/s/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png"
              }
            />
            <div>
              <h5>Freelance UI/UX designer</h5>
              <p>Self employed Around the world</p>
              <p>Jun 2016 - Present 3yrs 3 mos</p>
              <p>
                Work with clients and web studios as freelancer.Work with
                clients and web studios as freelancer.Work with clients and web
                studios as freelancer.Work with clients and web studios as
                freelancer
              </p>
            </div>
          </div>
        </Card>
        <Card title={"Education"}>
          <div
            style={{
              display: "flex",
              padding: " 10px ",
            }}
          >
            <img
              width="50"
              height="50"
              src={
                "https://p.kindpng.com/picc/s/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png"
              }
            />
            <div>
              <h5>Moscow state</h5>
              <p>Bachelor's degree Field of study</p>
              <p>2016 - 2017</p>
              <p>Additional English classes and UX profile courses</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Content;
