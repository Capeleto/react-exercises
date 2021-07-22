import React, { useCallback, useMemo, useState } from "react";

interface DogeProps {
  id: String;
  image: any;
  name: String;
  onBark?: React.MouseEventHandler<HTMLButtonElement>;
  hasScold?: Boolean;
}

function DogeDetails({ id, image, name, onBark, hasScold }: DogeProps) {
  const [scoldCounter, setScold] = useState(0);

  const handleScoldClick = useCallback(() => {
    setScold(scoldCounter + 1);
  }, [scoldCounter]);

  const renderScoldButton = useMemo(() => {
    if (hasScold) {
      return (
        <>
          <button
            id={`${id}-scold`}
            className="button small"
            onClick={handleScoldClick}
          >
            Scold!
          </button>

          <span>{scoldCounter}</span>
        </>
      );
    }

    return null;
  }, [scoldCounter, hasScold, handleScoldClick, id]);

  const renderBarkButton = useMemo(() => {
    if (onBark != null) {
      return (
        <button id={`${id}-bark`} className="button small" onClick={onBark}>
          Bark
        </button>
      );
    }

    return null;
  }, [onBark, id]);

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
