import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, Clock, Star } from "lucide-react";

export const StudyMaterials = () => {
  const materials = [
    {
      title: "Introduction to Psychology",
      description: "Comprehensive overview of psychological principles and theories",
      progress: 85,
      difficulty: "Beginner",
      timeEstimate: "45 min",
      rating: 4.8,
      assessments: 3
    },
    {
      title: "Advanced Statistics",
      description: "Statistical analysis methods and data interpretation",
      progress: 62,
      difficulty: "Advanced",
      timeEstimate: "65 min",
      rating: 4.6,
      assessments: 5
    },
    {
      title: "Research Methods",
      description: "Scientific research design and methodology",
      progress: 30,
      difficulty: "Intermediate",
      timeEstimate: "55 min",
      rating: 4.7,
      assessments: 2
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Study Materials</h2>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>
        <Button variant="outline">
          <BookOpen className="mr-2 h-4 w-4" />
          View All
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material, index) => (
          <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{material.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {material.description}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-3 w-3 fill-current text-yellow-500" />
                  {material.rating}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {material.timeEstimate}
                <Badge variant="secondary" className="ml-2">
                  {material.difficulty}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{material.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${material.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-gradient-hero border-0" size="sm">
                  <Play className="mr-2 h-4 w-4" />
                  Continue
                </Button>
                <Button variant="outline" size="sm">
                  {material.assessments} Tests
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};