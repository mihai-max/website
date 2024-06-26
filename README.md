# Personal Website with Radar Effect

This project is a personal website featuring a Vanta.js halo background on the main page and a radar effect animation with background sound on the second page. The radar effect reveals text elements around the screen and changes the background color after the text is displayed.

## Demo

https://mihai-max.github.io/website

## Features

- **Main Page**
  - Vanta.js halo background animation.
  - Centered name with buttons linking to GitHub, Discord, Email, and Source Code.

- **Radar Effect Page**
  - Radar animation with circular waves.
  - Randomly positioned text elements revealed by the radar waves.
  - Background color transitions to light blue (#3049ff) after all text is revealed.
  - Background sound effect played once when the animation starts.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mihai-max/website.git
    ```

2. Navigate to the project directory:
    ```sh
    cd website
    ```

3. Open `index.html` in your web browser.

## Usage

### Main Page

The main page features a Vanta.js halo background with your name in the center and buttons below it. The buttons link to your GitHub, Discord, Email, and the source code of this website.

### Radar Effect Page

1. Click the "Radar Effect" button on the main page to navigate to the radar effect page.
2. On the radar effect page, click the "Start Animation" button to start the radar animation and background sound.

## Files

- `index.html` - Main page with Vanta.js halo background.
- `styles.css` - CSS styles for the main page.
- `main.js` - JavaScript for the main page.
- `radar.html` - Radar effect page.
- `radar.css` - CSS styles for the radar effect page.
- `radar.js` - JavaScript for the radar effect page.

## Customization

### Vanta.js Background

You can customize the Vanta.js halo background by modifying the `VANTA.HALO` configuration in `main.js`.

### Radar Effect

- Update text elements in `radar.html` as needed.
- Customize the radar animation and text reveal timing in `radar.css` and `radar.js`.

### Background Sound

Replace `your-sound-file.wav` in `radar.html` with the path to your own `.wav` file for the background sound effect.

### What's to come?
A form to send emails instead of your email address, google analytics support and a cookie popup with a privacy policy

## License
mihai-max/website © 2024 by Mihai Laudat is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International 

## Contact

For any questions or suggestions, please contact [tckp@duck.com](mailto:tckp@duck.com).

