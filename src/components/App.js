import React, { useState, useEffect } from "react";
import Card from "./Card";
import Description from "./Description";

const App = () => {
  const [ind, setIndex] = useState([]);
  const web = [
    {
      title: "React.JS",
      image: "https://reactjs.org/logo-og.png",
      dis: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
    },
    {
      title: "Angular.JS",
      image:
        "https://www.kindpng.com/picc/m/75-750111_angularjs-hd-png-download.png",
      dis: "AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations. It aimed to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in web applications and progressive web applications.",
    },
    {
      title: "Vue.JS",
      image:
        "https://codesource.io/static/vue-8ee7c3876f86ed3f3b745d43f37007dc.png",
      dis: "Vue.js (commonly referred to as Vue; pronounced view) is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
    },
    {
      title: "Node.JS",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--4BjMqsdN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4anecy5mdl4pho8w7519.jpg",
      dis: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.",
    },
    {
      title: "Laravel",
      image:
        "https://laraveldaily.com/wp-content/uploads/2015/06/laravel-logo-big.png",
      dis: "Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.",
    },
    {
      title: "ASP.NET",
      image:
        "https://pbs.twimg.com/profile_images/1390448160934305793/ohii8Hxq_400x400.png",
      dis: "ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, applications and services. The name stands for Active Server Pages Network Enabled Technologies.",
    },
  ];

  const cardClick = (i) => {
    let copy = [...ind];
    if (ind.indexOf(i) === -1) {
      copy.push(i);
    } else {
      copy.splice(ind.indexOf(i), 1);
    }
    setIndex([...copy]);
  };

  const renderListOfCard = () => {
    return web.map(({ title, image }, index) => {
      return (
        <Card
          index={index}
          key={index}
          title={title}
          image={image}
          click={cardClick}
        />
      );
    });
  };
  const renderListOfDescription = () => {
    if (ind.length != 0) {
      const list = web.filter((item, index) => {
        if (ind.includes(index)) {
          return item;
        }
      });
      console.log(list);
      return list.map((item, index) => {
        return (
          <div key={index}>
            <Description title={item.title} image={item.image} des={item.dis} />
            <div className="ui divider"></div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="ui link cards" style={{ margin: "20px auto" }}>
        {renderListOfCard()}
      </div>
      {renderListOfDescription()}
    </div>
  );
};

export default App;
