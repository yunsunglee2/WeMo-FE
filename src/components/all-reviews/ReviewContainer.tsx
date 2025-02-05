import React, { useState } from 'react';
import { useReviews } from '@/hooks/useReviews';
import FilterBar from '@/components/shared/FilterBar';
import ReviewList from '@/components/all-reviews/ReviewList';
import { FilterState } from '@/types/reviewType';
import Loader from './Loader';

const ReviewContainer = ({ category }: { category: string }) => {
  const [filters, setFilters] = useState<FilterState>({
    region: null,
    subRegion: null,
    date: null,
    sort: null,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useReviews(
    category,
    filters,
  );

  const reviews = data?.pages.flatMap((page) => page.reviews) || [];

  return (
    <>
      <FilterBar
        filters={filters}
        onFilterChange={(newFilters) =>
          setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
        }
        sortOptions={[
          { id: 0, name: '전체', value: '' },
          { id: 1, name: '평점 높은 순', value: 'ratingOrder' },
        ]}
      />
      <div className="mt-4">
        <ReviewList reviews={reviews} />
      </div>
      <Loader
        isLoading={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};

export default ReviewContainer;
