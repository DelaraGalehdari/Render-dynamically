import React from "react";
import { TextData } from "./TextData";
import { Date } from "./Date";
import { CommandData } from "./CommandData";
import { Title } from "./Title";

const KeysToComponentMap = {
  Text: TextData,
  Date: Date,
  Command: CommandData,
  title: Title,
};

export const renderComponent = (data) => {
  const dataArr = [];
  var items = Object.values(Object.values(data.view)[0].children);

  //checking to see if the path is for text or date
  const pathFunc = (str) => {
    if (str === "Text") {
      return Object.values(data.data)[0].employee__name;
    } else if (str === "Date") {
      return Object.values(data.data)[0].date;
    } else {
      return null;
    }
  };

  for (var item of items) {
    /* if the key exist in KeysToComponentMap object*/
    if (typeof KeysToComponentMap[item.component] !== "undefined") {
      dataArr.push(
        React.createElement(
          KeysToComponentMap[item.component],
          {
            title: item.title ? item.title : null,
            label: item.label ? item.label : null,
            name: item.name ? item.name : null,
            path: pathFunc(item.component),
            text: item.text ? item.text : null,
          },
          //if each item has children(in this json we don't have)
          item.children &&
            (typeof item.children === "string"
              ? item.children
              : item.children.map((c) => renderComponent(c)))
        )
      );

      dataArr.push(React.createElement("br", {}));
    }
  }
  return dataArr;
};
