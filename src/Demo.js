import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  AnimatedProgress,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
  Notes,
  Link,
  Image,
  CodePane, MarkdownSlide,
  Grid,
  SlideLayout,
  CodeSpan,
  OrderedList,
  MarkdownSlideSet
} from "spectacle";

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Demo = () => (
  <>
  <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
    </Slide>
    <Slide
      transition={{
        from: {
          transform: "scale(0.5) rotate(45deg)",
          opacity: 0,
        },
        enter: {
          transform: "scale(1) rotate(0)",
          opacity: 1,
        },
        leave: {
          transform: "scale(0.2) rotate(315deg)",
          opacity: 0,
        },
      }}
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <SlideFragments />
    <Slide>
      <CodePane language="jsx">{`
          import { createClient, Provider } from 'urql';
          const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
          const App = () => (
            <Provider value={client}>
              <Todos />
            </Provider>
          );
          `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
          public class NoLineNumbers {
            public static void main(String[] args) {
              System.out.println("Hello");
            }
          }
          `}</CodePane>
    </Slide>
    <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div>
    <MarkdownSlide componentProps={{ color: "yellow" }}>
      {`
          # This is a Markdown Slide
          - You can pass props down to all elements on the slide.
          - Just use the \`componentProps\` prop.
          `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
         # This is also a Markdown Slide
         It uses the \`animateListItems\` prop.
         - Its list items...
         - ...will appear...
         - ...one at a time.
        `}
    </MarkdownSlide>
    <Slide>
      <Grid
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            With all the content aligned and justified center.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{"<Grid />"}</CodeSpan> and{" "}
            <CodeSpan>{"<FlexBox />"}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </Slide>
    <MarkdownSlideSet>
      {`
          # This is the first slide of a Markdown Slide Set
          ---
          # This is the second slide of a Markdown Slide Set
          `}
    </MarkdownSlideSet>
    <SlideLayout.List
      title="Slide layouts!"
      items={["Two-column", "Lists", "And more!"]}
      animateListItems
    />
    </>
);

export default Demo;