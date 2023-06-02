import React from 'react';
import { render } from '@testing-library/react';
import Spotlight from './Spotlight';

const mockFavorites = [
    {
        slug: 'orange-red-and-green',
        isFavorite: true
    }
];

describe('Spotlight', () => {
    it('displays the art piece image', () => {
        const { getByRole } = render(
            <Spotlight
                image="orange-red-and-green.jpg"
                artist="Steve Jhonson"
                slug="orange-red-and-green"
                favorites={mockFavorites} />
        );
        const image = getByRole('img');
        expect(image).toHaveAttribute('src', 'orange-red-and-green.jpg');
    });

    it('displays the art piece artist', () => {
        const { getByText } = render(
            <Spotlight
                image="orange-red-and-green.jpg"
                artist="Steve Jhonson"
                slug="orange-red-and-green"
                favorites={mockFavorites} />
        );
        const artist = getByText('Steve Jhonson');
        expect(artist).toBeInTheDocument();
    });
});