import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtPieces from './ArtPieces';

describe('ArtPieces', () => {
    const mockData = [
        {
            imageSource: 'Kiwi Juice On Glass.jpg',
            name: 'kiwi-juice-on-glass',
            artist: 'Alexander Mills',
            slug: 'kiwi-juice-on-glass'
        },
        {
            imageSource: 'Orange Red And Green.jpg',
            name: 'orange-red-and-green',
            artist: 'Steve Jhonson',
            slug: 'orange-red-and-green'
        }
    ];
    const mockFavorites = [
        {
            slug: 'kiwi-juice-on-glass',
            isFavorite: true
        }
    ];

    it('displays all art pieces as a list', () => {
        render(<ArtPieces data={mockData} favorites={mockFavorites} />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(mockData.length);
    });

    it("displays each art piece's image", () => {
        render(<ArtPieces data={mockData} favorites={mockFavorites} />);
        mockData.forEach((artwork) => {
            expect(screen.getByAltText(artwork.name)).toBeInTheDocument();
        });
    });

    it("displays each art piece's title", () => {
        render(<ArtPieces data={mockData} favorites={mockFavorites} />);
        mockData.forEach((artwork) => {
            expect(screen.getByText(artwork.name)).toBeInTheDocument();
        });
    });

    it("displays each art piece's artist", () => {
        render(<ArtPieces data={mockData} favorites={mockFavorites} />);
        mockData.forEach((artwork) => {
            expect(screen.getByText(artwork.artist)).toBeInTheDocument();
        });
    });
});
