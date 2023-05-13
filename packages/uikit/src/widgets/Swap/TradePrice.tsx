import { Price, Currency } from "@baseswap/swap-sdk-core";
import { AtomBox } from "@baseswap/ui/components/AtomBox";
import { Text, AutoRenewIcon } from "@baseswap/uikit";
import { useState } from "react";
import { balanceMaxMiniClass } from "./SwapWidget.css";

interface TradePriceProps {
  price?: Price<Currency, Currency>;
}

export function TradePrice({ price }: TradePriceProps) {
  const [showInverted, setShowInverted] = useState<boolean>(false);
  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6);

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency);
  const label = showInverted
    ? `${price?.quoteCurrency?.symbol} per ${price?.baseCurrency?.symbol}`
    : `${price?.baseCurrency?.symbol} per ${price?.quoteCurrency?.symbol}`;

  return (
    <Text style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
      {show ? (
        <>
          {formattedPrice ?? "-"} {label}
          <AtomBox className={balanceMaxMiniClass} onClick={() => setShowInverted(!showInverted)}>
            <AutoRenewIcon width="14px" />
          </AtomBox>
        </>
      ) : (
        "-"
      )}
    </Text>
  );
}
