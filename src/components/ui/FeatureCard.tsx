'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border-border hover:border-accent/50 group rounded-2xl border p-6 transition-colors"
    >
      <div className="bg-muted text-foreground group-hover:text-accent group-hover:bg-accent/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full transition-colors [&>svg]:h-6 [&>svg]:w-6">
        {icon}
      </div>
      <h3 className="font-heading text-foreground mb-3 text-xl font-semibold">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
