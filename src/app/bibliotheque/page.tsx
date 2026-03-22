"use client";

import { useState } from "react";
import { SearchIcon, BookIcon, StarIcon, FilterIcon } from "@/ui/components/CustomIcons";
import { LinkOrnate } from "@/ui/components/LinkOrnate";
import { ButtonOrnate } from "@/ui/components/ButtonOrnate";
import { CreateNoteButton } from "@/features/notes/components/CreateNoteButton";

const books = [
  { id: "1", title: "La République", author: "Platon", year: -380, category: "Métaphysique", description: "Dialogue fondateur de la philosophie politique.", rating: 5 },
  { id: "2", title: "Éthique à Nicomaque", author: "Aristote", year: -340, category: "Éthique", description: "Traité sur la vertu et le bonheur.", rating: 5 },
];

export default function BibliothequePage() {
  return (
    <div style={{ backgroundColor: "#faf9f7", minHeight: "100vh" }} className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2d2b29" }} className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8">Bibliothèque</h1>
      <p style={{ color: "#6b6966" }}>Coming soon - Collection de textes philosophiques</p>
      <CreateNoteButton variant="inline" />
    </div>
  );
}
