import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

const mockPieces = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource: "https://example.com/image1.jpg",
  },
  {
    slug: "blue-and-red-abstract-painting",
    artist: "Jung-Hua Lui",
    name: "Blue and Red Abstract Painting",
    imageSource: "https://example.com/image2.jpg",
  },
];

const mockArtPiecesInfo = [
  { slug: "orange-red-and-green", isFavorite: false },
  { slug: "blue-and-red-abstract-painting", isFavorite: true },
];

describe("ArtPieces", () => {
  it("displays all art pieces as a list", () => {
    render(
      <ArtPieces
        pieces={mockPieces}
        artPiecesInfo={mockArtPiecesInfo}
        handleFavorites={() => {}}
      />
    );
    const artPieces = screen.getAllByRole("img");
    expect(artPieces).toHaveLength(2);
  });

  it("displays each art piece's image", () => {
    render(
      <ArtPieces
        pieces={mockPieces}
        artPiecesInfo={mockArtPiecesInfo}
        handleFavorites={() => {}}
      />
    );
    mockPieces.forEach((piece) => {
      const image = screen.getByAltText(piece.name);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", piece.imageSource);
    });
  });

  it("displays each art piece's title", () => {
    render(
      <ArtPieces
        pieces={mockPieces}
        artPiecesInfo={mockArtPiecesInfo}
        handleFavorites={() => {}}
      />
    );
    mockPieces.forEach((piece) => {
      const title = screen.getByText(piece.name);
      expect(title).toBeInTheDocument();
    });
  });

  it("displays each art piece's artist", () => {
    render(
      <ArtPieces
        pieces={mockPieces}
        artPiecesInfo={mockArtPiecesInfo}
        handleFavorites={() => {}}
      />
    );
    mockPieces.forEach((piece) => {
      const artist = screen.getByText(piece.artist);
      expect(artist).toBeInTheDocument();
    });
  });
});
