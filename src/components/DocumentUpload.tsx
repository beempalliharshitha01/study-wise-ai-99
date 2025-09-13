import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File, CheckCircle } from "lucide-react";
import { useState } from "react";

export const DocumentUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop logic here
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5 text-primary" />
          Upload Study Materials
        </CardTitle>
        <CardDescription>
          Upload PDFs, documents, or images to create personalized assessments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-lg font-medium">Drop files here or click to browse</p>
              <p className="text-sm text-muted-foreground mt-1">
                Supports PDF, DOCX, TXT, and image files up to 20MB
              </p>
            </div>
            <Button className="bg-gradient-hero border-0">
              Choose Files
            </Button>
          </div>
        </div>

        {/* Recent uploads */}
        <div className="mt-6 space-y-3">
          <h3 className="font-medium text-sm text-muted-foreground">Recent Uploads</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <File className="h-4 w-4 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-sm">Introduction to Psychology.pdf</p>
                <p className="text-xs text-muted-foreground">Uploaded 2 hours ago</p>
              </div>
              <CheckCircle className="h-4 w-4 text-accent" />
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <File className="h-4 w-4 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-sm">Statistics Notes.docx</p>
                <p className="text-xs text-muted-foreground">Uploaded yesterday</p>
              </div>
              <CheckCircle className="h-4 w-4 text-accent" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};