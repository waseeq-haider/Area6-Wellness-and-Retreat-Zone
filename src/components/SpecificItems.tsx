import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    number: 31,
    title: "10 ECO-LODGE CABINS",
    description: "Eco-friendly cabins designed for families and groups, each with 4 beds. Features modern amenities including solar panels, AC, and Wi-Fi while maintaining sustainable practices and natural aesthetics."
  },
  {
    title: "RAINWATER COLLECTION TANKS",
    description: "50,000L rainwater collection system providing sustainable water management for all lodge facilities. Integrated seamlessly into the landscape design."
  },
  {
    title: "SOLAR ARRAY & BATTERY STORAGE",
    description: "Comprehensive solar power system with battery storage ensuring energy independence. Powers all cabins with clean, renewable energy."
  },
  {
    title: "PRIVATE GARDENS & DECKING",
    description: "Each cabin features private garden spaces with native plantings and timber decking. Outdoor areas designed for relaxation and connection with nature."
  }
];

export const SpecificItems = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Specific Items</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Item 1 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up">
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/YOGA & MEDITATION PAVILIONS (Item 51).jfif"
                  alt="Yoga & Meditation Pavilions"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                  Item 51
                </div>
                <h3 className="text-2xl font-bold mb-4">YOGA & MEDITATION PAVILIONS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated spaces for yoga and meditation, designed to foster mindfulness and relaxation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Item 2 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/WATER FEATURE PONDS.jfif"
                  alt="Water Feature Ponds"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">WATER FEATURE PONDS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tranquil ponds and water features that enhance the calming atmosphere of the retreat zone.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Item 3 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/BOARDWALK & TIMBER PATHS.jfif"
                  alt="Boardwalk & Timber Paths"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">BOARDWALK & TIMBER PATHS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Timber boardwalks and paths meandering through the landscape, minimizing impact on the ground.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Item 4 */}
          <Card className="hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img
                  src="/assets/SHADE TREES & LOW SHRUBS.jfif"
                  alt="Shade Trees & Low Shrubs"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">SHADE TREES & LOW SHRUBS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Native shade trees and low shrubs providing privacy and a natural setting for relaxation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
