# Memory Game Setup Guide

This guide provides instructions on how to set up and run the Memory Game locally on your machine, using WhatsApp stickers.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Game](#running-the-game)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

- A web browser (Chrome, Firefox, Safari, etc.)

## Installation

Follow these steps to set up the game:

1. **Clone the Repository**

    Clone the repository to your local machine using the following command:

    ```bash
    git clone https://github.com/yourusername/memory-game.git
    ```

2. **Navigate to the Project Directory**

    Change into the project directory:

    ```bash
    cd memory-game
    ```

3. **Add WhatsApp Stickers**

    Collect the WhatsApp stickers you want to use and save them in an `images` folder within the project directory. Make sure the image files are named appropriately, such as `sticker1.png`, `sticker2.png`, etc.

## Running the Game

To run the game, simply open the `index.html` file in your web browser. You can do this by:

1. Double-clicking the `index.html` file.
2. Or, opening the file from your browser via `File > Open File` and selecting the `index.html` file from the project directory.

## Project Structure

The project directory contains the following files:

```
memory-game/
│
├── index.html      # The main HTML file that sets up the game structure
├── styles.css      # The CSS file that contains styling for the game
├── script.js       # The JavaScript file that contains the game logic
├── images/         # Folder containing WhatsApp sticker images
└── README.md       # This readme file
```

## How to Play

1. Open the game in your web browser by following the steps in the [Running the Game](#running-the-game) section.
2. Click on a card to flip it and reveal its content.
3. Click on a second card to try and find its match.
4. If the cards match, they will remain flipped. If not, they will flip back over.
5. Continue flipping cards to find all matching pairs.
6. A congratulations message will appear when all pairs are found.

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
