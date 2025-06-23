import React from 'react'

const CategoryChip = ({category}) => {
  return (
    <p className="bg-gray-700 border-1 w-70 border-gray-300/20 rounded-sm text-center text-sm text-secondary">
      {category}
    </p>
  );
}

export default CategoryChip