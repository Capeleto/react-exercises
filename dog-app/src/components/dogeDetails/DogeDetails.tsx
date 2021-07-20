import React, { useCallback, useMemo, useState } from "react";

interface DogeProps {
  image: any;
  name: String;
  onBark?: React.MouseEventHandler<HTMLButtonElement>;
  hasScold?: Boolean;
}

function DogeDetails({ image, name, onBark, hasScold }: DogeProps) {
  const [scoldCounter, setScold] = useState(0);

  const handleScoldClick = useCallback(() => {
    setScold(scoldCounter + 1);
  }, [scoldCounter]);

  const renderScoldButton = useMemo(() => {
    if (hasScold) {
      return (
        <>
          <button className="button small" onClick={handleScoldClick}>
            Scold!
          </button>

          <span>{scoldCounter}</span>
        </>
      );
    }

    return null;
  }, [scoldCounter, hasScold, handleScoldClick]);

  const renderBarkButton = useMemo(() => {
    if (onBark != null) {
      return (
        <button className="button small" onClick={onBark}>
          Bark
        </button>
      );
    }

    return null;
  }, [onBark]);

  return (
    <>
      <div className="exercises-container">
        <img src={image} className="doge-image" alt="logo" />
        <span className="small">{name}</span>
        {renderBarkButton}
        {renderScoldButton}
      </div>
    </>
  );
}

export default DogeDetails;
