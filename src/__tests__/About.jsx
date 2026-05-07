/**
 * About Component
 * ----------------
 * Connected to: App (parent)
 * Receives props:
 *   - image (string) — URL of the blog logo/avatar
 *   - about (string) — short bio / description of the blog
 *
 * Renders a sidebar-style aside with the blog image and bio text.
 */

function About({ image, about }) {
  return (
    <aside className="about">
      <img src={image} alt="blog logo" className="about-img" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
