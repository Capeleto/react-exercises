import React, { useEffect, useMemo, useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import DogeDetails from "../dogeDetails/DogeDetails";

function fetchList(useAxios) {
  if (useAxios) {
    return null;
  }

  return fetch("https://dog.ceo/api/breeds/list/all");
}

function fetchImage(name) {
  return fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      return {
        ...data,
        name,
      };
    })
    .catch(() => null);
}

function listViewRenderer(name, breed, image, onClick) {
  return (
    <ListItem className="exercises-container" onClick={() => onClick(name, image)}>
      <DogeDetails image={image} name={name} hasScold />
      {/* <img src={image} alt={name} className="doge-image" />
      <ListItemText className="capitalize">{name}</ListItemText> */}
    </ListItem>
  );
}

function DogeList({ id, useAxios = false, onClick }) {
  const [data, setData] = useState(null);
  const [dataImages, setDataImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchList(useAxios)
      .then((response) => response.json())
      .then(({ message }) => setData(message));
  }, [useAxios]);

  useEffect(() => {
    if (data != null) {
      const promises = Object.keys(data).map((key) => fetchImage(key));

      Promise.all(promises).then(setDataImages);
    }
  }, [data]);

  useEffect(() => {
    if (dataImages && data) {
      setLoading(false);
    }
  }, [dataImages, data]);

  const listView = useMemo(() => {
    if (data && dataImages) {
      return Object.keys(data).map((key) => {
        const { message: imageURL } = dataImages.find((element) => element.name === key);

        return listViewRenderer(key, data[key], imageURL, onClick);
      });
    }

    return null;
  }, [data, dataImages, onClick]);

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  return (
    <div id={id} className="exercises-container huge scroll">
      <List component="div">{listView}</List>
    </div>
  );
}

export default DogeList;
