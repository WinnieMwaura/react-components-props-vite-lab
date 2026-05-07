/**
 * Header Component
 * -----------------
 * Connected to: App (parent)
 * Receives props: name (string) — the title of the blog
 *
 * Renders the top-of-page header with the blog name.
 */

function Header({ name }) {
  return (
    <header className="site-header">
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
