import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import { ImageSelector, imageUrls, brokenImages } from './PhotoViewer/ImageSelector';

test('getImageUrls does not include broken images', () => {
    expect(imageUrls.length).toBe(44);
});

test('render matches initial snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
}) 

test('renders correct headings', () => {
  const { getByText } = render(<App />);
  const pageHeading = getByText(/React Photo Viewer/i);
  const pageSubHeading = getByText(/Select your photo/i);
  expect(pageHeading).toBeVisible();
  expect(pageSubHeading).toBeVisible();
});

test('does not render non-broken image URL', () => {
    const { container } = render(<App />);
    const image = container.querySelector('img[src="https://picsum.photos/id/6100.jpg"]');
    expect(image).not.toBeInTheDocument();
});

test('initially renders main image as first element in imageUrls Array', async () => {
    const { container } = render(<App />);
    const mainImage = container.querySelector('.photo-viewer-main img');
    expect(mainImage).toHaveAttribute('src', "https://picsum.photos/id/600/1600/900.jpg");
});


test('selected thumbnail updates ImageViewer(main image)', async () => {
    const { container } = render(<App />);
    const selectedImage = container.querySelector('img[src="https://picsum.photos/id/603/1600/900.jpg"]');
    if (selectedImage) {
    await userEvent.click(selectedImage);
    }
    expect(selectedImage).toHaveClass('highlightImage');
    const mainImage = container.querySelector('.photo-viewer-main img');
    expect(mainImage).toHaveAttribute('src', "https://picsum.photos/id/603/1600/900.jpg");
    expect(container).toMatchSnapshot();
});
