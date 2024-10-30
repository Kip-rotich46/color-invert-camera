# Art Show Interactive Experience

An interactive art gallery application that showcases artwork in an engaging way. Users can view an art gallery, capture snapshots from a live camera feed, and see uploaded artwork in real-time.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features
- **Art Gallery**: Displays a grid of artwork images from Firebase Storage.
- **Live Camera Feed**: Captures a live video feed, allowing users to take snapshots.
- **Snapshot Upload**: Allows users to take snapshots and uploads them to Firebase Storage.
- **QR Code for Art Interaction**: Enables an immersive experience by scanning QR codes to access additional content.
- **Navigation**: Intuitive navigation for Home, Gallery, About, and Contact pages.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/art-show-interactive-experience.git
   cd art-show-interactive-experience
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Storage for storing images.
   - Obtain the Firebase configuration credentials and add them to your environment.

4. **Environment Variables**
   - Create a `.env` file in the root directory.
   - Add Firebase configuration details:
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

5. **Run the Application**
   ```bash
   npm start
   ```

   Your application should now be running on [localhost:3000](http://localhost:3000).

## Usage

1. **Home Page**:
   - Displays a gallery preview and a live camera feed (if on the home page).
   - Users can click "Take Snapshot" to capture an image from the camera.

2. **Art Gallery**:
   - View more artwork and upload new images through the admin interface.

3. **QR Code Integration**:
   - Scan QR codes to access additional interactive features in the gallery.

## Project Structure

```plaintext
src/
├── components/
│   ├── Navbar/          # Navigation component
│   ├── Gallery/         # Gallery grid and snapshot functionality
│   ├── ArtShow/         # Displays additional interactive art elements
│   ├── ImageUpload/     # Uploads new images to Firebase
│   ├── Footer/          # Footer with contact information
├── App.js               # Main application component with routing
├── index.js             # Entry point for React
└── App.css              # Global styling
```

## Technologies Used

- **React**: Frontend framework for UI components and state management.
- **Firebase**: Storage for hosting images and managing real-time data.
- **React Router**: For navigation between application pages.
- **HTML5 Canvas**: Used for taking snapshots of the video feed.

## Future Improvements

- **Enhanced Security**: Limit image upload permissions to admins only.
- **User Gallery Interaction**: Allow users to leave comments or likes on artwork.
- **Image Inversion Feature**: Let users view inverted color schemes of selected artworks.
- **Push Notifications**: Alert users when new artwork is added.

## License

