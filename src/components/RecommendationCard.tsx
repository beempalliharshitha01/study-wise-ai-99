import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  description: string;
  confidence: number;
}

export const RecommendationCard = ({ title, description, confidence }: RecommendationCardProps) => {
  return (
    <Card className="bg-secondary/30 border-0 hover:bg-secondary/50 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-primary/10 shrink-0">
            <Brain className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="font-medium text-sm">{title}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-accent" />
              <span className="text-xs text-muted-foreground">
                {confidence}% confidence
              </span>
              <Progress value={confidence} className="flex-1 h-1" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};