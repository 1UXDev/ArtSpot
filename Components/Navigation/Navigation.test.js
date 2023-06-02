import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            asPath: "/",
        };
    },
}));

describe('Navigation', () => {

    it('displays a navigation link labeled "Spotlight"', () => {
        const { getByText } = render(<Navigation />);
        const spotlightLink = getByText('Spotlight');
        expect(spotlightLink).toBeInTheDocument();
    });

    it('displays a navigation link labeled "Artworks"', () => {
        const { getByText } = render(<Navigation />);
        const artworksLink = getByText('Artworks');
        expect(artworksLink).toBeInTheDocument();
    });

    it('displays a navigation link labeled "Favorites"', () => {
        const { getByText } = render(<Navigation />);
        const favoritesLink = getByText('Favorites');
        expect(favoritesLink).toBeInTheDocument();
    });
});