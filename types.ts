import React from 'react';

export interface WorkflowStep {
  title: string;
  description: string;
  image: string; // URL to the screenshot
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  tags: string[];
  icon: React.ReactNode;
  color: string;
  workflows?: WorkflowStep[];
  keyFeatures?: { title: string; desc: string; icon: React.ReactNode }[]; // Added for better overview
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 0-100
  color: string;
}