import { Button, Typography, Card } from "@material-ui/core";
import React, { useCallback, useMemo, useState } from "react";

interface DogeProps {
  id: string;
  image: any;
  name: string;
  onBark?: React.MouseEventHandler<HTMLButtonElement>;
  hasScold?: boolean;
  useMaterial?: boolean;
}

function DogeDetails({ id, image, name, onBark, hasScold, useMaterial }: DogeProps) {
  const [scoldCounter, setScold] = useState(0);

  const handleScoldClick = useCallback(() => {
    setScold(scoldCounter + 1);
  }, [scoldCounter]);

  const renderScoldButton = useMemo(() => {
    if (hasScold) {
      if (useMaterial) {
        return (
          <>
            <Button
              id={`${id}-scold`}
              className="button small"
              onClick={handleScoldClick}
              color="primary"
              variant="contained"
            >
              Scold!
            </Button>

            <Typography>{scoldCounter}</Typography>
          </>
        );
      }

      return (
        <>
          <button id={`${id}-scold`} className="button small" onClick={handleScoldClick}>
            Scold!
          </button>

          <span>{scoldCounter}</span>
        </>
      );
    }

    return null;
  }, [scoldCounter, hasScold, handleScoldClick, id, useMaterial]);

  const renderBarkButton = useMemo(() => {
    if (onBark != null) {
      if (useMaterial) {
        return (
          <Button
            id={`${id}-bark`}
            className="button small"
            onClick={onBark}
            color="primary"
            variant="contained"
          >
            Bark
          </Button>
        );
      }

      return (
        <button id={`${id}-bark`} className="button small" onClick={onBark}>
          Bark
        </button>
      );
    }

    return null;
  }, [onBark, id, useMaterial]);

  if (useMaterial) {
    return (
      <Card id={id} className="exercises-container wide">
        <img src={image} className="doge-image" alt="logo" />
        <Typography className="small">{name}</Typography>
        {renderBarkButton}
        {renderScoldButton}
      </Card>
    );
  }

  return (
    <div id={id} className="exercises-container wide">
      <img src={image} className="doge-image" alt="logo" />
      <span className="small">{name}</span>
      {renderBarkButton}
      {renderScoldButton}
    </div>
  );
}

export default DogeDetails;
