import Feature from "../components/feature";

const languages = [
  {
    name: "Javascript",
    img: { src: "http://via.placeholder.com/75x75", alt: "Javascript" }
  }
];

const frameworks = [
  {
    name: "Angular",
    img: { src: "http://via.placeholder.com/75x75", alt: "Angular" }
  },
  {
    name: "AngularJS",
    img: { src: "http://via.placeholder.com/75x75", alt: "AngularJS" }
  },
  {
    name: "React",
    img: { src: "http://via.placeholder.com/75x75", alt: "React" }
  },
  {
    name: "Express",
    img: { src: "http://via.placeholder.com/75x75", alt: "Express" }
  }
];

const technologies = [
  {
    name: "Node.js",
    img: { src: "http://via.placeholder.com/75x75", alt: "Node.js" }
  }
];

const contacts = [
  {
    name: "Email",
    img: { src: "http://via.placeholder.com/75x75", alt: "Email" }
  }
];

const languageFeatures = languages.map(language => (
  <Feature name={language.name} img={language.img} />
));
const frameworkFeatures = frameworks.map(framework => (
  <Feature name={framework.name} img={framework.img} />
));
const technologyFeatures = technologies.map(tech => (
  <Feature name={tech.name} img={tech.img} />
));
const contactFeatures = contacts.map(contact => (
  <Feature name={contact.name} img={contact.img} />
));

export default () => (
  <div>
    <header>
      <h1>Jade Beesley</h1>
      <h3>Javascript Developer</h3>
    </header>
    <section>
      <h2>Languages</h2>
      <ul>{languageFeatures}</ul>
    </section>
    <section>
      <h2>Frameworks</h2>
      <ul>{frameworkFeatures}</ul>
    </section>
    <section>
      <h2>Technologies</h2>
      <ul>{technologyFeatures}</ul>
    </section>
    <section>
      <h2>Contact</h2>
      <ul>{contactFeatures}</ul>
    </section>
  </div>
);
