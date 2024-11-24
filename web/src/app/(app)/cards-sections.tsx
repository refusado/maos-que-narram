'use client';

import { useEffect, useState } from 'react';
import { Filters } from './filters';
import { ListStories } from './list-stories';
import { Category, Story } from '@/types';
import { fetchAllStories, fetchHighlightedStories } from '@/utils/fetch-story';

export function CardsSections() {
  const [highlightedItems, setHighlightedItems] = useState<Story[]>([]);
  const [allItems, setAllItems] = useState<Story[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchStories() {
      const highlightedStories = await fetchHighlightedStories();
      setHighlightedItems(highlightedStories);

      const allStories = await fetchAllStories();
      setAllItems(allStories);
    }

    fetchStories();
  }, []);

  const filteredItems = selectedCategories.length
    ? allItems.filter((story) => selectedCategories.includes(story.category))
    : allItems;

  return (
    <>
      <section id="destaques" className="container px-4 py-8">
        <h2 className="mb-6 text-5xl">Destaques</h2>
        <ListStories items={highlightedItems} />
      </section>

      <section id="todos" className="container px-4 py-8 pb-40">
        <h2 className="mb-6 text-5xl">Todas histórias</h2>
        <div className="mb-10">
          <Filters
            selectedCategories={selectedCategories}
            onChange={setSelectedCategories}
          />
        </div>
        <ListStories items={filteredItems} />
      </section>
    </>
  );
}
