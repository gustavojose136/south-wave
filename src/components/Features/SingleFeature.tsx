import { Feature } from "@/types/feature";
import Link from "next/link";
import { Icon } from "@iconify/react";

type SingleFeatureProps = {
  feature: Feature;
  index?: number;
};

const SingleFeature = ({ feature, index }: SingleFeatureProps) => {
  const { icon, title, paragraph, btn, btnLink } = feature;

  return (
    <div
      className="
        wow fadeInUp
        group
        mb-12
        w-full
        rounded-xl
        bg-[#1b2757]
        p-6
        shadow-md
        hover:shadow-xl
        transition
        hover:-translate-y-2
        flex
        flex-col
        h-full
        justify-between
      "
      data-wow-delay={`${0.15 + (index || 0) * 0.1}s`}
    >
      {/* Parte superior (ícone, título, texto) */}
      <div>
        <div
          className="
            relative
            z-10
            mb-8
            flex
            h-[70px]
            w-[70px]
            items-center
            justify-center
            rounded-2xl
            bg-primary
            text-white
            shadow-lg
            transition-transform
            duration-300
            group-hover:rotate-12
            group-hover:scale-110
          "
        >
          <span
            className="
              absolute
              left-0
              top-0
              -z-10
              h-[70px]
              w-[70px]
              rounded-2xl
              bg-primary
              bg-opacity-30
              rotate-0
              transition
              duration-300
              group-hover:rotate-45
            "
          />
          {icon}
        </div>
        <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
        <p className="mb-8 text-base text-gray-200">{paragraph}</p>
      </div>

      {/* Parte inferior (botão/link) */}
      <div>
        <Link
          href={btnLink}
          className="
            inline-flex
            items-center
            gap-1
            text-base
            font-medium
            text-white
            hover:text-primary
            transition-colors
          "
        >
          {btn}
          <Icon icon="material-symbols:arrow-right-alt-rounded" className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
