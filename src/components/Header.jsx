// Header Component — Connected to: App (parent)
// Receives props: name (string)
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
