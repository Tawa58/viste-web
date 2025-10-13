// import React, { useState, useCallback } from 'react';
// // import Gallery from 'react-photo-gallery';
// // import Carousel, { Modal, ModalGateway } from 'react-images';

// // Gallery data cleaned. Add new gallery items as needed.
// const directories = [];

// const GalleryComponent = () => {
//   // Filter state for event and year
//   const [selectedEvent, setSelectedEvent] = useState('All');
//   const [selectedYear, setSelectedYear] = useState('All');

//   // Lightbox (modal) state
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [activeDirectory, setActiveDirectory] = useState(null);

//   // Filter directories based on the selected event and year
//   const filteredDirectories = directories.filter((dir) => {
//     return (
//       (selectedEvent === 'All' || dir.event === selectedEvent) &&
//       (selectedYear === 'All' || dir.year === selectedYear)
//     );
//   });

//   // Prepare gallery items (using the cover image for each directory)
//   const galleryItems = filteredDirectories.map((dir) => ({
//     src: dir.coverPhoto,
//     width: 4,
//     height: 3,
//     alt: `${dir.event} ${dir.year}`,
//     directory: dir, // Attach full directory info
//   }));

//   // Create filter options
//   const eventOptions = ['All', ...new Set(directories.map((dir) => dir.event))];
//   const yearOptions = ['All', ...new Set(directories.map((dir) => dir.year))];

//   // Open lightbox on cover image click, passing the directory photos to the Carousel
//   const openLightbox = useCallback((event, { photo, index }) => {
//     setActiveDirectory(photo.directory);
//     setCurrentImage(0); // Start at first photo of the directory
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setActiveDirectory(null);
//     setViewerIsOpen(false);
//     setCurrentImage(0);
//   };

//   return (
//     <div>
//       {/* Filter Bar */}
//       <div className="filterBar">
//         <div className="filterItem">
//           <label htmlFor="eventFilter">Event:</label>
//           <select
//             id="eventFilter"
//             value={selectedEvent}
//             onChange={(e) => setSelectedEvent(e.target.value)}
//           >
//             {eventOptions.map((opt, idx) => (
//               <option key={idx} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="filterItem">
//           <label htmlFor="yearFilter">Year:</label>
//           <select
//             id="yearFilter"
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(e.target.value)}
//           >
//             {yearOptions.map((opt, idx) => (
//               <option key={idx} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <Gallery photos={galleryItems} onClick={openLightbox} />

//       {/* Lightbox Modal with Carousel */}
//       <ModalGateway>
//         {viewerIsOpen && activeDirectory && (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={activeDirectory.photos.map((photo) => ({
//                 ...photo,
//                 caption: photo.alt,
//               }))}
//             />
//           </Modal>
//         )}
//       </ModalGateway>

//       {/* Styled-JSX for component-specific styles */}
//       <style jsx>{`
//         .filterBar {
//           display: flex;
//           justify-content: center;
//           margin-bottom: 20px;
//           flex-wrap: wrap;
//         }
//         .filterItem {
//           margin: 0 10px;
//           display: flex;
//           align-items: center;
//         }
//         .filterItem label {
//           margin-right: 5px;
//         }
//         @media (max-width: 768px) {
//           .filterBar {
//             flex-direction: column;
//             align-items: center;
//           }
//           .filterItem {
//             margin: 5px 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const HomePage = () => {
//   return (
//     <div className="container">
//       <h1 className="title">School Photo Gallery</h1>
//       <GalleryComponent />

//       {/* Global styles for this page */}
//       <style jsx>{`
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px;
//         }
//         .title {
//           text-align: center;
//           margin-bottom: 20px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;
