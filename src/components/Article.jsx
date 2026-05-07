// Article Component — Connected to: ArticleList (parent)
// Receives props: title (string), date (string), preview (string)
function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
