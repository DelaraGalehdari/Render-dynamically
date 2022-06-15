import React, { useEffect, useState } from "react";
import { renderComponent } from "./renderComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const CardConfig = [
  {
    view: {
      "B47B298A-D09D-4BA1-8BEC-2688532668CF": {
        title: "Employee Form",
        children: {
          "d27596e2-a7ba-4826-af33-41bb58df6275": {
            component: "Text",
            label: "Name",
            name: "employeeName",
            path: "employee__name",
          },
          "d27596e2-a7ba-4826-af33-41bb58df1111": {
            component: "Date",
            label: "Birthday",
            name: "employeeBirthday",
            path: "date",
          },
          "d27596e2-a7ba-4826-af33-41bb58df6266": {
            component: "Command",
            text: "Update",
          },
        },
      },
    },
    data: {
      "B47B298A-D09D-4BA1-8BEC-2688532668CF": {
        date: "1971-01-01T00:00:00.0000000",
        employee__name: "John Smith",
      },
    },
  },
];

const App = () => {
  const [title, setTitle] = useState("");
  //creating random key
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    CardConfig.map((item) => setTitle(Object.values(item.view)[0].title));
  }, []);

  return (
    <div className="App">
      {React.createElement("h3", {}, title)}
      {CardConfig.map((item, inx) => (
        <div
          className="card-container"
          key={`${inx}-${possible.charAt(
            Math.floor(Math.random() * possible.length)
          )}`}
        >
          {renderComponent(item)}
        </div>
      ))}
    </div>
  );
};
export default App;
