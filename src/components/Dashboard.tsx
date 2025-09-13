import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, TrendingUp, Brain, Upload, Target } from "lucide-react";
import { StudyStats } from "./StudyStats";
import { DocumentUpload } from "./DocumentUpload";
import { StudyMaterials } from "./StudyMaterials";
import { RecommendationCard } from "./RecommendationCard";
import heroStudy from "@/assets/hero-study.jpg";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroStudy} 
            alt="Study Platform" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your Personalized Study System
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Upload documents, get AI-generated assessments, track your progress, and receive personalized study recommendations.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Upload className="mr-2 h-5 w-5" />
              Upload Documents
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Target className="mr-2 h-5 w-5" />
              Start Assessment
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Overview */}
        <StudyStats />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Document Upload Section */}
          <div className="lg:col-span-2">
            <DocumentUpload />
          </div>
          
          {/* Quick Actions */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Study Assistant
              </CardTitle>
              <CardDescription>
                Get personalized recommendations based on your learning progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RecommendationCard 
                title="Focus on Weak Areas"
                description="Your analysis shows room for improvement in chapter 3"
                confidence={85}
              />
              <RecommendationCard 
                title="Review Previous Topics"
                description="Strengthen your foundation before moving forward"
                confidence={92}
              />
              <Button className="w-full bg-gradient-accent border-0">
                Generate New Assessment
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Study Materials */}
        <StudyMaterials />
      </div>
    </div>
  );
};