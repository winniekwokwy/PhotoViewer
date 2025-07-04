import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';
import { ImageSelector, imageUrls, brokenImages } from './PhotoViewer/ImageSelector';

test('renders React Photo Viewer', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeVisible();
});

// A unit test to check our imageUrl generation code - for me, this might check that the first link is what I expect and that it doesn’t include the ‘broken’ images.
test('does not render non-broken image URL', () => {
    const { container } = render(<App />);

    const image = container.querySelector('img[src="https://picsum.photos/id/6100.jpg"]');
    expect(image).not.toBeInTheDocument();
});

test('test getURLImage method: not include broken image', () => {
    let url;
    let imageNumberString;

    brokenImages.forEach((image: number)=>{
        imageNumberString = image.toString().padStart(2, '0');
        url=`https://picsum.photos/id/6${imageNumberString}.jpg`;
        expect(imageUrls).not.toContain(url);
    })
});
