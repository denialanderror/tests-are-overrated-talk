import { ReactComponent as QuotationMark } from "./images/quotes.svg";
import { Grid, Image, FlexBox, Heading } from "spectacle";

const OversizedQuote = ({ children }) => (
  <>
    <QuotationMark
      style={{
        position: "relative",
        width: "50px",
        height: "50px",
        marginRight: "20px",
        fill: "white",
        stroke: "white",
      }}
    />
    {children}
    <QuotationMark
      style={{
        position: "relative",
        width: "50px",
        height: "50px",
        marginLeft: "20px",
        fill: "white",
        stroke: "white",
        transform: "rotate(180deg)"
      }}
    />
  </>
);

const QuoteAndImage = ({ quote, image }) => (
  <Grid
    gridTemplateColumns="50% 50%"
    height="100%"
  >
    <FlexBox alignItems="center" justifyContent="center">
      <Heading>
        <OversizedQuote>
          {quote}
        </OversizedQuote>
      </Heading>
    </FlexBox>
    <FlexBox alignItems="center" justifyContent="center">
      <Image src={image} width="80%" style={{ objectFit: "cover" }} />
    </FlexBox>
  </Grid>
)

export { OversizedQuote, QuoteAndImage };
