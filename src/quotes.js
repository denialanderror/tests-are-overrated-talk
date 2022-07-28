import { ReactComponent as QuotationMark } from "./quotes.svg";

const OversizedQuote = ({ children }) => (
  <>
    <QuotationMark
      style={{
        width: "50px",
        height: "50px",
        padding: "20px",
        fill: "white",
        stroke: "white",
      }}
    />
    {children}
    <QuotationMark
      style={{
        width: "50px",
        height: "50px",
        padding: "20px",
        fill: "white",
        stroke: "white",
      }}
    />
  </>
);

export { OversizedQuote };
