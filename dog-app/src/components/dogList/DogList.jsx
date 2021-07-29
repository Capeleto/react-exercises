import React, { useEffect, useMemo, useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import DogeDetails from "../dogeDetails/DogeDetails";
import DogeFilter from "./DogFilter";

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
  const [filteredData, setFilteredData] = useState(null);
  const [dataImages, setDataImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchList(useAxios)
      .then((response) => response.json())
      .then(({ message }) => setData(Object.keys(message)));
  }, [useAxios]);

  useEffect(() => {
    if (data != null) {
      const promises = data.map((key) => fetchImage(key));

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
      const dataArray = filteredData || data;

      return dataArray.map((key) => {
        const { message: imageURL } = dataImages.find((element) => element.name === key);

        return listViewRenderer(key, data[key], imageURL, onClick);
      });
    }

    return null;
  }, [data, dataImages, onClick, filteredData]);

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  function handleChangeFilter(newList) {
    setFilteredData(newList);
  }

  return (
    <div className="filter">
      <DogeFilter data={data} onChange={handleChangeFilter} />
      <div id={id} className="exercises-container huge scroll">
        <List component="div">{listView}</List>
      </div>
    </div>
  );
}

export default DogeList;
