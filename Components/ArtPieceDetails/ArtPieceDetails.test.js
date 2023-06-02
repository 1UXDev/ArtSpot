import React from 'react';
import { getByRole, render } from '@testing-library/react';
import ArtPieceDetails from './ArtPieceDetails';
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const mockFavorites = [
    {
        slug: 'orange-red-and-green',
        isFavorite: true
    }
];

const colors = ['#ff0000', '#00ff00', '#0000ff'];

describe('ArtPieceDetails', () => {
    it('displays the art piece image', () => {
        const { getByRole } = render(
            <ArtPieceDetails
                title="Orange Red And Green"
                artist="Steve Jhonson"
                year="2018"
                genre="Abstract Painting"
                image="orange-red-and-green.jpg"
                slug="orange-red-and-green"
                favorites={mockFavorites}
                colors={colors}
            />
        );
        const image = getByRole('img');
        expect(image).toHaveAttribute('src', 'orange-red-and-green.jpg');
    });

    it('displays the art piece title', () => {
        const { getByText } = render(
            <ArtPieceDetails
                title="Orange Red And Green"
                artist="Steve Jhonson"
                year="2018"
                genre="Abstract Painting"
                image="orange-red-and-green.jpg"
                slug="orange-red-and-green"
                favorites={mockFavorites}
                colors={colors}
            />
        );
        const title = getByText('Orange Red And Green');
        expect(title).toBeInTheDocument();
    });

    it('displays the art piece artist', () => {
        const { getByText } = render(
            <ArtPieceDetails
                title="Orange Red And Green"
                artist="Steve Jhonson"
                year="2018"
                genre="Abstract Painting"
                image="orange-red-and-green.jpg"
                slug="orange-red-and-green"
                favorites={mockFavorites}
                colors={colors}
            />
        );
        const artist = getByText('Steve Jhonson');
        expect(artist).toBeInTheDocument();
    });

    it('displays the art piece year', () => {
        const { getByText } = render(
            <ArtPieceDetails
                title="Orange Red And Green"
                artist="Steve Jhonson"
                year="2018"
                genre="Abstract Painting"
                image="orange-red-and-green.jpg"
                slug="orange-red-and-green"
                favorites={mockFavorites}
                colors={colors}
            />
        );
        const year = getByText('2018');
        expect(year).toBeInTheDocument();
    });

    it('displays the art piece genre', () => {
        const { getByText } = render(
            <ArtPieceDetails
                title="Orange Red And Green"
                artist="Steve Jhonson"
                year="2018"
                genre="Abstract Painting"
                image="orange-red-and-green.jpg"
                slug="orange-red-and-green"
                favorites={mockFavorites}
                colors={colors}
            />
        );
        const genre = getByText("#Abstract Painting");
        expect(genre).toBeInTheDocument();
    });
});

