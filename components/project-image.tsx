// ProjectImage.jsx
import React from 'react';
import Link from 'next/link';

type ProjectImageProps = {
  imageSrc: string;
  href?: string;
};

const ProjectImage = ({ imageSrc, href }: ProjectImageProps) => {
  return (
    <div className="inline-block min-w-[150px] max-w-[150px] mx-4 animate-fade">
      {href ? (
        <Link href={href}>
          <img src={imageSrc} alt="Project" className="w-full h-auto rounded-2xl" />
        </Link>
      ) : (
        <img src={imageSrc} alt="Project" className="w-full h-auto rounded-2xl" />
      )}
    </div>
  );
};

export default ProjectImage;