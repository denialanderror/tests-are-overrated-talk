import React from "react";
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
} from "spectacle";
import { OversizedQuote } from "./quotes";
import github from "./GitHub-Mark.png";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

const TitlePage = () => (
  <Slide>
    <Heading>Testing is Overrated</Heading>
    <Appear>
      <Text>Sam Joseph, Senior Developer @ Ministry of Justice</Text>
    </Appear>
    <Notes>
      <p>
        Quick disclaimer to start with: This talk is deliberately antagonistic
        (trollface).
      </p>
      <p>
        For any potential future colleagues or recruiters out there, I do
        actually write tests! My name is Sam Joseph and I am currently a senior
        developer at the Ministry of Justice, and over the past eight years and
        half a dozen different languages and tech stacks, I have worked to
        improve the quality and maintainability of codebases through testing.
      </p>
    </Notes>
  </Slide>
);

const TestAnnoyances = () => (
  <>
    <Slide>
      <Appear>
        <Heading>
          <OversizedQuote>
            I spent an hour making this feature work and a whole day fixing the
            tests
          </OversizedQuote>
        </Heading>
      </Appear>
      <Notes>
        Be honest with me: Who here hasn't found tests and testing irritating on
        occasion?
        <ul>
          <li>
            Who here can think of a time where they have spent an hour coding up
            a feature and then spent the rest of the day writing tests for it?
          </li>
          <li>
            Or who has had issues with flakey tests eating up development time?
          </li>
          <li>or poorly written tests passing when they shouldn't?</li>
          <li>
            Wouldn't the world be a better place if test coverage metrics didn't
            exist?
          </li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>
        <OversizedQuote>
          It's taken three attempts to get this through CI because of someone
          else's flakey tests
        </OversizedQuote>
      </Heading>
    </Slide>
    <Slide>
      <Heading>
        <OversizedQuote>
          I can't help right now, I have to write a load of useless unit tests
          to hit the code coverage metric
        </OversizedQuote>
      </Heading>
    </Slide>
    <Slide>
      <Heading>
        <OversizedQuote>
          It can't possibly be a bug, all our tests are passing!
        </OversizedQuote>
      </Heading>
    </Slide>
  </>
);

const WhyTest = () => (
  <Slide>
    <Heading>Why write Tests</Heading>
    <Notes>
      TODO:
      <p>
        The naive assumption is to check the validity of our workings. Let's say
        we are writing a calculator application... But if we are only testing to
        ensure our code meets requirements, why bother checking in the tests
        with the production code?
      </p>
      <p>
        Okay, well tests aren't there to test for validity _now_, they are there
        to test for validity whenever you make a change again in the future.
        !!WHY IS THIS NOT GOOD ASSUMPTION!!
      </p>
      <p>
        For documentation. A great way to learn about a new codebase is by
        reading through the test suite. But tests are much like any other
        documentation: They are often only written once, and rarely deleted. A
        test suite can suffer from the same problems as comments in code.
      </p>
    </Notes>
  </Slide>
);

const TestsAreImportant = () => (
  <Slide>
    <Heading>Tests are important!</Heading>
    <Notes>
      <p>
        But tests _are_ important! Tests are vitally important in modern, Agile
        software development. Without tests to catch regressions, Continuous
        Delivery would not be possible, and working on a team that over the past
        year has moved from fortnightly releases to double figure releases
        daily, CD has been a huge improvement for the product, the users, and
        the developer experience. Without tests, Test-Driven Development would
        not be possible, and TDD produces objectively higher-quality code.
      </p>
      <p>
        I'll admit then that there's a fair bit of hyperbole in my talk title.
      </p>
    </Notes>
  </Slide>
);

