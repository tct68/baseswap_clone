import { useTranslation } from "@baseswap/localization";
import { AtomBox } from "@baseswap/ui";
import { Button, Slider } from "@baseswap/uikit";

import { useCallback } from "react";
import { useDebouncedChangeHandler } from "@baseswap/hooks";

interface PercentSliderProps {
  onValueChanged: (value: string) => void;
  currentValue: number;
}

export function PercentSlider({ onValueChanged, currentValue }: PercentSliderProps) {
  const { t } = useTranslation();

  const liquidityPercentChangeCallback = useCallback(
    (value: number) => {
      onValueChanged(value.toString());
    },
    [onValueChanged]
  );

  const [innerLiquidityPercentage, setInnerLiquidityPercentage] = useDebouncedChangeHandler(
    currentValue,
    liquidityPercentChangeCallback
  );

  const handleChangePercent = useCallback(
    (value: any) => setInnerLiquidityPercentage(Math.ceil(value)),
    [setInnerLiquidityPercentage]
  );

  return (
    <>
      <Slider
        name="lp-amount"
        min={0}
        max={100}
        value={innerLiquidityPercentage}
        onValueChanged={handleChangePercent}
        mb="16px"
      />
      <AtomBox display="flex" flexWrap="wrap" justifyContent="space-between">
        <Button variant="tertiary" scale="sm" onClick={() => onValueChanged("25")}>
          25%
        </Button>
        <Button variant="tertiary" scale="sm" onClick={() => onValueChanged("50")}>
          50%
        </Button>
        <Button variant="tertiary" scale="sm" onClick={() => onValueChanged("75")}>
          75%
        </Button>
        <Button variant="tertiary" scale="sm" onClick={() => onValueChanged("100")}>
          {t("Max")}
        </Button>
      </AtomBox>
    </>
  );
}
