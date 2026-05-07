// About Component — Connected to: App (parent)
// Receives props: image (string), about (string)
function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