const HowToThink = () => (
  <Slide>
    <Heading>Alternatives</Heading>
    <Notes>
      <p>
        So why have this title in the first place? Well, there's a few reasons:
      </p>
      <p>
        *Tests should be useful, and most are not.* If your unit test mocks out
        all external dependencies (as unit tests tend to), there is very little
        reason to keep them around once you've finished refactoring. If the
        interface of your unit changes, all of your unit tests will need
        changing also. We have a mindset drilled into us as software developers
        that deleting tests is a "bad thing" but I'd argue that a significant
        portion of product's CI pipeline is effectively dead code.!!Use Kent C
        Dodds inverted pyramid example!!
      </p>
      <p>
        *Test suites often test code, when they should test behaviour.*
        Similarly, it is easy to fall into a trap with unit tests especially of
        writing your tests to validate your code, rather than the behaviour the
        user or downstream consumer is expecting. This is especially easy if you
        forget that the "refactor" step of "Red-Green-Refactor" also applies to
        the tests.
      </p>
      <p>
        # Most testing can be automated, but often isn't. And by that I mean a
        lazy developer (which we all should strive to be) with the right tools
        should be writing fewer tests. Every program you write has a complex
        type system regardless of the language you choose. The difference
        between them is how much of that type checking is being done by the
        compiler and how much of it falls on the developer. In a JavaScript
        application, the onus is on the developer to ensure interfaces are being
        adhered to. Switch to TypeScript instead and a whole suite of tests are
        rendered redundant. If you look at languages with very rich type
        systems, such as Haskell or Rust, they come with a near guarantee that
        if the code compiles, it is going to work.
      </p>
      <p>
        # Mutable code requires more tests. Languages like Haskell are able to
        achieve these guarantees by enforcing certain principles. All state in
        Haskell is immutable by default and all functions are pure, meaning
        given the same input, the output is always the same. If a developer
        wants to deal with side effects, they explicitly have to take
        responsibility. This, coupled with the type system, means that not only
        is the compiler already testing our code, we know where are test
        boundaries should be by where we as developers have accepted
        responsibility. We don't have the luxury of a strict compiler doing all
        the work for us in JS land, but we can still enforce some of these same
        principles outselves to reduce the surface area for regressions to creep
        in. Obviously, we want to be lazy here and automate it away otherwise we
        have to write tests, which is why libraries like immutable.js exist.
      </p>
      <p>
        # The thing we care about testing the most is often the thing we test
        the least When we are writing tests, we are often thinking from the
        perspective of that unit or service and we spend all of our time testing
        it in isolation. Dependency injection exists precisely for that purpose.
        Is that what should be informing us that our application isn't working
        as it should? Will unit tests tell us when a service stops communicating
        a page doesn't load? Who here has some test coverage monitor that flags
        PRs that don't hit a certain percentage, but at the same time has no
        insight into the actual functioning of their application in production,
        save for a few rudimentary Cloudwatch alerts in AWS?
      </p>
    </Notes>
  </Slide>
);

const Conclusion = () => (
  <Slide>
    <Notes>
      So I'm not really arguing that testing is a waste of time or that we
      should go into work tomorrow and put our CI pipelines on a diet, but I am
      suggesting that maybe we should be less dogmatic about how we think about
      testing and test coverage.
      <ul>
        <li>Focus less on unit tests, and more on testing real behaviour.</li>
        <li>Less on code coverage, and more on application observability.</li>
        <li>And most importantly, be lazy and let the code test itself.</li>
      </ul>
    </Notes>
  </Slide>
);

const Thanks = () => (
  <Slide>
    <Heading>Thanks for listening!</Heading>
    <Text>Inspiration and further reading:</Text>
    <UnorderedList>
      <ListItem>
        <Link href="https://kentcdodds.com/blog/write-tests">
          Kent C. Dodds - Write tests. Not too many. Mostly integration
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://youtu.be/-UKEPd2ipEk">
          Chad Fowler - Kill "Microservices" before its too late
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://michaelfeathers.typepad.com/michael_feathers_blog/2011/05/the-carrying-cost-of-code-taking-lean-seriously.html">
          Michael Feathers - The Carrying-Cost of Code
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.goodreads.com/en/book/show/44919.Working_Effectively_with_Legacy_Code">
          Michael Feathers - Working Effectively with Legacy Code
        </Link>
      </ListItem>
    </UnorderedList>
    <Text>
      You can find these slides on my Github:{" "}
      <img src={github} alt="github" style={{ paddingRight: "5px" }} />
      denialanderror
    </Text>
    <Notes>
      Thanks for listening! This slide deck is pinned to my Github so feel free
      to take a look. I don't do Twitter, so if you have any comments - positive
      or negative - we can discuss them over a pint in the pub after.
    </Notes>
  </Slide>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <TitlePage />
    <TestAnnoyances />
    <WhyTest />
    <TestsAreImportant />
    <HowToThink />
    <Conclusion />
    <Thanks />
  </Deck>
);

export { Presentation };
