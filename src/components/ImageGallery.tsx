// Images are now referenced directly from public/assets

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  // Final Mockups - Overview
  { src: "/assets/Wellness & Retreat Zone.jpeg", alt: "Wellness & Retreat Zone - Main View", category: "Overview" },
  { src: "/assets/area6_01.png", alt: "Area 6 - Perspective 1", category: "Overview" },
  { src: "/assets/area6_02.png", alt: "Area 6 - Perspective 2", category: "Overview" },
  { src: "/assets/area6_03.png", alt: "Area 6 - Perspective 3", category: "Overview" },
  { src: "/assets/Wellness & Retreat Zone.png", alt: "Floor Plan - Wellness Zone", category: "Floor Plans" },

  // Features
  { src: "/assets/Meditation pavilions and yoga decks.jfif", alt: "Meditation Pavilions", category: "Features" },
  { src: "/assets/Walking trails for quiet reflection.jfif", alt: "Walking Trails", category: "Features" },
  { src: "/assets/Water features ponds and small streams.png", alt: "Water Features", category: "Features" },

  // Specific Items
  { src: "/assets/YOGA & MEDITATION PAVILIONS (Item 51).jfif", alt: "Yoga & Meditation Pavilions", category: "Specific Items" },
  { src: "/assets/WATER FEATURE PONDS.jfif", alt: "Water Feature Ponds", category: "Specific Items" },
  { src: "/assets/BOARDWALK & TIMBER PATHS.jfif", alt: "Boardwalk & Timber Paths", category: "Specific Items" },
  { src: "/assets/SHADE TREES & LOW SHRUBS.jfif", alt: "Shade Trees & Low Shrubs", category: "Specific Items" },

  // References
  { src: "/assets/Planting native ferns, sedges, Eucalyptus species.jfif", alt: "Native Planting", category: "References" },
  { src: "/assets/Ground surfaces timber decking and gravel pathways.jfif", alt: "Ground Surfaces", category: "References" },
  { src: "/assets/Design by Sandara Passos and Veronica Bosque.jfif", alt: "Designed by Sandara Passos and Veronica Bosque", category: "References" }
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-up">Image Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Explore the complete visual documentation of Area 6 - Wellness & Retreat Zone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary-foreground/80 mb-1">{image.category}</p>
                  <p className="text-lg font-semibold text-primary-foreground">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            <img
              src={selectedImage || ''}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
