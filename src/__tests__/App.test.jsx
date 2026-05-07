import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Header from "./components/Header";
import About from "./components/About";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";

// ── Header ────────────────────────────────────────────────────
describe("Header", () => {
  it("renders the blog name passed as the name prop", () => {
    render(<Header name="My Test Blog" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "My Test Blog"
    );
  });
});

// ── About ─────────────────────────────────────────────────────
describe("About", () => {
  it("renders the about text passed as the about prop", () => {
    render(<About image="logo.png" about="Hello, I am a blogger." />);
    expect(screen.getByText("Hello, I am a blogger.")).toBeInTheDocument();
  });

  it("renders the image with src from the image prop and correct alt text", () => {
    render(<About image="logo.png" about="Hello" />);
    const img = screen.getByAltText("blog logo");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "logo.png");
  });
});

// ── Article ───────────────────────────────────────────────────
describe("Article", () => {
  const props = {
    title: "Test Post Title",
    date: "January 1, 2025",
    preview: "This is a preview of the article.",
  };

  it("renders the title passed as the title prop", () => {
    render(<Article {...props} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Test Post Title"
    );
  });

  it("renders the date passed as the date prop", () => {
    render(<Article {...props} />);
    expect(screen.getByText("January 1, 2025")).toBeInTheDocument();
  });

  it("renders the preview passed as the preview prop", () => {
    render(<Article {...props} />);
    expect(
      screen.getByText("This is a preview of the article.")
    ).toBeInTheDocument();
  });
});

// ── ArticleList ───────────────────────────────────────────────
describe("ArticleList", () => {
  const posts = [
    { id: 1, title: "Post One", date: "Jan 1", preview: "Preview one." },
    { id: 2, title: "Post Two", date: "Jan 2", preview: "Preview two." },
  ];

  it("renders one Article component for each post", () => {
    render(<ArticleList posts={posts} />);
    expect(screen.getByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
  });

  it("renders the correct number of articles", () => {
    render(<ArticleList posts={posts} />);
    // Each article has an h3
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(2);
  });
});
